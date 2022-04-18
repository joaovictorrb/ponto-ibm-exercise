import React, {useContext} from 'react';

import AuthRoutes from './auth.routes';
import AuthContext from '../context/authContext';
import AppRoutes from './app.routes';

function Routes() {
  const {isLogged} = useContext(AuthContext);

  return isLogged ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
