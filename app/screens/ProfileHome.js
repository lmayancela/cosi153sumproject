//Profile Home screen
import React from 'react';
import { Button, Text, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import styles from '../config/styles';

const ProfileHome = ({ navigation }) => {

  const buttonColor = '#00FF00';

  return (
    <ScreenContainer>
      <View style={styles.screenContainer}>
        <View style={styles.screenButtonContainer}>

          <Text>Profile Home Screen</Text>
          <br />
          <Button color={buttonColor} title="User Details" onPress={() => { navigation.push("UserDetails") }} />
          <br />
          <Button color={buttonColor} title="Form" onPress={() => { navigation.push("Form") }} />

        </View>
      </View>
    </ScreenContainer>
  );
}

export default ProfileHome;
