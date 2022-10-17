import { useEffect } from 'react';
import API from '../../apis/request';

const HomePage = () => {
  useEffect(() => {
    const getSample = async () => {
      const data = await API.getSample();
      console.log(data);
    };
    getSample();
  }, []);

  return <>홈페이지</>;
};

export default HomePage;
