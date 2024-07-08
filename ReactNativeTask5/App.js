import { StatusBar } from 'expo-status-bar';
import { Component, useState } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import MyClassPage from './MyClassPage';

const App=()=>{
  const [showMyClassPage,setShowMyClassPage]=useState(false);
  return(
<View style={styles.container}>
<Button title={showMyClassPage? "Hide" : "Show"} onPress={()=>
  setShowMyClassPage(!showMyClassPage)
}>

</Button>
{showMyClassPage && <MyClassPage/>}
</View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
