import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  UserDetails
} from '../screens/index';

const Stack = createStackNavigator();

// Log out should go here as well
// Need to change name of View Account Details
const ProfileNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='View Account Details' component={UserDetails} />
    {/* Aris drop your screen here */}
  </Stack.Navigator>
);

export default ProfileNavigator;