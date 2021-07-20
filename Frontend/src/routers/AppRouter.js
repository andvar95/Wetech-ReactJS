import React ,{useEffect, useState} from 'react'
import {BrowserRouter as Router, Switch, Route,Link, Redirect} from "react-router-dom";
import {AuthRouter} from "./AuthRouter"
import {useDispatch, useSelector} from "react-redux";
import { checkAuth } from '../actions/auth';
import {Navbar} from "../components/iu/Navbar"
import {PrivateRoute} from "./PrivateRoute";
import { PublicRoute} from "./PublicRoute"; 
import {HomeRoute} from "./HomeRoute";
import {Board} from "../components/board/Board";
import {Projects} from "../components/projects/Projects";

export const AppRouter = () => {

    const dispatch = useDispatch()
    const {token} = useSelector(state=>state.auth)

    
  
    useEffect(()=>{
        dispatch(checkAuth())
    },[dispatch])


    return (
    
            <Router>
            

                <div>
                    <Switch>
                        <Route
                         exact
                         isAuthenticated={!!token}
                         path="/" 
                        component={Board}
                        />

                    <Route
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

                        <Redirect to="/auth/login" />
                    </Switch>

                </div>


            </Router>
            
      
    )
}
