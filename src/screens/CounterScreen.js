import React,{useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
return (
  <View>
    <Text>Current Screen: {counter}</Text>
    <Button title="Increase" onPress={()=>{setCounter(counter+1)}}></Button>
    <Button title="Decrease" onPress={()=>{setCounter(counter-1)}}></Button>
  </View>
);
};

const styles = StyleSheet.create({});

export default CounterScreen;