import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

import styles from './styles/styles';

// TODO will need to add a Context object later to track the logged-in user

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Main = ({ navigation }) => { // navigation is the stack navigator sent from App.js
  return (
    <ScreenContainer>
      <Text>
        Lorem ipsum
      </Text>
      <View>
        <Button
          title="Create a new reminder"
          onPress={() =>
            navigation.push("CreateReminder", { //Everything in the brackets is extra props
              name: "Create Default Reminder Screen"  // Name at top of screen
            })}
        />
        <Button
          title="Show all reminders"
          onPress={() =>
            navigation.push("ReminderList", {
              name: "List of All Reminders Screen"
            })}
        />
      </View>
    </ScreenContainer>
  );
}

export const CreateReminder = ({ navigation }) => (
  <ScreenContainer>
    <Text>Create a Reminder</Text>
  </ScreenContainer>
);

export const ReminderList = ({ navigation }) => (
  <ScreenContainer>
    <Text>All Reminders</Text>
    <Button title="This button does nothing"/>
  </ScreenContainer>
);

export const UserDetails = () => (
  <ScreenContainer>
    <Text>Account information and phone number connects go here</Text>
  </ScreenContainer>
);

export const Splash = () => (
  <ScreenContainer>
    <Text>Loading</Text>
  </ScreenContainer>
);
