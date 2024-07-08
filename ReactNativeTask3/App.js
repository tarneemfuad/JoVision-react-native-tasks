import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';

export default class App extends Component {
 constructor(){
  super();
  this.state={
    loading:true
  }
 }
 componentDidMount(){

setTimeout(() => {
  this.setState({ loading: false });
}, 10000);
}
 

 render()
 {
  return (
  <View style={styles.container}>
   { this.state.loading ?
   (<ActivityIndicator size ="large" color="#00ff00"/>):( <Text>Tarneem</Text> )}
  </View>
);}

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
