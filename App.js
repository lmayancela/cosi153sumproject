import React, { useState, useEffect, useRef } from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
// Local imports
import AppNavigator from './app/navigation/AppNavigator';
import { NotifierContext } from './app/contexts/NotifierContext';
import { Splash } from './app/screens';

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
      const {status} = await Notifications.requestPermissionsAsync();
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

  useEffect(() => {
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

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate a profile loading action by waiting a second
  })

  if (isLoading) {
    return <Splash />;
  }


  // Add theme prop to NavigationContainer later
  return (
    <NavigationContainer>
      <NotifierContext.Provider
        value={{
          Notifications, expoPushToken, notification
        }}>
        <AppNavigator />
      </NotifierContext.Provider>
    </NavigationContainer>
  );
}

export default App;
