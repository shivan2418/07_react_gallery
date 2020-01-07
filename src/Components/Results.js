import React from 'react';
import Picture from './Picture';
import NotFound from './NotFound';

// Displays the search fields and the results, do not show anything if not passed a query.
const Results = ({ pics, query }) => {
    
    // if no search term entered then inform the user
    if (typeof (query) === 'undefined') {
        return (
            <div className='photo-container'>
                <h4>Please enter search term</h4>
                </div>
        );
    }
    // if no pictures then just show nothing, it prevents a lot of erros and makes it simpler since can just always pass the pictures to the component.
    if (typeof (pics) !== 'undefined') {
        if (pics.length === 0) {
            //Inform user that no results were found
            return (<NotFound />);
        } else {
            // Otherwise show the results
            return (
                <div className='photo-container'>
                    <ul>
                        {pics.map((pic, index) => <Picture key={index} pic={pic} />)}
                    </ul>
                </div>
            );
        }
    }
    else {
        // just do nothing if passed something undefinded, prevents error. 
        return (null);
    }

}

export default Results;