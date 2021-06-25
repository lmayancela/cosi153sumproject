import React from "react";
import { Text, View } from "react-native";
// import logo from '../assets/logo.jpg'; // Tell webpack this JS file uses this image
import logoB from '../assets/logoB.png';
import styles from '../config/styles';

const Logo = () => {
  return (
    <View style={{ display: 'inline' }}>
      <img src={logoB} style={{ width: '70px' }} alt="Logo" />
      <Text style={styles.logoText}> BotherMe </Text>
    </View>
  )
}
export default Logo;
