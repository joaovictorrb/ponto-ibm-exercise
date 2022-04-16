import React, {useContext} from 'react';

import AuthRoutes from './auth.routes';
import AuthContext from '../context/authContext';
import AppRoutes from './app.routes';

function Routes() {
  const { isLogged } = useContext(AuthContext);
  console.log("===========ROUTES=============");
  console.log(isLogged);
  console.log("===========ROUTES=============");
  return isLogged ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
