//ReminderList component
import React from 'react';
import {
  Button,
  Text
} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';

export default ReminderList = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>All Reminders</Text>
      <Button title="This button does nothing" />
    </ScreenContainer>
  )
}