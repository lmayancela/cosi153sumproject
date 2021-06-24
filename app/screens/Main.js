//Main app screen
import React from 'react';
import styles from '../config/styles';
import { Button, Text, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';

const Main = ({ navigation }) => { // navigation is the stack navigator sent from App.js

  const buttonColor = '#00FF00';

  return (

    <ScreenContainer>
      <View style={styles.screenContainer}>
        <View style={styles.screenButtonContainer}>

          <Text>
            Testing : This is the main screen. This will be the first thing that the user sees after they log in.
          </Text>
          <br />
          <Button color={buttonColor} title="Create a new reminder" onPress={() => navigation.push("CreateReminder", { //Everything in the brackets is extra props
            name: "Create Default Reminder Screen"  // Name at top of screen
          })} />
          <br />
          <Button color={buttonColor} title="Show all reminders" onPress={() => navigation.push("ReminderList", {
            name: "List of All Reminders Screen"
          })} />

        </View>
      </View>
    </ScreenContainer>

  );
}

export default Main;
