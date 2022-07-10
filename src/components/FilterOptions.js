import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";

const FilterOptions = (props) => {
  const { item } = props;

  return (
    <View>
    <Pressable style={styles.container} onPress={props.handlePress}>
        <Text style={styles.itemText}>{item.name}</Text>
        <View style={item.isChecked ? styles.checkmarkIsSelected : styles.checkmark}>
          <Text style={styles.checkmarkText}>{item.isChecked ? "✓" : ""}</Text>
        </View>
      </Pressable>
      <View style={styles.border}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 13,
    paddingVertical: 16,
  },
  border: {
    borderBottomColor: '#E6E6E6',
    width: '90%',
    borderBottomWidth: 1,
    alignSelf: 'center',
  },
  itemText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 8
  },
  checkmark: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#BFBFC1',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkIsSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#007AFF',
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',

  },
  checkmarkText: {
    fontStyle: 'bold',
    fontWeight: '400',
    fontSize: 16,
    color: 'white',
    alignSelf: 'center',
  },
});

export default FilterOptions;