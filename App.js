import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack'
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Login from './pages/Login'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

var isLogged = false;
const App = () => {
  return(
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        header: () => null
      }}
    >
      <Stack.Screen 
        name="Login" 
        component={Login} 
      />
      <Stack.Screen 
        name="SignIn" 
        component={SignIn} 
      />
      <Stack.Screen 
        name="Home" 
        component={Home} 
      />
    </Stack.Navigator>
  </NavigationContainer>
  );  
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
