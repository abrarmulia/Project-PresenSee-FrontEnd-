import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement registration logic here
    navigate('/login');
  };

  return (
    <div>
      <div class="login-form">
        <h2 class="login-h2">Register Admin PresenSee</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div class="form-group">
            <label >Nama</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Masukkan nama anda"
              required
            />
          </div>
          <div class="form-group">
            <label >Username</label>
            <input
              type="Username"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
              placeholder="Masukkan Username anda"
              required
            />
          </div>
          <div class="form-group">
            <label >Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              placeholder="Masukkan password anda"
              required
            />
          </div>
          <div class="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              placeholder="Masukkan ulang password anda"
              required
            />
          </div>
          <button
            type="submit"
            class="login-btn"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
