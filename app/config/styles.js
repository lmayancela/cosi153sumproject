import React from 'react'
import { Platform, StyleSheet } from 'react-native';

export const themeColor = StyleSheet.create({
  bg1: {
    backgroundColor: '#54494b'
  },
  bg2: {
    backgroundColor: '#60b2e5'
  },
  bg3: {
    backgroundColor: '#71a2b6'
  },
  bgh1: {
    backgroundColor: '#eb9486'
  },
  bgh2: {
    backgroundColor: '#f3de8a'
  },
  t1: {
    color: '#53f4ff'
  },
  t2: {
    color: '#60b2e5'
  },
  t3: {
    color: '#71a2b6'
  },
  th1: {
    color: '#eb9486'
  },
  th2: {
    color: '#f3de8a'
  },
});

export const signInStyle = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#009387'
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
    // color: '#05375a',
    fontSize: 16
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#54494b',
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
    // color: '#05375a',
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  screenContainer: {  // NR: I think this is being used in the wrong context because it always appears inside of a "container" which is called ScreenContainer...
    backgroundColor: '#404040',
    // width: '100%',
    // height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  screenButtonContainer: {
    width: '40%',
    // height: 'auto'
  },
  rowContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textinput: {
    backgroundColor:'orange'
  },
  logoText: {
    color: 'white',
    fontSize: 55  //must be a number, not a string
  },
  statement: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },
  subStatement: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  header: {
    // NR: Used by a few components but never described.
    fontSize: 30
  }
});

export default styles;
