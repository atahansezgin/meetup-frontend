import axios from 'axios';
import api from '../apiURL.json';

export const getEvents = () => axios.get(api.url+'event/getAll')

export const getEventsByUserId = (id) => axios.get(api.url+`/event/getEventsByUserId?id=${id}`)

export const postEvent = (event,id) => axios.post(api.url+`event/postEvent?id=${id}`,event);