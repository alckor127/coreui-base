import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "contexts/Auth";
import { PrivateRoute } from "components/Route";
// styles
import "scss/style.scss";
// spinner
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
// containers
const Layout = React.lazy(() => import("./layouts/Layout"));
// pages
const Login = React.lazy(() => import("./pages/Login"));
const Page404 = React.lazy(() => import("./pages/Page404"));
const Page500 = React.lazy(() => import("./pages/Page500"));

const App = () => (
  <Router>
    <AuthProvider>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/404" component={Page404} />
          <Route exact path="/500" component={Page500} />
          <PrivateRoute path="/" component={Layout} />
        </Switch>
      </React.Suspense>
    </AuthProvider>
  </Router>
);

export default App;
