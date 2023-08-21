import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;