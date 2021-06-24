//CreateReminder screen
import React from 'react';
import { Button, Text, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import styles from '../config/styles';

const CreateReminder = ({ navigation }) => {

  const buttonColor = '#00FF00';

  return (
    <ScreenContainer>
      <View style={styles.screenContainer}>
        <View style={styles.screenButtonContainer}>

          <Text>Create a Reminder</Text>

        </View>
      </View>
    </ScreenContainer>
  );
}

export default CreateReminder;
