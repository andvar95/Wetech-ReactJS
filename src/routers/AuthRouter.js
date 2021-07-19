import React from 'react'
import {Switch,Route, Redirect} from "react-router-dom";
import {RegisterScreen} from "../components/auth/RegisterScreen";
import {LoginScreen} from "../components/auth/LoginScreen";


export const AuthRouter = () => {
    return (
        <div className="auth__main">
                {/* en auth va a ubuscar clase main 
                esos stilos se aplican a ambos
                */}

            <div className="auth__box-container">

                
            <Switch>
                <Route 
                    exact
                    path="/auth/register"
                    component={RegisterScreen}
                    />

                <Route 
                    exact
                    path="/auth/login"
                    component={LoginScreen}
                    />
                <Redirect to="/auth/login" />
              

            </Switch>
            </div>
            
        </div>
    )
}
