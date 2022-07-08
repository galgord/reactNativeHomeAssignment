import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
const IosHeader = (props) => {
  console.log('props', props)
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Fighters</Text>
      <TouchableOpacity style={styles.iconStyle}>
        <MaterialIcons name="filter-list" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flex: 1,
    borderBottomColor: '#C6C6C8',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginLeft: -20
  },
  headerText: {
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: 34,
  lineHeight: 41,
  letterSpacing: 0.374,
  marginLeft: 20,
  marginBottom: 8
  },
  iconStyle: {
    position: 'absolute',
    top: 20,
    right: 30,
  }
});

export default IosHeader;