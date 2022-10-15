import axios, { AxiosRequestConfig } from 'axios';

const request = async (config: AxiosRequestConfig) => {
  return (await axios(config)).data;
};
