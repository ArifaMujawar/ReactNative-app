import React,{useState} from "react";
import { Text,TextInput, View, StyleSheet } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState('')
  return (
    <View>
      <Text>Enter name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={newValue => setName(newValue)}
      />
      {name.length >0 ? <Text>My name is {name}</Text>:null}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    margin: 17,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
