import React from 'react'
import './Login.css'
import { useState } from 'react'
import logorotate from './assets/logo9.png'
import { useHistory } from 'react-router-dom'


const Signup = ({ setStatus }) => {

    const history = useHistory();
    
    const handleLogin = () => {
        history.push('/login');
    }

    const now = new Date();

    // Get time components
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Get date components
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); 
    const year = now.getFullYear();
    
    // Combine them
    const time = `${hours}:${minutes}:${seconds}`;
    const date = `${day}-${month}-${year}`;


      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [email, setEmail] = useState('');
      const [phone, setPhone] = useState('');


      const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'username') {
          setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        } else if (name === 'confirmPassword') {
            setConfirmPassword(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'phone') {
            setPhone(value);
        }
      }


      const handleSignup = (e) => {
        if (password === confirmPassword) {
            e.preventDefault();
            alert('Account created successfully');
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            localStorage.setItem("email", email);
            localStorage.setItem("phone", phone);
            localStorage.setItem("date", date);
            localStorage.setItem("time", time);
            localStorage.setItem("status", true);
            setStatus(true);
            history.push('/profile');
        } else {
            alert('Passwords do not match');
        }
      }

  return (
    <section className="login">
      <div className="login-box">
        <div className='login-form'>
        <form action="" onSubmit={handleSignup}>
        <h1>Register Your Account</h1>
        <input type="text" required placeholder="Username" name='username' value={username} onChange={handleInputChange} />
        <input type="email" placeholder="E-Mail" name='email' value={email} onChange={handleInputChange} required/>
        <input type="number" placeholder="Phone Number" name='phone' value={phone} onChange={handleInputChange} required/>
        <input type="password" required placeholder="Password" name='password' value={password} onChange={handleInputChange} />
        <input type="password" placeholder="Confirm Password" name='confirmPassword' value={confirmPassword} onChange={handleInputChange} required/>
        <button className='s-in' type='submit'>Sign Up</button>
        </form>
        <div className="sign-up">
        <h2>Already Registered?</h2>
        <button className='s-up' onClick={() => handleLogin()}>Sign In</button>
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

export default Signup
