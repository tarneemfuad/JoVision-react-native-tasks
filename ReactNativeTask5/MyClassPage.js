import React, { Component } from "react";
import{View,StyleSheet,Text} from "react-native";
class MyClassPage extends Component{
    componentDidMount(){
        console.log("MyClassPage is Visible");
    }
    componentWillUnmount(){
        console.log("MyClassPage Unloaded");
    }
    render(){
        return(
       <View><Text>This is MyClassPage</Text></View>
        );
    }
}
export default MyClassPage;