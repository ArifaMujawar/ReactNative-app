import React from "react";
import { View, StyleSheet } from "react-native";

const BoxModel = () => {
  return (
    <View style={styles.parentView}>
      <View style={styles.view1}></View>
      <View style={styles.view2}></View>
      <View style={styles.view3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView:{
    borderWidth:2,
    height:200,
    flexDirection: 'row',
  },
  view1:{
    width:100,
    height:100,
    backgroundColor: 'red',
    
  },
  view2:{
    width:100,
    height:100,
    backgroundColor: 'green',
    alignSelf:'flex-end'
  },
  view3:{
    width:100,
    height:100,
    backgroundColor: 'blue',
    right:0
  }

});
export default BoxModel;