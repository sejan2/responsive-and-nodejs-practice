import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './addservices.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('addeded successfully')
                    reset();
                }
            })
    };
    return (
        <div className="addservice">
            <h1>Please Add a service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Name", { required: true, maxLength: 20 })} placeholder="name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Register" />
                <input {...register("img")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;