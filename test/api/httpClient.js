import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://api.cinebh.vgrbo.org/api',  
  headers: {
    'Content-Type': 'application/json',  
  },
});

export default httpClient; 
