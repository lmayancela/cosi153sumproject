import React, { useState, useEffect, useRef } from 'react';
import { Platform, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
// Local imports
import AppNavigator from './app/navigation/AppNavigator';
import RootNavigator from './app/navigation/RootNavigator';

import { NotifierContext } from './app/contexts/NotifierContext';
import { Splash } from './app/screens';
import { AuthContext } from './app/components/context';
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

  //create authContext
  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      const userToken = String(foundUser[0].userToken);
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
    signUp: () => {
      //TODO: need to send user data to server and get a token
    },
    toggleTheme: () => {
      setIsDarkTheme( isDarkTheme => !isDarkTheme );
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
