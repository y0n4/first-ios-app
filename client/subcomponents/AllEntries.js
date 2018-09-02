import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button
} from 'react-native';

export default function AllEntries(props) {
  console.log('this is PROPS', props.data);
  return (
    <View>
      <Text style={{textAlign: 'center'}}>*your past journal entries here*</Text>
      <Text style={{textAlign: 'center'}}>currently in retrieve-info branch</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  }
});
