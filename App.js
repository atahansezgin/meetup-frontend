import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Login from './pages/Login'

const App = () => {
  return(
    <View style={styles.container}>
      <Login />
    </View>
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
