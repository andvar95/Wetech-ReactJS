import React ,{useEffect, useState} from 'react'
import {BrowserRouter as Router, Switch, Route,Link, Redirect} from "react-router-dom";
import {AuthRouter} from "./AuthRouter"
import {useDispatch, useSelector} from "react-redux";
import { checkAuth } from '../actions/auth';
import {Navbar} from "../components/iu/Navbar"
import {Board} from "../components/board/Board";
import {PrivateRoute} from "./PrivateRoute";
import { Projects } from "../components/projects/Projects";
import { PublicRoute} from "./PublicRoute"; 

export const AppRouter = () => {

    const dispatch = useDispatch()
    const {token} = useSelector(state=>state.auth)

    console.log(token)
  
    useEffect(()=>{
        dispatch(checkAuth())
    },[dispatch])


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
            
                        <PublicRoute 
                            
                            isAuthenticated={!!token}
                            path="/auth" 
                            component={AuthRouter}
                            />

                        <Redirect to="/auth/login" />
                    </Switch>

                </div>


            </Router>
            
      
    )
}
