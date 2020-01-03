import React from 'react';
import terms from './searchTerms';

const DefaultSearch = () => {

    console.log(terms);

    return (

        <ul>
            {terms.map( (item,index) => <li key={index}>{item}</li>  )}
        </ul>
        
    );

}

export default DefaultSearch;