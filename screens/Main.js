//Main app screen
import React from 'react';
import {
  Button,
  Text,
  View
} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';

export default Main = ({ navigation }) => { // navigation is the stack navigator sent from App.js
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
