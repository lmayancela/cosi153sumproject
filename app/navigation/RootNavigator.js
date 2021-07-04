import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import SignInNavigator from './SignInNavigator';
import SignUpNavigator from './SignUpNavigator';

import { SignIn, SignUp } from '../screens/index';

const Tabs = createBottomTabNavigator();

const RootNavigator = () => {
  let tempColor = '#f09f2a'

  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="SignIn"
        component={SignIn}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="key"
              color={tempColor}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="SignUp"
        component={SignUp}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus"
              color={tempColor}
              size={size}
            />
          )
        }}
      />
    </Tabs.Navigator>
  );
};

export default RootNavigator;
