import React from 'react';
import { 
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button
} from 'react-native';
import AfterSubmit from './client/subcomponents/AfterSubmit';
import AllEntries from './client/subcomponents/AllEntries';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasSubmit: false,
      form1: '',
      form2: '',
      form3: '',
    };
    this.submitJournal = this.submitJournal.bind(this);
    this.entryJournal = this.entryJournal.bind(this);
  }

  //this func is when submit button is clicked, gonna send the gratitude journal entry to server side
  submitJournal() {
    console.log(this.state.form1, this.state.form2, this.state.form3, new Date());
    this.setState({
      hasSubmit: true,
      form1: '',
      form2: '',
      form3: '',
    });
    //clears the input for each input
    this._textInput1.setNativeProps({ text: ' ' });
    this._textInput2.setNativeProps({ text: ' ' });
    this._textInput3.setNativeProps({ text: ' ' });
  }

  entryJournal() {
    return (
      <View>
        <View style={{alignItems: 'center'}}>
        <Text style={{margin: 2, padding: 10}}>
          What are 3 things that you are grateful for today?
        </Text>
      </View>
      <View style={{padding: 10}}>
        <TextInput
          style={styles.inputform}
          placeholder='1' 
          ref={component => this._textInput1 = component}
          onChangeText={(text) => this.setState({form1: text})}
          value={this.state.text}
        />
        <TextInput 
          placeholder='2'
          ref={component => this._textInput2 = component}
          style={styles.inputform}
          onChangeText={(text) => this.setState({form2: text})}
          value={this.state.text}
        />
        <TextInput 
          placeholder='3' 
          ref={component => this._textInput3 = component}
          style={styles.inputform}
          onChangeText={(text) => this.setState({form3: text})}
          value={this.state.text}
        />
        </View>
        
        <Button
          onPress={this.submitJournal}
          title="Submit"
        />
      </View>
    );
  };

  allJournal() {
    return (
      <View>
        <TextInput style={{textAlign: 'center'}}>*your past journal entries here*</TextInput>
      </View>
    )
  }

  render() {
    let pic = {
      uri: 'https://i.imgur.com/LTReDMX.gif'
    };

    return (
      <View style={styles.container}>
        <Image source={pic} style={{width: 200, height: 200}}/>
        {!this.state.hasSubmit ? this.entryJournal() : <AfterSubmit />}
        <View style={{margin: 10}} />
        <AllEntries />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  inputform: {
    margin: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
});
