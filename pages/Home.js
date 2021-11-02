import axios from 'axios';
import React , { useState, useEffect } from 'react';
import api from '../apiURL.json'
import EventList from '../components/EventList';;

const Home = () => {

    const [DATA,setDATA] = useState([]);
    const apiCall = () => axios.get(api.url+'event/getAll').then(response => setDATA(response.data))

    useEffect(() => {
        apiCall();
    },[]);

    return(
        <EventList 
            onRefresh={apiCall}
            data={DATA}
        />
    );
}

export default Home;


