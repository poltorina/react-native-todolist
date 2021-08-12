import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import theme from '../styles/theme.style';

export default function Header () {
  return (
    <View style={styles.header}>
      <StatusBar backgroundColor='#9377c9' barStyle='light-content' visible />
      <Text style={styles.title}>Easy TODO List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: '100%',
    padding: theme.CONTAINER_PADDING,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.PRIMARY_COLOR,
  },
  title: {
    color: theme.WHITE_COLOR,
    fontSize: theme.FONT_SIZE_TITLE,
  },
});
