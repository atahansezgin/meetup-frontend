import axios from 'axios';
import React , { useState, useEffect } from 'react';
import { FlatList, Text, View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Event from '../components/Event';
import api from '../apiURL.json'

const Home = () => {
    const [DATA,setDATA] = useState([]);

    useEffect(()=>{
        axios.get(api.url+'Event')
            .then(response => setDATA(response.data))
    })

    return(
        <SafeAreaView>
            <FlatList
                contentContainerStyle={styles.container}
                data={DATA}
                keyExtractor={(item,index) => index.toString()}
                renderItem={({item}) => (<Event
                    title={item.title}
                    date={item.date}
                    place={item.place}
                    description={item.description}
                />)}
            />
        </SafeAreaView>
        
    );
}

export default Home;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        alignItems:'stretch',
        padding: 20
    },
})
