import React from 'react';
import { render } from '@testing-library/react';
import { Route, NavLink, Redirect } from 'react-router-dom';

// Displays the search fields and the results
const Results = ({query}) => {

    return (
        <div className='container'>
            <h5>Results from results component </h5>
            <h4>Here showing results for {query} </h4>
        </div>
    );
}

export default Results;