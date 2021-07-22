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
import { HomeRoute } from "./HomeRoute";
import { Tasks } from "../components/task/Tasks";

export const AppRouter = () => {
<<<<<<< HEAD

    const dispatch = useDispatch()
    const {token,checking} =  useSelector(state=>state.auth);

  
   console.log(token)
    useEffect(()=>{
        dispatch(checkAuth())
    },[dispatch])

    if(checking) return(<><div>Espere</div></>)


    return (
    
            <Router>
            

                <div>
                    <Switch>

                    <PrivateRoute
                         
                         
                         isAuthenticated={!!token}
                         path="/home" 
                        component={HomeRoute}
                        />
                        {/*
=======
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute
            isAuthenticated={!!token}
            path="/home"
            component={HomeRoute}
          />
          {/*
>>>>>>> master

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
                        */}

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
