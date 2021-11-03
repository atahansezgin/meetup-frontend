import axios from 'axios';
import api from '../apiURL.json';

export const loginCall = (email,password) => axios.get(api.url+`user/login?email=${email}&password=${password}`);

export const signUpCall = (user) => axios.post(api.url+'user/post',user);

export const emailCheck = (email) => axios.get(api.url+`user/emailCheck?email=${email}`);

export const getUser = (email) => axios.get(api.url+`user/getUser?email=${email}`);