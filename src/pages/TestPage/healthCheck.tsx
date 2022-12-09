import { useState } from 'react';
import { useQuery } from 'react-query';
import API from '../../apis/request';

const HealthCheckPage = () => {
  const [serverStatus, setServerStatus] = useState<string>();
  const [errorCode, setErrorCode] = useState<number>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const { data } = useQuery('sample', API.getSample, {
    retry: 0,
    onSuccess: ({ data }) => {
      console.log(data);
      setServerStatus('API 서버 정상 연결 성공');
    },
    onError: (error: Request.Error) => {
      setServerStatus('API 서버 정상 연결 실패');
      setErrorCode(error.code);
      setErrorMessage(error.message);
    },
  });

  return (
    <div>
      {serverStatus && <div>{`serverStatus:${serverStatus}`}</div>}
      {data && data.length > 0 && <div>{`sample:${data}`}</div>}
      {errorCode && <div>{`errorCode:${errorCode}`}</div>}
      {errorMessage && <div>{`errorMessage:${errorMessage}`}</div>}

      <button onClick={() => console.log('serverHealthCheck!')}>서버 헬스 체크</button>
    </div>
  );
};

export default HealthCheckPage;
