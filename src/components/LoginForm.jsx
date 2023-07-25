import React, { useState, useEffect } from 'react';
import '../App.css';
import { useNavigate } from "react-router-dom";



const LoginForm = () => {
  const navigate = useNavigate();
  const [crendential, setcrendential] = useState({ email: "", password: "" })




  const handleChange = (e) => {
    setcrendential({ ...crendential, [e.target.name]: e.target.value, })
  }

  const handleSubmit = async (e) => {
    navigate('/Dashboard')

    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/users/login", {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ email: crendential.email, password: crendential.password })
    });
    const json = await response.json()
    localStorage.setItem("token", json.token)
    console.log(json);



  }

  return (

    <form onSubmit={handleSubmit} className='form'>
      <div className='form1'>
        <div>
          <h2>Login</h2>
          <label htmlFor="email" name="email"  >Email :</label>
          <input
            type="email"
            name="email"
            id="email"
            value={crendential.email}
            onChange={handleChange}
          />

        </div>
        <div>
          <label htmlFor="password" name="password"  >Password :</label>
          <input
            type="password"
            name="password"
            id="password"
            value={crendential.password}
            onChange={handleChange}
          />

        </div>
        <button type="submit" onClick={handleSubmit}>Log In</button>
      </div>
     
    </form>

  );
};

export default LoginForm;