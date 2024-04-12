import React from 'react';
import { StyleSheet } from 'react-native';

import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

import Colors from '@/constants/Colors';
import IntensitySlider from './IntensitySlider';

export default function SettingScreen({ path }: { path: string }) {
  return (
    <View style={{flex:1}}>
      <View style={styles.subtitleContainer}>
        <Text
          style={styles.subTitle}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Vibration Intensity
        </Text> 
        </View>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <IntensitySlider></IntensitySlider>
    </View>
  );
}

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
