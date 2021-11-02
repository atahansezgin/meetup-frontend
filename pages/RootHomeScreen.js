import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './Home';
import EventCreate from './EventCreate';
import CustomDrawerContent from '../components/CustomDrawerContent';


const Drawer = createDrawerNavigator();

const RootHomeScreen = () => {
    return (
        <Drawer.Navigator 
            drawerContent = {props => <CustomDrawerContent {...props} />}
            screenOptions={{header:()=>null}}
        >
            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name='EventCreate' component={EventCreate} />
        </Drawer.Navigator>
    )
}

export default RootHomeScreen
