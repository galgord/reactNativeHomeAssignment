import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform, Text} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import AndroidHeader from '../components/AndoridHeader';
import IosHeader from '../components/IOSHeader';
import FilterScreen from '../screens/FilterScreen';
const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
     <Stack.Screen 
      name="Home"
      component={HomeScreen}
      options={{ 
        headerTitle: ({navigation}) => Platform.OS === 'ios' ? <IosHeader {...navigation}/> : <AndroidHeader/>}}/>
      <Stack.Screen 
      name="Filter"
      component={FilterScreen}
      options={{ 
        headerTitle: ({navigation}) => Platform.OS === 'ios' ? <IosHeader {...navigation}/> : <AndroidHeader/>}}/
        >
     </Stack.Navigator>
     </NavigationContainer>
  );
}
export default MainNavigation;