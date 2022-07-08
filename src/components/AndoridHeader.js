import React from "react";
import {Text, View, StyleSheet} from "react-native";

const AndroidHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Fighters</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    marginLeft: -10,
    flex: 1,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 500,
    alignItems: 'flex-start',
    marginLeft: -20, // need to check why this is needed.
    shadowColor: '#000000',
    elevation: 90,
  },
  headerText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 23,
    marginLeft: 10,
    color: '#FFFFFF'
  }
});

export default AndroidHeader;