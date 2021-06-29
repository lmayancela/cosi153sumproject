import React from 'react'
import { StyleSheet } from 'react-native';

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
