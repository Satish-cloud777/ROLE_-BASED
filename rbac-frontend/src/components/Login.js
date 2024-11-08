import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(''); 
    const [error, setError] = useState('');
    const navigate = useNavigate();  // Initialize useNavigate

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        
        const response = await axios.post('http://localhost:8080/auth/login', { username, password, role });
        console.log(response.data);
        const token = response.data.token;
        const userRole = response.data.role.replace("ROLE_", "").toUpperCase();

        localStorage.setItem('token', token);
        localStorage.setItem('role', userRole);

        if(userRole === 'ADMIN'){
            console.log("Navigating to admin");
            navigate('/admin'); 
         }else if(userRole === 'USER'){
            console.log("Navigating to user");
            navigate('/user');
        }
        else{
            setError('Invalid role');
        }
        
      } catch (err) {
        setError('Invalid credentials');
      }
    };
    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Role:</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)} required>
                        <option value="" disabled>Select your role</option>
                        <option value="ADMIN">ADMIN</option>
                        <option value="USER">USER</option>
                    </select>    
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
    }

    export default Login;