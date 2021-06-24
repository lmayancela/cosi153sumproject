import React from 'react'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenContainer: {
    backgroundColor: '#404040',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  screenButtonContainer: {
    width: '40%',
    height: 'auto'
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
    fontSize: '55px'
  },
  statement: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px'
  },
  subStatement: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16px'
  }
});

export default styles;
