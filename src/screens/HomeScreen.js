import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Platform } from 'react-native';
import Universes from '../components/Universes';
import FighterItem from '../components/FighterItem';
const HomeScreen = () => {
  const [universes, setUniverses] = useState([]);
  const [fighters, setFighters] = useState([]);
  const [filteredFighters, setFilteredFighters] = useState([]);
  const [selectedUniverse, setSelectedUniverse] = useState('');

  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  }

  useEffect(() => {
    const fetchUniverses = async () => {
      const response = await fetch('https://593cdf8fb56f410011e7e7a9.mockapi.io/universes');
      const data = await response.json();
      const universes = data.map(universe => {
        return {
          ...universe,
          isSelected: false
        }
      })
      universes.unshift({
        name: 'All',
        isSelected: true
      });
      setUniverses(universes);
    }
    const fechFighters = async () => {
      const response = await fetch('https://593cdf8fb56f410011e7e7a9.mockapi.io/fighters');
      const data = await response.json();
      const fighters = data.filter(onlyUnique)
      setFighters(fighters);
      setFilteredFighters(fighters);
    };
      fetchUniverses()
      fechFighters()
    }, []);

    const handlePress = (universe) => {
      const newUniverses = universes.map(item => {
        let selected = false
        if (item.objectID === universe.objectID) {
          selected = true
          setSelectedUniverse(item)
        }
        return {
          ...item,
          isSelected: selected
        }
      })
      setUniverses(newUniverses);
    };

    useEffect(() => {
      if (selectedUniverse.name === 'All') {
        setFilteredFighters(fighters);
      } else {
        const newFighters = fighters.filter(fighter => {
          return fighter.universe === selectedUniverse.name
        })
        setFilteredFighters(newFighters);
      }
    }, [selectedUniverse])
  return (
    <View style={styles.container}>
      <FlatList 
      style={styles.universesHeader} 
      horizontal
      data={universes} 
      keyExtractor={item => item.objectID}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <Universes onPress={() => handlePress(item)} text={item.name} isSelected={item.isSelected} />} />
      { filteredFighters.length > 0 ? <FlatList
        style={styles.fightersList}
        data={filteredFighters}
        contentContainerStyle={styles.fightersListContentContainer}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <FighterItem fighter={item} />}
      /> : (
      <View style={{flex:1, justifyContent: 'flex-start', alignItems: 'center'}}>
        <Text>No Fighters :(</Text>
      </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  universesHeader: {
    marginTop: Platform.OS === 'ios' ? 75 : 17,
    height: 60,
  },
  fightersList: {
    height: '100%',
  },
});

export default HomeScreen;