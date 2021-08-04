import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DailyPic from './screens/DailyPic';
import SpaceCraft from './screens/SpaceCraft';
import StarMap from './screens/StarMap';

const Stack=createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="DailyPic" component={DailyPic}/>
          <Stack.Screen name="SpaceCraft" component={SpaceCraft}/>
          <Stack.Screen name="StarMap" component={StarMap}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
