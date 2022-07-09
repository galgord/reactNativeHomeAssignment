import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Platform } from 'react-native';
import Universes from '../components/Universes';
import FighterItem from '../components/FighterItem';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = (props) => {
  const [universes, setUniverses] = useState([]);
  const [fighters, setFighters] = useState([]);
  const [filteredFighters, setFilteredFighters] = useState([]);
  const [selectedUniverse, setSelectedUniverse] = useState('');

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
      setFighters(data);
      setFilteredFighters(data);
    };
    try {
      fetchUniverses()
      fechFighters()
    } catch (error) {
      console.error(error);
    }
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


    const nav = useNavigation();
    const goToFighter = (item) => {
      nav.push('Fighter', {item});
    }
  return (
    <View style={styles.container}>
      <FlatList 
      style={styles.universesHeader} 
      horizontal
      data={universes} 
      keyExtractor={(item, key) => key.toString()}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <Universes onPress={() => handlePress(item)} text={item.name} isSelected={item.isSelected} />} />
      { filteredFighters.length > 0 ? <FlatList
        style={styles.fightersList}
        data={filteredFighters}
        contentContainerStyle={styles.fightersListContentContainer}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <FighterItem fighter={item} onPress={() => goToFighter(item)}/>}
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
  header: {
    backgroundColor: 'red'
  },
  universesHeader: {
    marginTop: 17,
    height: 60,
  },
  fightersList: {
    height: '100%',
  },
});

export default HomeScreen;