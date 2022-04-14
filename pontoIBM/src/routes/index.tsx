import React, {useContext} from 'react';

import AuthRoutes from './auth.routes';
import AuthContext from '../context/authContext';
import AppRoutes from './app.routes';

function Routes() {
  const {signed} = useContext(AuthContext);

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
