import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import {
  Main,
  CreateReminder,
  ReminderList,
  UserDetails,
  Splash
} from './screens/index';

const Tabs = createBottomTabNavigator();
const MainStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen name='Main' component={Main} options={{
      title: "Main Screen"
    }}/>
    <MainStack.Screen name='CreateReminder' component={CreateReminder} options={({ route }) => ({
      title: route.params.name,
      user: 'FILL_LATER'
    })}
    />
    <MainStack.Screen name='ReminderList' component={ReminderList} options={({ route }) => ({
      title: route.params.name,
      user: 'FILL_LATER'
    })}
    />

  </MainStack.Navigator>
);
// TODO should send authenticated user name as an option in above screen props

// Log out should go here as well
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name='View Account Details' component={UserDetails} />

  </ProfileStack.Navigator>
);


const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name='Main' component={MainStackScreen} />
    <Tabs.Screen name='Profile' component={ProfileStackScreen} />
  </Tabs.Navigator>
);

const RootStack = createStackNavigator();
// headerMode='none'
const RootStackScreen = () => (
  <RootStack.Navigator>
    <RootStack.Screen name='BotherMe' component={TabsScreen} />
  </RootStack.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = useState(true); // TODO will be used for auth purposes

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate a profile loading action by waiting a second
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      {/* <RootStackScreen /> */}
      <TabsScreen />
    </NavigationContainer>
  );
}
