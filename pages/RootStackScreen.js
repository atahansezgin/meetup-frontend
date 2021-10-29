import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Login from './Login';
import SignIn from './SignIn';

const RootStackScreen = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{header:()=>null}}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
    )
}

export default RootStackScreen
