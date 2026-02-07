import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';

export const AXIOS_INSTANCE = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const instance = async <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const response: AxiosResponse<T> = await AXIOS_INSTANCE({
    ...config,
    ...options,
  });

  return response.data;
};
