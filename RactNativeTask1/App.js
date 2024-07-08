import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { Button, StyleSheet, Text, View,Platform } from 'react-native';

export default class App extends Component {
 constructor(){
super();
this.state={
  content : false
}
 }
componintHideShow = () =>{
this.setState(previousState => ({ content: !previousState.content }))
}

render(){
  let contentText=""
  if(this.state.content){
    contentText= <Text style = {styles.headerText} > Tarneem </Text>
  }
  return(
    <View style = {styles.container}>
           
      <Button title='Show'onPress={this.componintHideShow}></Button>
       {contentText}
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
