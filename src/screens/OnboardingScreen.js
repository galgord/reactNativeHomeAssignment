import React, {useState} from "react";
import { View, StyleSheet, Image, Text, Dimensions, TouchableOpacity } from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel';





const OnboardingScreen = (props) => {
  const data = [{text: 'Access our Extented Catalog', src: require('../../assets/pic1.png')}, {text: 'Filter Fighters', src: require('../../assets/pic2.png')}, {text: 'And More...', src: require('../../assets/pic3.png')}];
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const handlePress = () => {
    props.storeData()
  }
  const renderItem = ({item}) => {
    const {src} = item;
    return (
      <View style={styles.slide}>
            <Image source={src} style={styles.imageStyle}>{ item.title }</Image>
            <Text style={styles.textStyle}>{item.text}</Text>
            <Pagination
                dotsLength={data.length}
                activeDotIndex={activeDotIndex}
                containerStyle={{ backgroundColor: '#1A90F0'}}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
              />
            {activeDotIndex === 2 && (<View style={styles.btnWrapper}>
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                  <Text style={styles.btnText}>Let’s Go</Text>
                </TouchableOpacity>
              </View>)}
      </View>
    );
  }

  return (
    <View style={{flex:1}}>
      <View style={styles.slide}>
    <Carousel
              data={data}
              renderItem={renderItem}
              sliderWidth={Dimensions.get('window').width}
              itemWidth={Dimensions.get('window').width}
              containerCustomStyle= {{backgroundColor: '#1A90F0'}}
              onSnapToItem={(index) => setActiveDotIndex(index)}
            />
            </View>
          </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1, 
    backgroundColor: '#1A90F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 350,
    height: 400,
  },
  textStyle: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 25,
    lineHeight: 29,
    color: 'white',
  },
  btnWrapper: {
    height: 'auto'
  },
  button: {
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    width: 337,
    height: 48,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#1A90F0',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
  }
});

export default OnboardingScreen;