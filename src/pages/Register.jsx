import { useState } from 'react';
import { Link } from 'react-router-dom'
import github from '../utils/github.svg'
import google from '../utils/google.svg'
import axios from 'axios'

const Register = () => {
  const [inputs, setInputs] = useState({ username: "", email: "", password: "" });
  const handleInputs = e => {
    e.preventDefault();
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', inputs);
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }
  console.log(inputs)
  return (
    <div className="login">
      <div className="login-container">
        <div className='auth'>
          <h3>Sign in with</h3>
          <div className="social">
            <button><img src={github} alt="github" /><span>Github</span></button>
            <button><img src={google} alt="google" /><span>Google</span></button>
          </div>
          <p>Create new account</p>
          <div className='form'>
            <input type="text" name="username" onChange={handleInputs} id="username" placeholder='username' />
            <input type="email" name="email" onChange={handleInputs} id="email" placeholder='example@mail.com' />
            <input type="password" name="password" onChange={handleInputs} placeholder='pasword' />
            <input type="password" name="confirm-password" placeholder='confirm pasword' />
            <input onClick={handleSubmit} type='submit' value="Register" />
          </div>
        </div>
        <div className="instructions">
          <Link to="/forgot">Forgot password </Link>
          <Link to="/login"> Sign in </Link>
        </div>
      </div>
    </div>
  )
}

export default Register