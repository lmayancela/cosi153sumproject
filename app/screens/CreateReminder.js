//CreateReminder screen
import React from 'react';
import { Text } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';

const CreateReminder = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Create a Reminder</Text>
      <Text style={styles.header}>Sign Up Form</Text>
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
    </ScreenContainer>
  );
}

export default CreateReminder;
