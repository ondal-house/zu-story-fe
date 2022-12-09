import { useState } from 'react';
import { useQuery } from 'react-query';
import API from '../../apis/request';
import { FlexBox } from '../../components/FlexBox';
import CustomCardBoard from './components/CustomCardBoard';

const BoardContentContainer = () => {
  const [serverStatus, setServerStatus] = useState<string>();
  const [errorCode, setErrorCode] = useState<number>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const { data: boardList } = useQuery('boards', API.getBoards, {
    retry: 0,
    onSuccess: (boardList) => {
      console.log(`get ${boardList.length} items`);
    },
    onError: (error: Request.Error) => {
      setServerStatus('error: cannot get board list from server.');
      setErrorCode(error.code);
      setErrorMessage(error.message);
    },
  });

  return (
    <FlexBox fullWidth={true}>
      {boardList?.slice(0, 8).map((item) => {
        return (
          <CustomCardBoard
            key={item.id + '-' + item.category.type}
            title={item.title}
            userImageUrl={item.writerInfo.userImageUrl}
            boardCategory={item.category.type}
          />
        );
      })}
    </FlexBox>
  );
};

export default BoardContentContainer;
