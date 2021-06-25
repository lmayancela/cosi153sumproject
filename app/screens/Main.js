//Main app screen
import React from 'react';
import styles from '../config/styles';
import { Button, Text, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import Logo from '../components/Logo';

const Main = ({ navigation }) => { // navigation is the stack navigator sent from App.js

  const buttonColor = '#00FF00'; // TODO This should be moved to styles...

  return (

    <ScreenContainer>
      <View style={styles.screenContainer}>
        <View style={{ width: '80%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.statement}>
            Mission Statement:
          </Text>
          <Text style={styles.subStatement}>
            BotherMe is here to bother you. Our mission is to bring the best quality of accountability to our users.
            No matter what, when and where, we will be here to remind you over and over again of your responsibilities.
          </Text>
          <Text style={styles.subStatement}>
            Slogan: BotherMe will bring you from To Do To Done.
          </Text>
        </View>
        <Logo />

        <View style={styles.screenButtonContainer}>

          <Button color={buttonColor}
            title="Create a new reminder"
            onPress={() => navigation.push("CreateReminder", { //Everything in the brackets is extra props
              name: "Create Default Reminder Screen"  // Name at top of screen
            })}
          />
          <Button
            color={buttonColor}
            title="Show all reminders"
            onPress={() => navigation.push("ReminderList", {
              name: "List of All Reminders Screen"
            })}
          />
          {/* TODO: if we intend to have all buttons be the same color, we should create a new component called ColoredButton. */}
          {/* <Button
            color={buttonColor}
            title="Send an email"
            onPress={() => navigation.push("SendEmail", {
              name: "Lisandro Email Send Test"
            })}
          /> */}
          <Button
            title="Send a Notification"
            onPress={() => navigation.push("NotificationTest", {
              name: "Notification Test Screen"
            })}
          />
        </View>
        {/* Why are there two nested views? Too redundant... */}
      </View>
    </ScreenContainer>

  )
};

export default Main;



          