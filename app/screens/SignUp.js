//CreateReminder screen
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import { AuthContext } from '../components/context';

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");


  const { signUp } = React.useContext(AuthContext);

  const logoutHandle = (username, password) => {
      let newUser = {username: username, password: password};
      
      signUp(newUser);
  }

  return (
    <ScreenContainer>
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.text_header}>Sign Up!</Text>

          <Text style={[styles.text_footer]}>Username</Text>
          <View style={styles.action}>
              <TextInput
                  placeholder="Your Username"
                  placeholderTextColor="#666666"
                  style={[styles.textInput]}
                  autoCapitalize="none"
                  onChangeText={(val) => setUsername(val)}
              />
          </View>


          <Text style={[styles.text_footer,
          ]}>Password</Text>
          <View style={styles.action}>
              <TextInput
                  placeholder="Your Password"
                  placeholderTextColor="#666666"
                  style={[styles.textInput]}
                  autoCapitalize="none"
                  onChangeText={(val) => setPassword(val)}
              />
          </View>

          <View style={styles.button}>
              <TouchableOpacity
                  style={styles.signIn}
                  onPress={() => {logoutHandle( username, password )}}
              >

                  <Text style={[styles.textSign, {
                      color:'#fff'
                  }]}>Sign Up</Text>

              </TouchableOpacity>
            </View>
          </View>
    </View>
    </ScreenContainer>
  )
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
        paddingBottom: 30
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        paddingBottom: 30
    },
    text_footer: {
        justifyContent: 'center',
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
