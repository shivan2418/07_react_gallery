import React from 'react';
import Picture from './Picture';
import { render } from '@testing-library/react';
import { Route, NavLink, Redirect } from 'react-router-dom';

// Displays the search fields and the results, do not show anything if not passed a query.
const Results = ({ pics }) => {

    if (typeof (pics) !== 'undefined') {
        
        return (
           
            <div className='photo-container'>
                {pics.map( (pic,index) => <Picture key={index} pic={pic}/>)}
                              
            </div>
        );
    } else {
        console.log('pics got null');
        return (null);
    }




}

export default Results;