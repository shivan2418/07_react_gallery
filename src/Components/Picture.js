import React from 'react';

const Picture = ({ pic }) => {

    //console.log({pic});
    let picurl = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`

    return (
        <li><img src={picurl} alt={pic.title}/></li>
    );

}

export default Picture;