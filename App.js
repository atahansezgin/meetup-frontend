import React from 'react';
import { ActivityIndicator, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from './navigators/RootStackScreen';
import RootHomeScreen from './navigators/RootHomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from './components/Context';
import { getUser } from './services/UserServices';

const App = () => {

  const [isLoading,setIsLoading] = React.useState(true);
  const [user,setUser] = React.useState(null);

  const authContext = React.useMemo(() => ({
    signIn: (email) => {
        getUser(email,setUser)
        setIsLoading(false);
    },
    signOut: () => {
        AsyncStorage.clear();
        setUser(null);
        setIsLoading(false);
    },
    signUp: (email) => {
        getUser(email,setUser)
        setIsLoading(false);
    }
    }),[]);

  React.useEffect(() => {
    AsyncStorage.getItem('user').then(value => setUser(value));
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
        { user !== null ? 
          <RootHomeScreen/>
            :
          <RootStackScreen/>
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );  
}

export default App;