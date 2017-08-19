import React from 'react';
import {NavLink}from 'react-router-dom';

import {Filters} from './Filters';

export const Sidebar = (props) => {

    return (
        <div className="sidebar">
            <ul className="sidebar__nav nav">
                <li className="nav__item">
                    <NavLink exact className="nav__link" to="/">Main</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink exact className="nav__link" to="/sources">Sources</NavLink>
                </li>
            </ul>
            <div className={props.pathname === "/" ? 'filters-container visible' : 'filters-container'}>
                <Filters {...props}/>
            </div>
        </div>
    )

}
