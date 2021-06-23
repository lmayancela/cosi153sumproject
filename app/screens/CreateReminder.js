//CreateReminder screen
import React from 'react';
import { Text } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import Form from './Form'

const CreateReminder = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Create a Reminder</Text>
      <Form></Form>
    </ScreenContainer>
  );
}

export default CreateReminder;
