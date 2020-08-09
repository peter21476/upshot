import React from 'react';
import './Product.scss';

const product = (props) => {
    return (
    <div key={props.key} className="product-wrapper">
        <img className="product-image" src={props.image} alt={props.alt} />
        <h4>{props.title}</h4>
        <p>{props.text}</p>
        <a className="product-button" href={props.link}>BUY NOW</a>
    </div>
    )
};

export default product;