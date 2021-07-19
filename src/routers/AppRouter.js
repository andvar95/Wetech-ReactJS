import React ,{useEffect, useState} from 'react'
import {BrowserRouter as Router, Switch, Route,Link, Redirect} from "react-router-dom";
import {AuthRouter} from "./AuthRouter"
import {useDispatch} from "react-redux";
//import { login } from '../actions/auth';
import {Navbar} from "../components/iu/Navbar"
import {Board} from "../components/board/Board";

export const AppRouter = () => {


    return (
    
            <Router>
            

                <div>
                    <Switch>
                        <Route 
                            path="/auth" 
                            component={AuthRouter}
                            />

                        <Route 
                            exact
                            path="/" 
                            component={Board}
                            />

                        <Redirect to="/auth/login" />
                    </Switch>

                </div>


            </Router>
            
      
    )
}
