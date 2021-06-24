import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import MainNavigator from './MainNavigator';
import ProfileNavigator from './ProfileNavigator';

const Tabs = createBottomTabNavigator();

const AppNavigator = () => {
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