import axios, { AxiosRequestConfig } from 'axios';

const request = async (config: AxiosRequestConfig) => {
  try {
    return (await axios(config)).data;
  } catch (error) {}
};
