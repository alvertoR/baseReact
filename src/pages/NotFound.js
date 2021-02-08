import React    from 'react';
import { Link } from 'react-router-dom';

import './styles/NotFound.css';

//Assets
import image from '../assets/images/notFound.png';

function NotFound(){
    return(
        <div>
            <div className="notFound">
                <div className="notFound-container">
                    <h2 className="notFound-title">404 - Not Found</h2>
                    <img className="notFound-img" src={image} alt="Image de perdido" />
                    <p className="notFound-text">
                        Parece que te has perdido...
                        <br/>
                        <Link to="/">
                            <span className="notFound-span">Vamos a un mejor lugar</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NotFound;