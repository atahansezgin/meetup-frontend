import axios from 'axios';
import React , { useState, useEffect } from 'react';
import { FlatList, StyleSheet, SafeAreaView, RefreshControl, View, Text } from 'react-native';
import Event from '../components/Event';
import api from '../apiURL.json'

const Home = () => {
    const[Refreshing, setRefreshing] = useState(false);
    const [DATA,setDATA] = useState([]);
    
    const apiCall = () => axios.get(api.url+'event/getAll').then(response => setDATA(response.data))
    
    const onRefresh = () => {
        setRefreshing(true);
        apiCall();
        setRefreshing(false);
    }

    useEffect(() => {
        apiCall();
    },[]);
    return(
        <SafeAreaView>   
            <FlatList
                refreshControl={
                    <RefreshControl refreshing={Refreshing} onRefresh={onRefresh}/>
                }
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
        backgroundColor:'#2980b9',
    },
})
