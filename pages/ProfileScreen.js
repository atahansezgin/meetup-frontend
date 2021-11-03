import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
    const[userData,setUserData] = React.useState(AsyncStorage.getItem('user').then(data => setUserData(JSON.parse(data))));
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTag}>
                    Profile
                </Text>
            </View>
            <View style={styles.body}>
                <Text>
                    {userData.fullName}
                    
                </Text>
                <Text>
                    {userData.email}
                </Text>
            </View>
        </View>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#2980b9'
    },
    header:{
        flex: 1,
        justifyContent:'center',
    },
    headerTag:{
        fontSize:40,
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold'
    },
    body:{
        padding: 10,
        backgroundColor:'#fff',
        borderTopStartRadius:20,
        borderTopEndRadius:20,
        flex:5,
    },
});