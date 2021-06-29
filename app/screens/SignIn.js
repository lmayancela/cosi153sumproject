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
import { AuthContext } from '../components/context';
import Users from '../models/users';
import ScreenContainer from '../components/ScreenContainer';

const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
    });

    const { signIn } = React.useContext(AuthContext);

    const loginHandle = (userName, password) => {

        const foundUser = Users.filter( item => {
            return userName == item.username && password == item.password;
        } );

        if ( data.username.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                {text: 'Okay'}
            ]);
            return;
        }
        signIn(foundUser);
    }

    return (
      <ScreenContainer>
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.text_header}>Welcome!</Text>
        </View>
            <Text style={[styles.text_footer]}>Username</Text>
            <View style={styles.action}>
                <TextInput
                    placeholder="Your Username"
                    placeholderTextColor="#666666"
                    style={[styles.textInput]}
                    autoCapitalize="none"
                    onChangeText={(val) => setData({
                        ...data,
                        username: val
                    })
                  }
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
                    onPress={() => {loginHandle( data.username, data.password )}}
                >

                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign In</Text>

                </TouchableOpacity>
            </View>
      </View>
      </ScreenContainer>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
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
