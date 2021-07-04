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
import { AuthContext } from '../components/context';
import Users from '../models/users';
import ScreenContainer from '../components/ScreenContainer';

import { signInStyle as styles, themeColor } from '../config/styles'

const SignInScreen = ({ navigation }) => {

  const [data, setData] = React.useState({
    username: '',
    password: '',
  });

  const { signIn } = React.useContext(AuthContext);

  const loginHandle = () => {
    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
        { text: 'Okay' }
      ]);
      return;
    }
    signIn(data);
  }

  return (
    <ScreenContainer>
      <View style={[styles.container, themeColor.bg3]}>
        <View style={styles.header}>
          <Text style={[styles.text_header, themeColor.th2]}>Welcome to Bother Me!</Text>

          <Text style={[styles.text_footer,themeColor.th1]}>Username</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Your Username"
              placeholderTextColor="#444"
              style={[styles.textInput, themeColor.th2]}
              autoCapitalize="none"
              onChangeText={(val) => setData({
                ...data,
                username: val
              })
              }
            />
          </View>


          <Text style={[styles.text_footer,themeColor.th1]}>Password</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Your Password"
              placeholderTextColor="#444"
              style={[styles.textInput, themeColor.th2]}
              autoCapitalize="none"
              onChangeText={(val) => setData({
                ...data,
                password: val,
              })
              }
            />
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => { loginHandle(data.username, data.password) }}
            >

              <Text style={[styles.textSign, {
                color: '#fff'
              }]}>Sign In</Text>

            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default SignInScreen;
