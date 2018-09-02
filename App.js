import React from 'react';
import { 
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AfterSubmit from './client/subcomponents/AfterSubmit';
import AllEntries from './client/subcomponents/AllEntries';
import firebase from './database/firebase.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: '',
      hasSubmit: false,
      form1: '',
      form2: '',
      form3: '',
      allEntries: [],
      entrySample: [{
        entry1: 'Thai curry',
        entry2: 'Making it 2 milkbbi sample',
        entry3: 'The warm weather',
        time: 'Fri Aug 31 2018'
      }]
    };
    this.submitJournal = this.submitJournal.bind(this);
    this.entryJournal = this.entryJournal.bind(this);
  }

  componentDidMount() {
    //retrieve all entries from database
    var retrieved;
    var entries = [];
    firebase.retrieveEntries((data) => {
      // console.log(data.entry);
      retrieved = data.entry;
      for(var key in retrieved) {
        entries.push(retrieved[key])
      }
      // console.log(entries);
      this.setState({allEntries: entries});
    });
  }

  //this func is when submit button is clicked, save the entries to database
  submitJournal() {
    var data = {
      date: new Date().toDateString(),
      entry1: this.state.form1,
      entry2: this.state.form2,
      entry3: this.state.form3
    }

    firebase.storeEntry(data);

    this.setState({
      hasSubmit: true,
      form1: '',
      form2: '',
      form3: '',
    });
    // clears the input for each input
    this._textInput1.setNativeProps({ text: ' ' });
    this._textInput2.setNativeProps({ text: ' ' });
    this._textInput3.setNativeProps({ text: ' ' });
  }

  //contains entry form component
  entryJournal() {
    return (
      <View>
        <View style={{alignItems: 'center'}}>
        <Text style={{margin: 2, padding: 10}}>
          What are 3 things that you are grateful for today? It can be anything!
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
          
          {/* <Button
            color="#841584"
            onPress={this.submitJournal}
            title="Submit"
          /> */}

          {/* <View> */}
            <TouchableOpacity
              style={styles.button}
              onPress={this.submitJournal}
            >
              <Text style={{color: 'white', fontWeight: 'bold'}}>Submit</Text>
            </TouchableOpacity>
          {/* </View> */}
        </View>
      </View>
    );
  };

  allJournal() {
    console.log(this.state.allEntries);
    return (
      <View>
        {this.state.entrySample.map((journal, index) => 
          <AllEntries key={index} data={journal} />
        )}
      </View>
    )
  }

  render() {
    let pic = {
      uri: 'https://i.imgur.com/LTReDMX.gif'
    };

    return (
      <ScrollView>
        <View style={styles.container}>
          <Image source={pic} style={{width: 200, height: 200}}/>
          {!this.state.hasSubmit ? this.entryJournal() : <AfterSubmit />}
          {/* {this.entryJournal()} */}
          <View style={{margin: 5}} />
          <Text>🌸 Gratitude journal 🌸</Text>
          {this.allJournal()}
        </View>
      </ScrollView>
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
    margin: 2,
    padding: 5,
    backgroundColor: '#FFF6F9',
    borderColor: '#FFCFE0',
    borderWidth: 2,
  },
  button: {
    margin: 2,
    padding: 5,
    backgroundColor: '#FFCFE0',
    borderColor: '#FFCFE0',
    borderStyle: 'solid',
    borderWidth: 2,
    alignItems: 'center',
  }
});
