//Main app screen
import React from 'react';
import {
  Button,
  Text,
  View
} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';

const Main = ({ navigation }) => { // navigation is the stack navigator sent from App.js
  return (
    <ScreenContainer>
      <Text>
        This is the main screen. This will be the first thing that the user sees after they log in.
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
        <Button
          title="Lisandro's Send Email yeet"
          onPress={() =>
            navigation.push("SendEmail", {
              name: "Remember that you have a limited number of emails left"
            })}
        />
      </View>
    </ScreenContainer>
  );
}

export default Main;
