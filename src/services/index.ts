import axios from 'axios';

const instance = axios.create({
  baseURL: '',
});

export const authInstance = axios.create({
  baseURL: 'localhost:3000',
  auth: undefined,
});

export default instance;
