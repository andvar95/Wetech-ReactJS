import React from 'react'
import {Stack} from "./Stack";
import {SideBarBoard} from "./SideBarBoard";

import {Navbar} from "../iu/Navbar";
export const Board = () => {
    return (
        <div>
             <Navbar />
            <div>
                <Stack />
            </div>

        </div>
    )
}
