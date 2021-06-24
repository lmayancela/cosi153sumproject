//UserDetails screen
import React from 'react';
import { Button, Text, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import styles from '../config/styles';

const UserDetails = () => {

  return (
    <ScreenContainer>
      <View style={styles.screenContainer}>
        <View style={styles.screenButtonContainer}>

          <Text>Account information and phone number connects go here</Text>
          
        </View>
      </View>
    </ScreenContainer>
  )
}

export default UserDetails;
