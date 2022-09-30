import React from 'react'
import { Link } from 'react-router-dom'
import github from '../utils/github.svg'
import google from '../utils/google.svg'


const Login = () => {
  return (
    <div className="login">
    <div className="login-container">
      <div className='auth'>
        <h3>Sign in with</h3>
        <div className="social">
          <button><img src={github} alt="github" /><span>Github</span></button>
          <button><img src={google} alt="google" /><span>Google</span></button>
        </div>
        <h3>Login Account</h3>
        <form>
          
          <input type="email" autoComplete='off' name="email" id="email" placeholder='example@mail.com' />
          <input type="password" autoComplete='off' name="password" placeholder='pasword' />
          
          <input type='submit' value="Register" />
        </form>
      </div>
      <div className="instructions">
        <Link to="/forgot">Forgot password</Link>
        <Link to="/register" >Register</Link>
      </div>
    </div>
  </div>
  )
}

export default Login