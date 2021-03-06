import React from "react";
import "./slide.css";
import { Teams } from "../team/Teams";
import {Tasks} from '../task/Tasks';
import {Sprint} from '../sprint/Sprint';

export const SideBarBoard = () => {
  return (
    <>
      <div className="white d-flex flex-column flex-shrink-0 p-3 text-white bg-dark slide">
        <ul className="list-unstyled ps-0">
          <li className="mb-1">
            <Teams />
          </li>
          <li className="mb-1">
            <Sprint />
          </li>
          <li className="mb-1">
            <Tasks />
          </li>
        </ul>

        <hr />
      </div>
    </>
  );
};
