import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const IosHeader = ({text}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.push('Filter');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{text || 'Fighters'}</Text>
      <TouchableOpacity style={styles.iconStyle} onPress={handlePress}>
        <MaterialIcons name="filter-list" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    borderBottomColor: '#C6C6C8',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
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
    top: 10,
    right: 30
  }
});

export default IosHeader;