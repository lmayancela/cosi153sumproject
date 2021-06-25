import React from "react";
import { Image, Text, View } from "react-native";
// import logo from '../assets/logo.jpg'; // Tell webpack this JS file uses this image
// import logoB from ;
import styles from '../config/styles';

const Logo = () => {
  return (
    <View style={{ display: 'flex'}}>
      <Image style={{height: '50%', width: 70}} source={require('../assets/logoB.png')} alt="Logo" /> 
      {/* originally width 70 pixels */}

      <Text style={styles.logoText}> BotherMe </Text>
    </View>
  )
}
export default Logo;
