import React from 'react';

const styles = {
    imageStyle: {
        height: 200,
        width: 200,
        margin: 15 
    }

}


const Image = (props) => {
    return (
        <div>
            <img src={props.image} style={styles.imageStyle} alt={props.alt} id={props.id} className="img-thumbnail" onClick ={props.clickCount}></img>          
        </div>
    );
};

export default Image;

