//Profile Home screen
import React from 'react';
import {
  Button,
  Text
} from 'react-native';
import ScreenContainer from "../components/ScreenContainer";

const ProfileHome = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Profile Home Screen</Text>
      <Button
        title="User Details"
        onPress={() => {
          navigation.push("UserDetails")
        }}
      />
      <Button
        title="Form"
        onPress={() => {
          navigation.push("Form")
        }}
      />
    </ScreenContainer>
  );
}

export default ProfileHome;
