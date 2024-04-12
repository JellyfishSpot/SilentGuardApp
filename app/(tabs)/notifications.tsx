import { StyleSheet } from 'react-native';

import NotificationPopupScreen from '@/components/NotificationPopupScreen';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View>
      <Text style={styles.title}>Past 30 Days</Text>
      <View style={styles.container}>
        <NotificationPopupScreen/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    padding: 20
  },
});
