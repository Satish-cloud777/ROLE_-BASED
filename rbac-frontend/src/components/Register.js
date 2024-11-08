import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post('http://localhost:8080/auth/register', { username, password, role });
        
        window.location.href = '/login';

      } catch (err) {
        setError('Registration failed');
      }
    };
  
    return (
        <div className="form-container"> {/* Added container class */}
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>
                {error && <p className="error">{error}</p>} {/* Added error class */}
                <div>
                <label>Username:</label>
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                <label>Password:</label>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                <label>Role:</label>
                <input type="text" placeholder="Role" onChange={(e) => setRole(e.target.value)} />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
  }
  
  export default Register;