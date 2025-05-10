import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

interface CustomAxiosInstance extends AxiosInstance {
  getUri(config?: AxiosRequestConfig): string;
  request<T>(config: AxiosRequestConfig): Promise<T>;
  get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  head<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  options<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
}

const axiosInstance: CustomAxiosInstance = axios.create({
  baseURL: '/api', // Next.js API Route와만 통신하도록 설정
  withCredentials: true,
});

axiosInstance.interceptors.response.use((response) => response.data);

export const http = {
  get: <T>(url: string, params?: Record<string, any>) => {
    return axiosInstance.get<T>(url, { params });
  },
  post: <T>(url: string, data: any) => {
    return axiosInstance.post<T>(url, data);
  },
  patch: <T>(url: string, data: any) => {
    return axiosInstance.patch<T>(url, data);
  },
  delete: <T>(url: string) => {
    return axiosInstance.delete<T>(url);
  },
};
