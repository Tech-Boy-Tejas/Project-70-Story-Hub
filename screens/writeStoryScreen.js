import * as React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TouchableNativeFeedback } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default class WriteStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      temp_author: '',
      temp_title: '',
      temp_story: '',
      author: '',
      title: '',
      story: '',
    }
  }

  setInfo = () => {
    this.setState({
      author: this.state.temp_author,
      title: this.state.temp_title,
      story: this.state.temp_story,
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaProvider>
          <Header
            backgroundColor="yellow"
            centerComponent={{
              text: 'STORY HUB',
              style: { color: 'black', fontSize: 30 },
            }}
          />
        </SafeAreaProvider>
        <View style={{ flex: 8 }}>
          <TextInput
            onChangeText={(word) => {
              this.setState({
                temp_title: word
              });
            }}
            placeholder='WRITE THE TITLE OF THE STORY'
            value={this.state.temp_title}
            style={styles.inputbox}>
          </TextInput>
          <TextInput
            onChangeText={(word) => {
              this.setState({
                temp_author: word
              });
            }}
            placeholder='WRITE THE AUTHOR OF THE STORY'
            value={this.state.temp_author}
            style={styles.inputbox}>
          </TextInput>
          <TextInput
            onChangeText={(word) => {
              this.setState({
                temp_story: word
              });
            }}
            placeholder='WRITE THE STORY'
            value={this.state.temp_story}
            style={styles.inputbox}
            multiline={true}>
          </TextInput>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={this.setInfo}>
            <Text style={styles.displayText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  inputbox: {
    marginTop: 90,
    width: 350,
    height: 80,
    borderWidth: 1.0,
    margin: 10,
    padding: 5,
    fontSize: 18,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  submitButton: {
    marginTop: 40,
    backgroundColor: 'red',
    width: '95%',
    height: 70,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'purple',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',

  },
  displayText: {
    textAlign: 'center',
    color: 'blue',
    fontSize: 25,
    fontWeight: 'bold',
  },
})