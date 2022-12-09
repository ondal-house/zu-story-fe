import { useState } from 'react';
import { useQuery } from 'react-query';
import API from '../../apis/request';
import { FlexBox } from '../../components/FlexBox';
import CustomButton from './components/CustomButton';

const CategoryContentContainer = () => {
  const [serverStatus, setServerStatus] = useState<string>();
  const [errorCode, setErrorCode] = useState<number>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const { data: categoryList } = useQuery('categories', API.getCategories, {
    retry: 0,
    onSuccess: (categoryList) => {
      console.log(`get ${categoryList.length} items`);
    },
    onError: (error: Request.Error) => {
      setServerStatus('error: cannot get category list from server.');
      setErrorCode(error.code);
      setErrorMessage(error.message);
    },
  });

  return (
    <FlexBox scrollable={'Horizontal'}>
      {categoryList?.map((category) => {
        return (
          <CustomButton
            key={category.id + '-' + category.type}
            value={category.type}
            onClick={() => {
              console.log('click ' + category.type);
            }}
          />
        );
      })}
    </FlexBox>
  );
};

export default CategoryContentContainer;
