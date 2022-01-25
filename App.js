/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/components/Home';
import Details from './src/components/Details';

console.disableYellowBox = true;

const App = () => {
  const Stack=createNativeStackNavigator();
  return (
   <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown:false}}>
       <Stack.Screen name="Home" component={Home}/>
       <Stack.Screen name="Details" component={Details}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
};

export default App;
