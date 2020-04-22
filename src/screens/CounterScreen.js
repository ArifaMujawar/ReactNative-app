import React,{useReducer} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const reducer = (state, action) => {
  switch(action.type){
    case 'INCREMENT': return {...state,count:state.count + action.payload};
    case 'DECREMENT': return {...state,count:state.count - action.payload};
    default: return state;
  }
};
const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer,{count:0});
return (
  <View>
    <Text>Current Screen: {state.count}</Text>
    <Button title="Increase" onPress={()=>dispatch({type:'INCREMENT',payload:1})}></Button>
    <Button title="Decrease" onPress={()=>dispatch({type:'DECREMENT',payload:1})}></Button>
  </View>
);
};

const styles = StyleSheet.create({});

export default CounterScreen;