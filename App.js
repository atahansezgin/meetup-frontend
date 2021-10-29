import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from './pages/RootStackScreen';
import RootHomeScreen from './pages/RootHomeScreen';

const App = () => {
  const isLoggedIn = false
  
  return(
    
    <NavigationContainer>
      { isLoggedIn == false ? 
        (<RootStackScreen/>) 
          : 
        (<RootHomeScreen/>)
      }
    </NavigationContainer>
    
  );  
}

export default App;