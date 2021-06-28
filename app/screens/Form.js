import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, Picker, Platform } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';

import ScreenContainer from '../components/ScreenContainer';
import styles from '../config/styles';

// This name will probably need changing later
const Form = (props) => {
  const [info, setInfo] = useState({ username: "", email:"" });
  const [username, setUsername] = useState("");
<<<<<<< Updated upstream
  const [taskNotes, setTaskNotes] = useState("");
  const [taskName, setTaskName] = useState([]); //concat onto list, have the option to add more at a time later
  const [taskDueDate, setTaskDueDate] = useState(new Date(Date.now())); // new Date object that is today
  const [datePickerMode, setDatePickerMode] = useState('date'); // Used for date picker mode, time or date
  const [showDatePicker, setShowDatePicker] = useState(false); // If date picker is shown or not.
  const [notificationType, setNotificationType] = useState([]); //keeping this as general rather than per task for now
  const [notificationFrequency, setNotificationFrequency] = useState("");

  // holds the task just in case i guess
  var task

  console.log(Platform.OS)

  const buttonColor = '#00FF00';

  return (
    <ScreenContainer>
      <View style={styles.screenButtonContainer}>

        <View>
          <Text style={styles.header}>Sign Up Form</Text>
          <View style={styles.rowContainer}>
            <Text>Enter your name:</Text>
            <TextInput
              style={styles.textinput}
              onChangeText={text => { setUsername(text) }}
              value={username} //tbh dont know the purpose of this line
            />
          </View>
          <View style={styles.rowContainer}>
            <Text>What is the task you want to complete?</Text>
            <TextInput
              style={styles.textinput}
              onChangeText={text => { setTaskName(text) }}
            />
          </View>
          <View style={styles.rowContainer}>
            <Text>When should your task be done by?</Text>
            <TextInput
              style={styles.textinput}
              onChangeText={text => { setTaskDueDate(text) }}
            />
          </View>
          <View style={styles.rowContainer}>
            <Text>How would you like to be notified?</Text>
            <TextInput
              style={styles.textinput}
              onChangeText={text => { setNotificationType(text) }}
              value={null} //tbh dont know the purpose of this line //NR: added null just to avoid compilation errors
            />
          </View>
          <View style={styles.rowContainer}>
            <Text>How often would you like to be notified?</Text>
            <TextInput
              style={styles.textinput}
              onChangeText={text => { setNotificationFrequency(text) }}
              value={null} //ditto above
            />
          </View>
          <View style={styles.rowContainer}>
            <Text>(Optional) Notes about your task:</Text>
            <TextInput
              style={styles.textinput}
              onChangeText={text => { setTaskNotes(text) }}
              value={null} //ditto above
            />
          </View>

          {/* // this button is buggy since taskNotes isn't yet defined */}
          <Button
            color={buttonColor}
            title="submit"
            onPress={() => {
              //NR: these constants weren't defined before...should probably define them at top of tile and then re-assign their value here
              const theTask = { taskName, taskDueDate, taskNotes } //i think i coud do these to lines in one but mybe this is cleaerer
              //get task list from database to append
              const theInfo = { userName, notificationFrequency, notificationType, theTask }

            }}
          />
        </View>


        {/* // this button is buggy since taskNotes isn't yet defined */}
        <Button
          title="submit"
          onPress={() => {
            //NR: these constants weren't defined before...should probably define them at top of tile and then re-assign their value here
            const theTask = { taskName, taskDueDate, taskNotes } //i think i coud do these to lines in one but mybe this is cleaerer
            //get task list from database to append
            const theInfo = { username, notificationFrequency, notificationType, theTask }
            console.log(theTask);
            console.log(theInfo);
          }}
        />
      </View>
<<<<<<< Updated upstream
=======
  const [email, setEmail] = useState("");

  return (
    <ScreenContainer>
      <ScrollView>

        <View>
          <Text style={styles.header}>Sign Up Form</Text>
            <Text>Enter your name:</Text>
            <TextInput
              style={styles.textinput}
              onChangeText={text => { setUsername(text) }}
              value={username} //tbh dont know the purpose of this line
            />
            <Text>Enter your email:</Text>
            <TextInput
              style={styles.textinput}
              onChangeText={text => { setEmail(text) }}
              value={email} //tbh dont know the purpose of this line
            />
            <Button
          title="submit"
          onPress={() => {
            const theInfo = { username, email }
          }}
        />
        </View>
      </ScrollView>
    </ScreenContainer>
  );

}
>>>>>>> Stashed changes
=======
    </ScreenContainer>
  )}
>>>>>>> Stashed changes


export default Form;
