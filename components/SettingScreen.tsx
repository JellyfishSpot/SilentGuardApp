import React from 'react';
import { StyleSheet } from 'react-native';

import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

import Colors from '@/constants/Colors';
import IntensitySlider from './IntensitySlider';
import PatternButtons from './PatternButtons';

export default function SettingScreen({ path }: { path: string }) {
  return (
    
    <View style={{width:'40%'}}>
      <View style={styles.subtitleContainer}>
        <Text // Make a slider for vibration intensity setting with discrete values
          style={styles.subTitle}
          lightColor="rgba(0,0,0,0.8)" 
          darkColor="rgba(255,255,255,0.8)">
          Vibration Intensity
        </Text> 
        </View>
        <IntensitySlider></IntensitySlider>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text // Make radio buttons for vibration pattern setting
          style={styles.subTitle}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Vibration Pattern
        </Text> 
        <PatternButtons></PatternButtons>
    </View>
  );
}

// Define the views used
const styles = StyleSheet.create({
    subtitleContainer: {
    alignItems: 'flex-start',
    marginHorizontal:0,
    },
  subTitle: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
