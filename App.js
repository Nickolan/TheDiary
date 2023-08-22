import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name='SignupScreen' component={SignupScreen}/>
        <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen}
        options={({navigation}) => ({
          headerStyle: { backgroundColor: "#222f3e"},
          headerTitleStyle: { color: "#ffffff"},
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
              <Text>New</Text>
            </TouchableOpacity>
          )
        })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;