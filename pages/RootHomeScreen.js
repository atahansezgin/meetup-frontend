import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './Home';
import EventCreate from './EventCreate';


const Drawer = createDrawerNavigator();

const RootHomeScreen = () => {
    return (
        <Drawer.Navigator screenOptions={{header:()=>null}}>
            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name='EventCreate' component={EventCreate} />
        </Drawer.Navigator>
    )
}

export default RootHomeScreen
