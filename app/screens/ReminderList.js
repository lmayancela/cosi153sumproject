//ReminderList component
import React from 'react';
import { Button, Text, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import styles from '../config/styles';

const ReminderList = ({ navigation }) => {

  const buttonColor = '#00FF00';

  return (
    <ScreenContainer>
      <View style={styles.screenContainer}>
        <View style={styles.screenButtonContainer}>

          <Text>All Reminders</Text>
          <Button color={buttonColor} title="This button does nothing" />

        </View>
      </View>
    </ScreenContainer>
  );
}

export default ReminderList;
