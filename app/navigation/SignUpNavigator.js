import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SignUp
} from '../screens/index';
import ProfileHome from '../screens/ProfileHome';

const Stack = createStackNavigator();

// Log out should go here as well
// Need to change name of View Account Details
const SignUpNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='SignUp' component={SignUp} />
  </Stack.Navigator>
);

export default SignUpNavigator;
