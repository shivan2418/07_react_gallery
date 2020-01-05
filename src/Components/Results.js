import React from 'react';
import Picture from './Picture';
import NotFound from './NotFound';

// Displays the search fields and the results, do not show anything if not passed a query.
const Results = ({ pics }) => {

    if (typeof (pics) !== 'undefined') {

        if (pics.length === 0) {
            return (<NotFound />);
        } else {
            return (
                <div className='photo-container'>
                    <ul>
                        {pics.map((pic, index) => <Picture key={index} pic={pic} />)}
                    </ul>
                </div>
            );
        }
    } else {
        // just do nothing if passed something undefinded, prevents error. 
        return (null);
    }

}

export default Results;