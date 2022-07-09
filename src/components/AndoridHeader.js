import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const AndroidHeader = ({text}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.push('Filter');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{text || 'Fighters'}</Text>
      <TouchableOpacity style={styles.iconStyle} onPress={handlePress}>
        <MaterialIcons name="filter-list" size={24} color="white" />
      </TouchableOpacity>
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
  },
  iconStyle: {
    position: 'absolute',
    top: 20,
    right: 30,
  }
});

export default AndroidHeader;