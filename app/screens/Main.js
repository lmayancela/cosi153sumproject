//Main app screen
import React from 'react';
import styles from '../config/styles';
import { Button, Text, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import Logo from '../components/logo';

const Main = ({ navigation }) => { // navigation is the stack navigator sent from App.js

  const buttonColor = '#00FF00';

  return (

    <ScreenContainer>
      <View style={styles.screenContainer}>

        <View style={{ width: '80%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.statement}>
          Mission Statement:
          </Text>
          <Text style={styles.subStatement}>
          BotherMe is here to bother you. Our mission is to bring the best quality of accountability to our users. No matter what, when and where, we will be here to remind you over and over again of your responsibilities.
          </Text>
          <br />
          <Text style={styles.subStatement}>
          Slogan: BotherMe will bring you from To Do To Done.
          </Text>
        </View>

        <br />
        <br />
        <Logo></Logo>
        <br />
        <br />
        <View style={styles.screenButtonContainer}>

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
