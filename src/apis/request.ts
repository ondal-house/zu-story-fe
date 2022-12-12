import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import ERROR_CODE from '../constants/errorCode';
import STATUS_CODE from '../constants/statusCode';
import { beverageData, boardData, categoryData } from '../tempData/data';

axios.defaults.baseURL = import.meta.env.VITE_BASE_API_URL;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  getCategories: () => {
    return categoryData;
  },
  getBeverages: () => {
    return beverageData;
  },
  getBoards: () => {
    return boardData;
  },
};

export default API;
