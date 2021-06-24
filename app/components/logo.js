import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import logo from './assets/logo.jpg'; // Tell webpack this JS file uses this image
import styles from '../config/styles';

const Logo = (props) => {
  return (
    <View>
    <img src= {logo} alt = "Logo" />;
    <Text> BotherMe </Text>
    </View>
  )



}
export default Logo;
