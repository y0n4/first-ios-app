import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Thank you for today's submission. I'll see you tomorrow!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  }
});
