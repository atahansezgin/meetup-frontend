import react from 'react';
import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { UserContext } from '../components/Context';

const ProfileScreen = () => {
    const user = React.useContext(UserContext);
    const[events,setEvents] = React.useState([]);
    React.useEffect(()=>setEvents(user.events),[]);
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTag}>
                    Profile
                </Text>
            </View>
            <View style={styles.body}>
                <Text>
                    Full Name : {user.fullName}
                    
                </Text>
                <Text>
                    Email : {user.email}
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