import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer'
import { Drawer } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { AuthContext } from './Context';

const CustomDrawerContent = (props) => {

    const {signOut} = React.useContext(AuthContext)

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <Drawer.Section>
                    <DrawerItem
                        icon={({color,size}) => (
                            <FontAwesome5 
                                name="home"
                                color={color}
                                size={size}
                                onPress={()=>{}}
                            />
                        )}
                        label="Home"
                        onPress={() => props.navigation.navigate('Home')}
                    />
                </Drawer.Section>
                <Drawer.Section>
                    <DrawerItem
                        icon={({color,size}) => (
                            <FontAwesome5 
                                name="plus"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Event Create"
                        onPress={() => props.navigation.navigate('EventCreate')}
                    />
                </Drawer.Section>
            </DrawerContentScrollView>
            
            <Drawer.Section>
                <DrawerItem
                    icon={({color,size}) => (
                        <FontAwesome5 
                            name="sign-out-alt"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => signOut()}
                />
            </Drawer.Section>
        </View>
    );
    
}

export default CustomDrawerContent;

const styles = StyleSheet.create({
    box:{
        borderWidth:1
    }
})