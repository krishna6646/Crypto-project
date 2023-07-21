import React, { useState } from 'react'
import '../css/form.css'
// import bgImg from '../public/assests/img2.jpg';
import { useForm } from 'react-hook-form';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';

export default function Form() {

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
        <section>
            <div className="register">
                <div className="col-1">
                    <h2>Sign In</h2>
                    <span>register and enjoy the service</span>

                    <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" id='username' name='username' value={formData.username} onChange={handleChange} placeholder='username' required />
                        <input type="email" id='email' name='email' value={formData.email} placeholder='email' required onChange={handleChange} />
                        <input type="text" onChange={handleChange} id='password' name='password' value={formData.password} placeholder='password' required />
                        <button onClick={registerfun} className='btn'>Sign In</button>
                       
                    </form>
                    <span>Already have an account</span>
                       <Link to='/Login'> <button >login</button></Link>

                </div>
                <div className="col-2">
                <img className="img2" src="./assests/img2.jpg" alt="logo" />
                </div>
            </div>
        </section>
    )
}