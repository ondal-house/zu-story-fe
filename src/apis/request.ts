import axios, { AxiosRequestConfig } from 'axios';

const request = async (config: AxiosRequestConfig) => {
  try {
    return (await axios(config)).data;
    // eslint-disable-next-line no-empty
  } catch (error) {}
};
