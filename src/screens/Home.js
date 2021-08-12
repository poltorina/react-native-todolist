import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

import theme from '../styles/theme.style';
import { globalStyles } from '../styles/global.style';

export default function Home ({ navigation }) {
  const goToTodos = () => {
    navigation.navigate('Todos');
  }
  return (
    <View style={globalStyles.container}>
      <Text style={[globalStyles.largeText, styles.textHome]}>Home Screen</Text>
      <Text style={styles.text}>You can add, check and delete your todos</Text>
      <Text style={styles.text}>Todo cannot be empty</Text>
      <Pressable onPress={goToTodos} style={globalStyles.button}>
        <Text style={[globalStyles.textStyle, globalStyles.largeText]}>Go to Todos</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  textHome: {
    textAlign: 'center',
    marginBottom: '10%',
    color: theme.PRIMARY_COLOR_DARK,
  },
  text: {
    textAlign: 'center',
    marginBottom: '10%',
    color: theme.PRIMARY_COLOR_DARK,
  },
})
