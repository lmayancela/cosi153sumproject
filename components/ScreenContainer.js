//ScreenContainer component
import React from 'react';
import { View } from 'react-native';
import styles from '../config/styles'

export default ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);