import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Image } from "react-bootstrap";


function Login() {
  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here
    login({ Username });
    navigate('/');
  };

  return (  
    <div>
      <div>
        {/* Left side - Login Form */}
        <div class="login-form">
            <div class="logo">
              <h1>PresenSee</h1>
            </div>
          <form onSubmit={handleSubmit}>
            <div class="form-group"> 
              <label>Username</label>
                <input
                  type="text"
                  value={Username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Masukkan username anda"
                  required/>
            </div>
            <div class="form-group">
              <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan password anda"
                  required/>
            </div>
            <button
              type="submit"
              class="login-btn">
                Login
            </button>
          </form>
        </div>
      </div>
      </div>
  );
}

export default Login;