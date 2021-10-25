import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {

    const { Name, price, description, img, _id } = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h3>name:{Name}</h3>
            <h5>price:{price}</h5>
            <p>{description.slice(0, 200)}</p>
            <Link to={`/booking/${_id}`}><button className="btn btn-warning">Book {Name.toLowerCase()}</button></Link>
        </div>
    );
};

export default Service;