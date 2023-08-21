import React, { useState } from 'react'
import '../css/navbar.css'
import { MdKeyboardArrowDown } from "react-icons/md"
import { FaBars } from "react-icons/fa"
import { Dropdown } from './Dropdown'
import logo from '../assests/logo.png';
import LoginForm from './LoginForm'
import Form from './Form'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export const Navbar = () => {
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
    const [dropdown, setDropdown] = useState(false)
    const [mobdropdown, setMobDropDown] = useState(false)
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)
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
        <div className='Navbar'>
            <div className='navbar-wrap'>
                <div className='nav-1'>
                    <img src={logo} alt="LOGO" />
                    <span>MAFIA</span>
                </div>
                <div className='nav-2'>
                    <div className={mobdropdown ? 'mobile-nav-item-wrap open' : 'mobile-nav-item-wrap'}>
                        <li className='nav-item' onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                            <a>Features</a>
                            <MdKeyboardArrowDown className='key-arrow' />
                            {dropdown && <Dropdown />}
                        </li>
                        <li className='nav-item'>Build <MdKeyboardArrowDown className='key-arrow' /></li>
                        <li className='nav-item'>Resources <MdKeyboardArrowDown className='key-arrow' /></li>
                        <li className='nav-item' onClick={() => setOpen(!open)}>Connect</li>

                    </div>
                    <li onClick={() => setMobDropDown(!mobdropdown)} className='mobile-nav-item'><FaBars /></li>
                </div>
            </div>
            {
                open &&
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
                            <button onClick={() => {
                                setOpen(false)
                                if(setOpen(false))
                                {
                                    setOpen2(true)
                                }
                            }}>login</button>


                        </div>
                        <div className="col-2">
                            <img className="img2" src="./assests/img2.jpg" alt="logo" />
                        </div>
                    </div>
                </section>
            }
            {
                open1 && <LoginForm />
            }
        </div>
    )
}