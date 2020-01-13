import React from 'react';

const Image = (props) => {
    return (
        <div>
            <img src={props.image} alt="..." class="img-thumbnail"></img>          
        </div>
    );
};

export default Image;