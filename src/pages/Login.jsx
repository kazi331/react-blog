import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import github from '../utils/github.svg'
import google from '../utils/google.svg'


const Login = () => {
  const [inputs, setInputs] = useState({});
  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleLogin = async e => {
    console.log(inputs)
    e.preventDefault();
    // console.log(inputs);
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', inputs);
      console.log(res)
      setErr(null)
      navigate("/")
    } catch (err) {
      setErr(err.response.data)
    }

  }
  // useEffect((()=>{

  // },[])
  return (
    <div className="login">
      <div className="login-container">
        <div className='auth'>
          <h3>Sign in with</h3>
          <div className="social">
            <button><img src={github} alt="github" /><span>Github</span></button>
            <button><img src={google} alt="google" /><span>Google</span></button>
          </div>
          <p>Account Login</p>
          <form className='form' onSubmit={handleLogin}>
            <input type="text" autoComplete='off' autoFocus name="username" onChange={handleChange} placeholder='username' required />
            <input type="password" autoComplete='off' name="password" onChange={handleChange} placeholder='pasword' required />
            <input type='submit' value="Login" />
          </form>
          {err && <p className='err'>{err}</p>}
        </div>
        <div className="instructions">
          <Link to="/forgot">Forgot password?</Link>
          <Link to="/register" >Register</Link>
        </div>
      </div>
    </div>
  )
}

export default Login