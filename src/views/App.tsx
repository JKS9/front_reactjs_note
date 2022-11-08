import {useEffect, useState} from 'react';

import Authenticate from '../routes/authenticate';
import NotAuthenticate from '../routes/notAuthenticate';

import '../styles/App.css';

const App = () => {
  const [logging, setLogging] = useState<boolean>(false);

  useEffect(() => {
    let accessToken: string | null = sessionStorage.getItem('accessToken');
    let refreshToken: string | null = sessionStorage.getItem('refreshToken');

    if (accessToken && refreshToken) {
      setLogging(true);
    } else {
      setLogging(false);
    }
  }, [logging]);

  const handlerLogout = () => {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
    setLogging(false);
  };

  const handlerLogin = () => {
    setLogging(true);
  };

  return (
    <>
      {logging ? (
        <Authenticate logout={handlerLogout} />
      ) : (
        <NotAuthenticate login={handlerLogin} />
      )}
    </>
  );
};

export default App;
