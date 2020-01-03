import React from 'react';
import { render } from '@testing-library/react';
import { Route, NavLink, Redirect } from 'react-router-dom';

// Displays the search fields and the results, do not show anything if not passed a query.
const Results = ({ query }) => {
    console.log(query);
    if (typeof (query) !== 'undefined') {
        return (
            <div className='photo-container'>
                <h4>Showing results for {query} </h4>
            </div>
        );
    } else {
        return (null);
    }




}

export default Results;