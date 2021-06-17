import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Form = (props) => {
  const [info, setInfo] = useState({ username: "", notiTypes: "", notiFreq: "", task: { name: "", dueDate: "", notes: "" } });
  const [username, setUsername] = useState("");
  const [taskName, setTaskName] = useState([]); //concat onto list, have the option to add more at a time later
  const [taskDueDate, setTaskDueDate] = useState(); //blank date?
  const [notificationType, setNotificationType] = useState([]); //keeping this as general rather than per task for now
  const [notificationFrequency, setNotificationFrequency] = useState("");
  const [taskName, setTaskName] = useState("");

  return (
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

      <Button
        title="submit"
        onPress={() => {
          //NR: these constants weren't defined before...should probably define them at top of tile and then re-assign their value here
          const theTask = { taskName, taskDueDate, taskNotes } //i think i coud do these to lines in one but mybe this is cleaerer
          //get task list from database to append
          const theInfo = { userName, notificationFrequency, notificationType, theTask }

        }}
      />
      </View>
)}
