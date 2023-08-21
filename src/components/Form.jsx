import React, { useState } from 'react'
import '../css/form.css'

// import bgImg from '../public/assests/img2.jpg';
import { useForm } from 'react-hook-form';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export default function Form() {
    const navigate = useNavigate();
        
    const [open2, setOpen2] = useState(false)
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        username: ''
    });
   
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // console.log(watch('username'));
    const registerfun = () => {
        navigate('/Login');
        const { username, password, email } = formData
        console.log(register)
        const res = fetch("http://localhost:5000/api/users/register", {
            headers: {
                "content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ username, password, email })
        })

    }

    return (
        <h1>hi</h1>
    )
}