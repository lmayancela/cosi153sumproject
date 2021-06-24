import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import {
  Main,
  CreateReminder,
  ReminderList,
  NotificationTest
} from '../screens/index';

const Stack = createStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Main' component={Main} options={{
      title: "Main Screen"
    }} />
    <Stack.Screen name='CreateReminder' component={CreateReminder} options={({ route }) => ({
      title: route.params.name,
      user: 'FILL_LATER'
    })}
    />
    <Stack.Screen name='ReminderList' component={ReminderList} options={({ route }) => ({
      title: route.params.name,
      user: 'FILL_LATER'
    })}
    />
    <Stack.Screen name='NotificationTest' component={NotificationTest} options={({ route }) => ({
      title: route.params.name,
    })}
    />

  </Stack.Navigator>
);
// TODO should send authenticated user name as an option in above screen props

export default MainNavigator;