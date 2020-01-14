import React from 'react';
import './index.css'

const styles = {
    imageStyle: {
        height: 200,
        width: 200,
        margin: 15 
    }

}


const Image = (props) => {
    return (
        <div className="animated fadeInLeft delay-1s">
            <img src={props.image} style={styles.imageStyle} alt={props.alt} id={props.id} className="img-thumbnail" onClick ={() => props.clickCount(props.id)}></img>          
        </div>
    );
};

export default Image;

