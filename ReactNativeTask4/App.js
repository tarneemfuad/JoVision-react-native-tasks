import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class MyClassPage extends Component{
  render(){
    return(
      <View >
        <Text >This is My Class Page</Text>
      </View>
    );
  }
}

export default class App extends Component {
  constructor(){
    super();
    this.state ={
      showMyClassPage:false
    }
  }
  MyClassPageShow=()=>{
   this.setState(previousState =>({showMyClassPage : !previousState.showMyClassPage})) 
  }
  
  render(){
  return (
    <View style={styles.container}>
 <Button title="hide" onPress={this.MyClassPageShow}></Button>
 {this.state.showMyClassPage && <MyClassPage />}
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
