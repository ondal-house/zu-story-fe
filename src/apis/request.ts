import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import ERROR_CODE from '../constants/errorCode';
import STATUS_CODE from '../constants/statusCode';

axios.defaults.baseURL = import.meta.env.VITE_BASE_API_URL;

const isAxiosError = (error: any): error is AxiosError => {
  return error.isAxiosError;
};

const request = async (config: AxiosRequestConfig) => {
  try {
    const response = await axios(config);

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (!error.response) {
        throw { code: ERROR_CODE.NETWORK_ERROR, message: 'Network Error' };
      }

      if (error.response.status === STATUS_CODE.INTERNAL_SERVER_ERROR) {
        throw {
          code: ERROR_CODE.INTERNAL_SERVER_ERROR,
          message: 'internal server error',
        };
      }

      throw error.response?.data;
    }
  }
};

const API = {
  getSample: () => {
    return request({ method: 'GET', url: '/api/v1/samples' });
  },
};

export default API;
