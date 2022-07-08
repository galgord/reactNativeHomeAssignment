import React, {useEffect, useState}from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Universes = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  
  useEffect(() => {
  setIsSelected(props.isSelected);
  }, [props.isSelected]);
  
  return (
    <View style={[styles.container, { backgroundColor: isSelected ? '#003C7E' : '#007AFF'}]}>
      <TouchableOpacity onPress={props.onPress}>
      <Text style={styles.textStyle}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: 74,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  textStyle: {
    color: 'white',
    padding: 10
   }
});

export default Universes;