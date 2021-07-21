import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "../actions/auth";

import { PrivateRoute } from "./PrivateRoute";

import { Board } from "../components/board/Board";
import { Projects } from "../components/projects/Projects";
import { Tasks } from "../components/task/Tasks";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector(
    (state) => state,
    () => {}
  );
  const token = auth.token;

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute
            exact
            isAuthenticated={!!token}
            path="/"
            component={Board}
          />

          <PrivateRoute
            exact
            isAuthenticated={!!token}
            path="/projects"
            component={Projects}
          />

          <Route
            // isAuthenticated={!!token}
            path="/auth"
            component={AuthRouter}
          />

          <Route apth="/tasks" component={Tasks} />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
