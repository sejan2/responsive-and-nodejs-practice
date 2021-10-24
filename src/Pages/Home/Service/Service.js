import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {

    const { name, price, desc, img, id } = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h3>name:{name}</h3>
            <h5>price:{price}</h5>
            <p>{desc.slice(0, 200)}</p>
            <Link to={`/booking/${id}`}><button className="btn btn-warning">Book {name.toLowerCase()}</button></Link>
        </div>
    );
};

export default Service;