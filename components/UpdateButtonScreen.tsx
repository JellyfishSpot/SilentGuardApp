import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { MonoText } from './StyledText';
import { Text, View } from './Themed';

import Colors from '@/constants/Colors';

export default function UpdateButtonScreen({ path }: { path: string }) {
  return (
    <View style={styles.getStartedContainer}>
      <Pressable style={styles.button} onPress={clickMe}>
        <Text style={styles.buttonText}>Update foo!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#fc0366',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

// TODO: Implement link to loading page
function clickMe() {
  alert("You clicked me!");
}
