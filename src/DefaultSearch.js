import React from 'react';
import terms from './searchTerms';
import { NavLink } from 'react-router-dom';
const DefaultSearch = () => {

    console.log(terms);

    return (
        <nav className='main-nav'>
            <ul>
                {terms.map((item, index) => <li key={index}><NavLink to={item}>{item}</NavLink></li>)}
            </ul>
        </nav>

    );

}
export default DefaultSearch;