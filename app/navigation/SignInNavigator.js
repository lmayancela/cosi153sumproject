import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SignIn,
} from '../screens/index';
//import ProfileHome from '../screens/ProfileHome';

const Stack = createStackNavigator();

// Log out should go here as well
// Need to change name of View Account Details
const SignInNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='SignIn' component={SignIn} />
  </Stack.Navigator>
);

export default SignInNavigator;
