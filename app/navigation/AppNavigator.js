import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Notifications } from 'expo';
// import * as Permissions from 'expo-permissions'

import MainNavigator from './MainNavigator';
// import expoPushTokensApi from '../api/expoPushTokens';
import ProfileNavigator from './ProfileNavigator';

const Tabs = createBottomTabNavigator();

//to be exported
const AppNavigator = () => {
  useEffect(() => {
    registerForPushNotifications();
  }, [])

  const registerForPushNotifications = async () => { 
    try {
       const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
       if (!permission.granted) return;

       const token = await Notifications.getExpoPushTokenAsync();
       console.log(token);
    } catch (error) {
      console.log('Error getting a token', error);
    }
  }

  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Main"
        component={MainNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default AppNavigator;