import React, { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import CircularProgress from "@mui/material/CircularProgress";

import { Text, View } from './Themed';

import Colors from '@/constants/Colors';

export default function UpdateButtonScreen() {
  const [loading, setLoading] = useState(false);
  if(loading){
    return (
      <CircularProgress /> //TODO: Connect Application Logic to Button
    )
  }
  return (
    <View style={styles.getStartedContainer}>
      <Pressable style={styles.button} onPress={() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000)}
      }>
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
