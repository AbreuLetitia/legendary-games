import axios from 'axios';

// TODO: Add BASEURL when backend is ready

const instance = axios.create({
  baseURL: 'http://placekitten.com/',
});

// TODO (POC): export const authInstance

export default instance;
