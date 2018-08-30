import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text style={{textAlign: 'center'}}>*your past journal entries here*</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  }
});
