//CreateReminder screen
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert
} from 'react-native';

import { signInStyle as styles, themeColor } from '../config/styles'

import ScreenContainer from '../components/ScreenContainer';
import { AuthContext } from '../components/context';

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");


  const { signUp } = React.useContext(AuthContext);

  const logoutHandle = (username, password) => {
    let newUser = { username: username, password: password };

    signUp(newUser);
  }

  return (
    <ScreenContainer>
      <View style={[styles.container, themeColor.bg3]}>
        <View style={styles.header}>
          <Text style={[styles.text_header, themeColor.th2]}>Sign Up!</Text>

          <Text style={[styles.text_footer, themeColor.th1]}>Username</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Your Username"
              placeholderTextColor="#444"
              style={[styles.textInput, themeColor.th2]}
              autoCapitalize="none"
              onChangeText={(val) => setUsername(val)}
            />
          </View>


          <Text style={[styles.text_footer, themeColor.th1]}>Password</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Your Password"
              placeholderTextColor="#444"
              style={[styles.textInput, themeColor.th2]}
              autoCapitalize="none"
              onChangeText={(val) => setPassword(val)}
            />
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => { logoutHandle(username, password) }}
            >

              <Text style={[styles.textSign, {
                color: '#fff'
              }]}>Sign Up</Text>

            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenContainer>
  )
}

export default SignUpScreen;
