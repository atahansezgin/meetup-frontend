import React , { useState, useEffect } from 'react';
import { View } from 'react-native';
import EventList from '../components/EventList';
import { getEvents } from '../services/EventServices';

const Home = () => {

    const [DATA,setDATA] = useState([]);

    useEffect(() => {
        getEvents().then(response => setDATA(response.data))
    },[]);

    return(
        <View style={{backgroundColor:'#2980b9',flex:1}}>
            <EventList 
                onRefresh={()=> getEvents().then(response => setDATA(response.data))}
                data={DATA}
            />
        </View>
            
    );
}

export default Home;


