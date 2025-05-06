import React from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';
import { useState } from 'react'
import logorotate from './assets/logo9.png';


const Login = ({setStatus}) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
    
  const handleLogin = () => {
    history.push('/signup');
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
      console.log(username)
    } else if (name === 'password') {
        setPassword(value);
        console.log(password)
    }
  }

  const handleSignin = (e) => {
    const Savedusername = localStorage.getItem("username");
    const Savedpassword = localStorage.getItem("password");
    if (username === Savedusername && password === Savedpassword) {
      e.preventDefault();
      alert("Login Successful");
      history.push('/profile');
      setStatus(true);
    }
  }

  return (
    <section className="login">
      <div className="login-box">
        <div className='login-form'>
        <form action="">
        <h1>Login to Your Account</h1>
        <input type="text" name='username' placeholder="Username" value={username} onChange={handleInputChange}/>
        <input type="password" name='password' placeholder="Password" value={password} onChange={handleInputChange}/>
        <button className='s-in' type='submit' onClick={handleSignin}>Sign In</button>
        </form>
        <div className="sign-up">
        <h2>New Here?</h2>
        <button className='s-up' onClick={() => handleLogin()}>Sign Up</button>
        </div>
        </div>
        <div className="divider"></div>
        <div className="login-side">
          <img src={logorotate} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Login
