import React, { useState, useEffect, useRef } from 'react';
import { Platform, Text, View, ActivityIndicator, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
// Local imports
import AppNavigator from './app/navigation/AppNavigator';
import RootNavigator from './app/navigation/RootNavigator';

import { NotifierContext } from './app/contexts/NotifierContext';
import { Splash } from './app/screens';
import { AuthContext } from './app/components/context';
import Clock from './app/components/renderless/Clock';
import AsyncStorage from '@react-native-async-storage/async-storage';

// #### Notifications ####
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlayAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false
  }),
});

// Top-level push notification registry checker
async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Push notification token request failed!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(`Got token: ${token}`);
  } else {
    alert('Push Notifications requires a physical device (like a phone)');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 125, 250],
      lightColor: '#FF1F237C',
    });
  }
  return token;
}
// #### End Notifications ####

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // TODO will be used for auth purposes...maybe not?
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const [users, setUsers] = useState([])

  // authentication vars
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  }

  // the reducer handles state varibales
  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  //create the loginReducer
  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  // get all users
  const getUsers = async () => {
    try {
        console.log("try to get users");
        const jsonValue = await AsyncStorage.getItem('@users')
        let data = null
        if (jsonValue!=null) {
          data = JSON.parse(jsonValue)
          console.log('just get users!')
          setUsers(data)
        } else {
          console.log('just read a null value from Storage')
        }
      } catch(e) {
        console.log("error in getData ")
        console.log(e)
        console.dir(e)
      }
  }

  //create authContext
  const authContext = React.useMemo(() => ({
    signIn: async(newUser) => {
      getUsers()
      //console.log(users)
      //console.log(newUser)
      const foundUser = users.filter( item => {
          return newUser.username == item.username && newUser.password == item.password;
      } );

      if ( foundUser.length == 0 ) {
          Alert.alert('Invalid User!', 'Username or password is incorrect.', [
              {text: 'Okay'}
          ]);
          return;
      }
      const userToken = String(foundUser[0].username + "token");
      const userName = foundUser[0].username;

      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async() => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: async(newUser) => {
      const userToken = newUser.username + "token";
      const userName = newUser.username;

      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch(e) {
        console.log(e);
      }

      getUsers();
      users.push(newUser)
       // save new user list
       try {
           const jsonValue = JSON.stringify(users)
           await AsyncStorage.setItem('@users', jsonValue)
           console.log('just stored '+jsonValue)
           Alert.alert('Successfully Signed Up!', 'You are logged in!', [
               {text: 'Okay'}
           ]);
       } catch (e) {
           console.log("error in storeData ")
           console.dir(e)
           // saving error
       }
      // console.log('user token: ', userToken);
      dispatch({ type: 'REGISTER', id: userName, token: userToken });
    }
  }), []);

  useEffect(() => {
    // get the user token for rendering
    setTimeout(async() => {
      //setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);

    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    // Foregrounded app notification listener
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    // Notification-was-interacted-with listener (Foreground and background)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    // Callback/cleanup
    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);


  if( loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  // Add theme prop to NavigationContainer later
  return (
    <AuthContext.Provider value={authContext}>
    <Clock />
    <NavigationContainer>
      <NotifierContext.Provider
        value={{
          Notifications, expoPushToken, notification
        }}>
        { loginState.userToken !== null ?
          (<AppNavigator />)
          :
          <RootNavigator />
        }
      </NotifierContext.Provider>
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
