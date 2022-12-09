import { useState } from 'react';
import { useQuery } from 'react-query';
import API from '../../apis/request';
import { FlexBox } from '../../components/FlexBox';
import CustomCircleButton from './components/CustomCircleButton';

const BeverageContentContainer = () => {
  const [serverStatus, setServerStatus] = useState<string>();
  const [errorCode, setErrorCode] = useState<number>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const { data: beverageList } = useQuery('beverages', API.getBeverages, {
    retry: 0,
    onSuccess: (beverageList) => {
      console.log(`get ${beverageList.length} items`);
    },
    onError: (error: Request.Error) => {
      setServerStatus('error: cannot get beverage list from server.');
      setErrorCode(error.code);
      setErrorMessage(error.message);
    },
  });

  return (
    <FlexBox scrollable={'Horizontal'}>
      {beverageList?.map((beverage) => {
        return <CustomCircleButton key={beverage.id + '-' + beverage.name} title={beverage.name} />;
      })}
    </FlexBox>
  );
};

export default BeverageContentContainer;
