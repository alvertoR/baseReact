import React, { Component } from 'react';
import './styles/ItemCard.css';
import { Link }             from 'react-router-dom';

import images from '../assets/images/images';

class ItemCard extends Component{
    render() {
        const preText = this.props.data.text.substr(0, 108);
        return(
            <div className="card">
                <div className="card-image">
                    <img className="card-image--img" src={images[this.props.data.image]} alt=""/>
                </div>
                <h2 className="card-title">
                    {this.props.data.title}
                </h2>
                <p className="card-texts">
                    {preText}...
                    <br/>
                    <Link to={`/written/${this.props.data._id}/write`}>
                        <span className="card-texts__more">Leer más</span>
                    </Link>
                </p>
            </div>
        )
    }
}

export default ItemCard;