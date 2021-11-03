import axios from 'axios';
import api from '../apiURL.json';

export const getEvents = () => axios.get(api.url+'event/getAll')

export const postEvent = (event) => axios.post(api.url+'/event/post',event);