import React from 'react'
import {Switch,Route, Redirect} from "react-router-dom";
import {Board} from "../components/board/Board";
import { Projects } from "../components/projects/Projects";
import { Navbar} from "../components/iu/Navbar";


export const HomeRoute = () => {
    return (
        <div>
                {/* en auth va a ubuscar clase main 
                esos stilos se aplican a ambos
                */}


            <div >
            <Navbar />
        
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
