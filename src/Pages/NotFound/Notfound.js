import React from 'react';
import { Link } from 'react-router-dom';
import img101 from '../../Images/3747371.jpg'

const Notfound = () => {
    return (
        <div>
            <img style={{ width: "100%", height: "600px" }} src={img101} alt="" />
            <Link to="/">Go Back</Link>
        </div>
    );
};

export default Notfound;