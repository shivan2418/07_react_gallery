import React from 'react';
import { NavLink } from 'react-router-dom';
const DefaultSearch = ({terms}) => {

    return (
        <nav className='main-nav'>
            <ul>
                {terms.map((item, index) => <li key={index}><NavLink to={item}>{item}</NavLink></li>)}
            </ul>
        </nav>
    );

}
export default DefaultSearch;