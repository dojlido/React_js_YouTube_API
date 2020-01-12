import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-dojlido.firebaseio.com/'
});

export default instance;