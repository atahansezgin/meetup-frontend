import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Login from './Login';
import SignUp from './SignUp';

const RootStackScreen = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{header:()=>null}}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    )
}

export default RootStackScreen
