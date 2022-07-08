import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import CustomFastImage from "./CustomFastImage";

const FighterItem = (props) => {
  const { fighter } = props;
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
      <CustomFastImage
      source={{uri: fighter.imageURL}}
      style={styles.imageStyle}
      cacheKey={fighter.objectID}
      />
      </View>
      <View style={styles.nameWrapper}>
          <Text style={styles.nameText}>{fighter.name}</Text>
          <Text style={styles.otherText}>{fighter.universe}</Text>
      </View> 
      <View style={styles.priceWrapper}>
        <Text style={styles.otherText}>Price: {fighter.price}</Text>  
        <Text style={styles.otherText}>Rate: {fighter.rate}</Text>  
        <Text style={styles.otherText}>Downloads: {fighter.downloads}</Text>  
      </View>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 1,
  },
  imageWrapper: {
    width: 'auto',
    marginHorizontal: 13,
    marginVertical: 16,
    justifyContent: 'center',
  },
  imageStyle: {
    width: 73,
    height: 73,
  },
  nameWrapper: {
    justifyContent: 'center',
    flex: 1
  },
  nameText: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
  },
  otherText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
  },
  priceWrapper: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 24
  }
  });

export default FighterItem;