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
        <Text>Please enter your username:</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={text => {setUsername(text) }}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text>Please enter your email:</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={text => {setEmail(text) }}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text>Please enter your username:</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={text => {setPhoneNumber(text) }}
        />
      </View>
    </ScreenContainer>
  )
}

export default CreateReminder;
