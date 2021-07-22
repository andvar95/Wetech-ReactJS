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
import { HomeRoute } from "./HomeRoute";

export const AppRouter = () => {

    const dispatch = useDispatch()
    const {token,checking} =  useSelector(state=>state.auth);

  
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

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
