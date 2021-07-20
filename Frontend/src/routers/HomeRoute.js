import React from 'react'
import {Switch,Route, Redirect} from "react-router-dom";
import {Board} from "../components/board/Board";

import { Projects } from "../components/projects/Projects";


export const HomeRoute = () => {
    return (
        <div className="auth__main">
                {/* en auth va a ubuscar clase main 
                esos stilos se aplican a ambos
                */}

            <div className="auth__box-container">

        
            <Switch>
                <Route 
                    exact
                    path="/home/board"
                    component={Board}
                    />

                <Route 
                    exact
                    path="/home/projects"
                    component={Projects}
                    />
            
        </Switch>
            </div>
            
        </div>
    )
}
