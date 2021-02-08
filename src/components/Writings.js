import React from 'react';

import './styles/Writing.css';

//Assets
import images from '../assets/images/images';



function Writings(props){
    
    return(
        <div>
            {props.data.map((item) => {
                return(
                    <div key={item._id}>
                        <div className="written-image">
                        <img className="written-image--image" src={images[`${item.image}`]} alt="Imagen de fondo"/>
                    </div>
                    <h2 className="written-title">
                        {item.title}
                    </h2>
                    <p className="written-text">
                        {item.text}
                    </p>
                    </div>
                )
            })}
            
        </div>
    )

};

export default Writings;