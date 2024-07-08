import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  constructor(){
    super();
    this.state ={
     content : false
    }
  }
  ComponentShowAndHide =()=>{
    this.setState(previuosState => ({content: !previuosState.content}))
  }
render(){
  let ButtonT = 'Show'

  return(
    <View style ={styles.container}>
    {this.state.content ? <Text style={styles.headerText}>Tarneem</Text>: null}
    <Button title={this.state.content ? 'show' : 'hide'} onPress={this.ComponentShowAndHide}></Button>

    </View>
  );
}

}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
  },
  headerText: {
  fontSize: 28,
  textAlign: "center",
  margin: 10,
  fontWeight: "bold"
  },
  });