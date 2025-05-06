import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api', // Next.js API Route와만 통신하도록 설정
  headers: {
    'Content-Type': 'application/json',
  },
});

export const httpClient = {
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
