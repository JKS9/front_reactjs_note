import {Routes, Route} from 'react-router-dom';

import {MiniDrawer} from '../layout/drawer/drawer';
import NotFoundViews from '../views/notFound/notFoundViews';

const Authenticate = (props: any) => {
  return (
    <div>
      <MiniDrawer logout={props.logout}>
        <Routes>
          <Route
            index
            path='/'
            element={<p>Etienne</p>}
          />
          <Route
            index
            path='/user'
            element={<p>Profile</p>}
          />
          <Route
            path='/*'
            element={<NotFoundViews />}
          />
        </Routes>
      </MiniDrawer>
    </div>
  );
};

export default Authenticate;
