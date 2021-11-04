import axios from 'axios';
import { Alert } from 'react-native';
import api from '../apiURL.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginCall = (email,password,signIn) => 
    axios.get(api.url+`user/login?email=${email}&password=${password}`)
        .then(response => response.data ? signIn(email) : Alert.alert("error"));

export const signUpCall = (user) => axios.post(api.url+'user/post',user);

export const emailCheck = (email,post) => 
    axios.get(api.url+`user/emailCheck?email=${email}`)
        .then(response => response.data ? Alert.alert("Email Error") : post())

export const getUser = (email,setUser) => 
    axios.get(api.url+`user/getUser?email=${email}`)
        .then(response => {
            AsyncStorage.setItem('user',JSON.stringify(response.data));
            setUser(response.data);
        });