import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';

export default function AllEntries(props) {
  console.log('this is PROPS', props.data);
  return (
    <View style={{margin: 5}}>
      <View style={{height: 24, backgroundColor: '#FFCFE0', padding: 2,}}>
        <Text style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>{props.data.time}</Text>
      </View>
      <View style={styles.container}>
        <View style={{alignItems: 'flex-start'}}>
        <Text>1. {props.data.entry1}</Text>
        <Text>2. {props.data.entry2}</Text>
        <Text>3. {props.data.entry3}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#FFF6F9',
    alignItems: 'center',
    borderColor: '#FFCFE0',
    borderStyle: 'solid',
    borderWidth: 2,
    // justifyContent: 'center',
  }
});
