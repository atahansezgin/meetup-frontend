import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer'
import { Drawer } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { AuthContext } from './Context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomDrawerContent = (props) => {

    const {signOut} = React.useContext(AuthContext);
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
                            />
                        )}
                        label="Ana Sayfa"
                        onPress={() => props.navigation.navigate('Home')}
                    />
                </Drawer.Section>
                <Drawer.Section>
                    <DrawerItem 
                        icon={({color,size})=>(
                            <FontAwesome5 
                                name="user-alt"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Profil"
                        onPress={()=> props.navigation.navigate('Profile')}
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
                        label="Etkinlik Oluştur"
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
                    label="Çıkış Yap"
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