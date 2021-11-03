import React , { useState, useEffect } from 'react';
import EventList from '../components/EventList';
import { getEvents } from '../services/EventServices';

const Home = () => {

    const [DATA,setDATA] = useState([]);

    useEffect(() => {
        getEvents().then(response => setDATA(response.data))
    },[]);

    return(
            <EventList 
                onRefresh={()=> getEvents().then(response => setDATA(response.data))}
                data={DATA}
            />
    );
}

export default Home;


