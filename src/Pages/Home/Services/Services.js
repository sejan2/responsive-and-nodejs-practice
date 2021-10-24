import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services">
            <h2 className="text-primary mt-5">Our Services</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.key}
                        service={service}>

                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;