import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import SignInNavigator from './SignInNavigator';
import SignUpNavigator from './SignUpNavigator';

const Tabs = createBottomTabNavigator();

const RootNavigator = () => {
  let tempColor = '#f09f2a'

  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="SignIn"
        component={SignInNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={tempColor}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="SignUp"
        component={SignUpNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account"
              color={tempColor}
              size={size}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default RootNavigator;
