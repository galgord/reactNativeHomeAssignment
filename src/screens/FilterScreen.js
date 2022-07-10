import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from "react-native";
import FilterOptions from '../components/FilterOptions';
import { Rating } from 'react-native-ratings';

const FilterScreen = (props) => {
  const data = [{name:'Name', isChecked: false, id: 1 }, {name:'Price', isChecked: false, id: 2 }, {name:'Rate', isChecked: false, id: 3 }, {name:'Downloads', isChecked: false, id: 4 }]
  const [filteredData, setFilteredData] = useState(data);
  const handlePress = (item) => {
    const newData = filteredData.map(d => {
      let selected = false
      if (d.id === item.id) {
        selected = true
    }
    return {
      ...d,
      isChecked: selected
    }
    })
    console.log('newData', newData)
    setFilteredData(newData);
  };
  return (
    <View style={styles.container}>
      <View style={{
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1,  }}>
        <Text style={styles.sortByText}>SORT BY</Text>
      </View>
      <FlatList
      data={filteredData}
      renderItem={({item}) => <FilterOptions item={item} handlePress={() => handlePress(item)}/>}
      keyExtractor={(item, index) => index.toString()}
      />
       <View style={{
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1,  }}>
        <Text style={styles.sortByText}>FILTER BY</Text>
      </View>
      <View style={{backgroundColor:'white', height: 89, alignSelf:'stretch', justifyContent: 'center'}}>
          <Rating startingValue={0}
               type='custom' 
               tintColor={'white'} 
               ratingBackgroundColor={'#979797'}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  item: {
    backgroundColor: 'white',
    alignSelf: 'stretch',
    height: 44
  },
  sortByText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 18,
    color: '#8A8A8E',
    alignSelf: 'stretch',
    marginLeft: 20,
    marginTop: 22,
    marginBottom: 4,
  }
});

export default FilterScreen;