import {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';

import NotFoundViews from './notFound/notFoundViews';
import SignupViews from './signup/signupViews';
import LoginViews from './login/loginViews';
import HomeViews from './home/homeViews';

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
        <Routes>
          <Route
            index
            path='/'
            element={<HomeViews logout={handlerLogout} />}
          />
          <Route
            path='/*'
            element={<NotFoundViews />}
          />
        </Routes>
      ) : (
        <Routes>
          <Route
            path='/'
            element={<SignupViews />}
          />
          <Route
            path='/login'
            element={<LoginViews login={handlerLogin} />}
          />
          <Route
            path='/*'
            element={<NotFoundViews />}
          />
        </Routes>
      )}
    </>
  );
};

export default App;
