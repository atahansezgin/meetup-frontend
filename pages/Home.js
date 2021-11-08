import React , { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EventList from '../components/EventList';
import { getEvents } from '../services/EventServices';

const Home = () => {

    const [DATA,setDATA] = useState([]);

    useEffect(() => {
        getEvents().then(response => setDATA(response.data))
    },[]);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTag}>
                    Ana Sayfa
                </Text>
            </View>
            <View style={styles.body}>
                <EventList 
                    onRefresh={()=> getEvents().then(response => setDATA(response.data))}
                    data={DATA}
                />
            </View>
        </View>
            
    );
}

export default Home;

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
})


