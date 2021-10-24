import React from 'react';
import expert2 from '../../../Images/photo-11.jpg'
import expert1 from '../../../Images/photo-158.jpg'
import expert3 from '../../../Images/photo2.jpg'
// import expert5 from '../../../Images/photo1.jpg'
// import expert6 from '../../../Images/photo-15.jpg'
import expert4 from '../../../Images/photo-14.jpg'
import Expert from '../Expert/Expert';
import "./Experts.css"


const Experts = () => {
    const experts = [
        {
            img: expert1,
            name: 'Andrew Smith',
            expertize: '-Engine Expert-'
        },
        {
            img: expert2,
            name: 'John Anderson',
            expertize: '-Polish Expert-'
        },
        {
            img: expert3,
            name: 'Zakaria Smith',
            expertize: '-Coloring Expert-'
        },
        {
            img: expert4,
            name: 'Sakib Anderson',
            expertize: '-Alrounder Expert-'
        },
    ]
    return (
        <div id="experts" className="container">
            <h2 className="text-primary mt-5">Our experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert expert={expert} key={expert.name}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;