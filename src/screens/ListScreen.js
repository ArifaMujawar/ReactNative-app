import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';



const ListScreen = () => {
  const friends = [
    {name:'Friend 1', age:'12'},
    {name:'Friend 2', age:'2'},
    {name:'Friend 3', age:'22'},
    {name:'Friend 4', age:'92'},
    {name:'Friend 5', age:'72'},
    {name:'Friend 12', age:'22'},
    {name:'Friend 22', age:'32'},
    {name:'Friend 32', age:'42'},
    {name:'Friend 42', age:'52'},
    {name:'Friend 52', age:'62'}
  ];
  return (
    <FlatList
      
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({item})=>{
        return (
          <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
          );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle:{
    marginVertical: 50
  }
});

export default ListScreen;