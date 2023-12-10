import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://pixabay.com/api/?key=40694680-72f66d22c7844ca43ae47eff1&',
});
// axios.defaults.baseURL = 'https://pixabay.com/api';
