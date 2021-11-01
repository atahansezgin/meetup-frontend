import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native'

import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from './pages/RootStackScreen';
import RootHomeScreen from './pages/RootHomeScreen';

import { AuthContext } from './components/Context';

import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {

  const[isLoading,setIsLoading] = useState(true);
  const [userToken,setUserToken] = useState(null);

  const authContext = React.useMemo(() => ({
    signIn: () => {
      AsyncStorage.setItem('userToken','true');
      setUserToken('true');
      setIsLoading(false);
    },
    signOut: () => {
      AsyncStorage.removeItem('userToken');
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      AsyncStorage.setItem('userToken','true');
      setUserToken('true');
      setIsLoading(false);
    }
  }),[])

  useEffect(() => {
    AsyncStorage.getItem('userToken').then(value => setUserToken(value));
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  },[]);

  if(isLoading){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large" color="#8e44dd" />
      </View>
    )
  }
  return(
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        { userToken !== null ? 
        <RootHomeScreen/>
          :
        <RootStackScreen/>
      }
        
      </NavigationContainer>
    </AuthContext.Provider>
  );  
}

export default App;