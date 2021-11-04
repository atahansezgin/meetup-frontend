import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../pages/Home'
import EventCreate from '../pages/EventCreate';
import CustomDrawerContent from '../components/CustomDrawerContent';
import ProfileScreen from '../pages/ProfileScreen';


const Drawer = createDrawerNavigator();

const RootHomeScreen = () => {
    return (
        <Drawer.Navigator 
            drawerContent = {props => <CustomDrawerContent {...props} />}
            screenOptions={{header:()=>null}}
        >
            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name='Profile' component={ProfileScreen} />
            <Drawer.Screen name='EventCreate' component={EventCreate} />
        </Drawer.Navigator>
    )
}

export default RootHomeScreen
