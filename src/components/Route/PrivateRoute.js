import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "contexts/Auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={() =>
        token ? <Component {...rest} /> : <Redirect to="/login" />
      }
    />
  );
};

export { PrivateRoute };
