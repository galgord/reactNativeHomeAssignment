import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import AndroidHeader from '../components/AndoridHeader';
import IosHeader from '../components/IOSHeader';
import FilterScreen from '../screens/FilterScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FighterScren from '../screens/FighertScreen';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const [isFirstTime, setIsFirstTime] = useState(true);

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('isFirstTime', 'false')
      setIsFirstTime(false);
    } catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('isFirstTime')
        console.log(value)
        if(value !== null) {
          if (value === 'false') {
          setIsFirstTime(false)
          }
        }
      } catch(e) {
        console.error(e)
      }
    }
    getData()
  }, [storeData])
  return (
    <NavigationContainer>
    <Stack.Navigator>
     <Stack.Screen 
      name="Home"
      children={() => isFirstTime ? <OnboardingScreen storeData={storeData}/> : <HomeScreen/>}
      options={{
        headerShown: !isFirstTime,
        headerTitle: () => Platform.OS === 'ios' ? <IosHeader/> : <AndroidHeader/>
      }}/>
      <Stack.Screen 
      name="Filter"
      component={FilterScreen}
      options={{
        headerTitle: () => Platform.OS === 'ios' ? <IosHeader text={'Filter'}/> : <AndroidHeader text={'Filter'}/>
      }}
      />
     <Stack.Screen 
      name="Fighter"
      component={FighterScren}/>
      </Stack.Navigator>
     </NavigationContainer>
  );
}
export default MainNavigation;