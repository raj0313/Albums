/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Albums from './components/Albums';
import Gallery from './components/Gallery';
import PhotoView from './components/PhotoView';
const Stack = createNativeStackNavigator();

const App =() =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Albums"
        component ={Albums}
        >

        </Stack.Screen>
        <Stack.Screen
        name="Gallery"
        component ={Gallery}
        >

        </Stack.Screen>
        <Stack.Screen
        name="PhotoView"
        component ={PhotoView}
        >

        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
