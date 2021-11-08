import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { UserContext } from '../components/Context';
import {getEventsByUserId} from '../services/EventServices';
import EventList from '../components/EventList';

const ProfileScreen = () => {
    const user = React.useContext(UserContext);
    const[events,setEvents] = React.useState([]);

    React.useEffect(() => {
        getEventsByUserId(user.id).then(response => setEvents(response.data))
    },[])
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTag}>
                    Profil
                </Text>
            </View>
            <View style={styles.body}>
                <Text>
                    {user.fullName}
                </Text>
                <Text>
                    {user.email}
                </Text>
                <View style={{marginBottom:20}}>
                    <EventList 
                        onRefresh={()=> getEventsByUserId(user.id).then(response => setEvents(response.data))}
                        data={events}
                    />
                </View>
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