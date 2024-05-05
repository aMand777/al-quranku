import axios from 'axios';

export const instanceApiBaseUrl = axios.create({
  baseURL: process.env.BASE_API_URL,
});

export const instanceApiRouteHandler = axios.create({
  baseURL: '/api',
});
