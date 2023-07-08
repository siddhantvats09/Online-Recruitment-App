import React, { useState } from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import { Button } from '@mui/material';
import tid2 from "./tid2.png"
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import { auth, provider } from '../Firebase'


const Login = ({ setisauth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Logged in user:', user);
        localStorage.setItem("isauth", true);
        setisauth(true);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        console.error('Login error:', error);
      });
  };


  const signin = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isauth", true);
      setisauth(true);
      navigate("/");
    });
  };

  return (
    <div className='mainbox3'>
      <div className="login-container">
        <h2 className="login-heading">Login with Email</h2>
        <div className="input-container">
          <input type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange} className="input-field" />
          <input type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange} className="input-field input-field2" />
          <Button variant="contained"
            color='primary' onClick={handleLogin} className="login-button">Login</Button>
        </div>
        {error && <p className='errors'>{error}</p>}
        <h2>OR</h2>
        <Button
          onClick={signin}
          variant="contained"
          color='error'
          className="google-login-button"
          startIcon={<GoogleIcon />}
        >
          Login with Google
        </Button>
      </div>
      <img className='img2' src={tid2} alt="" />
    </div>
  )
}

export default Login
