import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import IosHeader from '../components/IOSHeader';
import AndroidHeader from '../components/AndoridHeader';
import CustomFastImage from "../components/CustomFastImage";
import { Rating } from 'react-native-ratings';

const FighterScren = ({navigation, route}) => {
  const { item } = route.params;
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => Platform.OS === 'ios' ? <IosHeader text={item.name}/> : <AndroidHeader text={item.name}/>
    }) 
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.upPart}>
        <View style={{flexDirection: 'column'}}>
          <View style={styles.nameWrapper}>
              <Text style={styles.nameText}>{item.name}</Text>
              <Text style={styles.otherText}>{item.universe}</Text>
          </View> 
          
          <View style={styles.priceRates}>
            <Rating startingValue={item.Rating}
             type='custom' 
             tintColor={'#F2F2F7'} 
             ratingBackgroundColor={'#979797'}/>
            <Text style={styles.otherText}>Downloads: {item.downloads}</Text>  
            <View style={styles.price}><Text style={styles.priceText}>$ {item.price}</Text></View>  
          </View>
        </View>
        <View style={styles.imageWrapper}>  
          <CustomFastImage
          source={{uri: item.imageURL}}
          style={styles.imageStyle}
          cacheKey={item.objectID}
          />
        </View>
      </View>
      <View style={{marginHorizontal: 16}}>
        <Text style={styles.otherText}>{item.description}</Text>       
      </View> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 36
  },
  upPart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 23
  },
  nameWrapper: {
    justifyContent: 'center',
    marginLeft: 19
  },
  priceRates: {
    marginLeft: 19,
    marginTop: 23
  },
  nameText: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 24
  },
  otherText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20
  },
  imageStyle: {
    width: 182,
    height: 182
  },
  price: {
    width: 84,
    height: 40,
    backgroundColor: '#007AFF',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  priceText: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 27,
    color: 'white'
  }
});

export default FighterScren;