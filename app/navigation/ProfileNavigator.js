import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Form,
  UserDetails,
  SignOut,
} from '../screens/index';
import ProfileHome from '../screens/ProfileHome';

const Stack = createStackNavigator();

// Log out should go here as well
// Need to change name of View Account Details
const ProfileNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='ProfileHome' component={ProfileHome} />
    <Stack.Screen name='UserDetails' component={UserDetails} />
    <Stack.Screen name='Form' component={Form} />
    <Stack.Screen name='SignOut' component={SignOut} />
  </Stack.Navigator>
);

export default ProfileNavigator;
