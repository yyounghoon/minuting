import axios, { AxiosRequestConfig } from 'axios';
import { getLocalStorage } from '../utils/storage';

export const client = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

client.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getLocalStorage('accessToken')}`;
  return config;
});

export const fetcher = async <T>(config: AxiosRequestConfig): Promise<T> => {
  const { data } = await client<T>(config);
  return data;
};
