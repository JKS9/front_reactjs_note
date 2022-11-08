import {Routes, Route} from 'react-router-dom';

import NotFoundViews from '../views/notFound/notFoundViews';
import SignupViews from '../views/signup/signupViews';
import LoginViews from '../views/login/loginViews';

const NotAuthenticate = (props: any) => {
  return (
    <Routes>
      <Route
        path='/'
        element={<SignupViews />}
      />
      <Route
        path='/login'
        element={<LoginViews login={props.login} />}
      />
      <Route
        path='/*'
        element={<NotFoundViews />}
      />
    </Routes>
  );
};

export default NotAuthenticate;
