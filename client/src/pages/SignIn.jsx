import React, { useState } from 'react';
import axios from 'axios';
import './SignIn.css';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const nav=useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:3040/signIn',{email,password});
      if(response.status === 200){
        nav('/')
      console.log('Sign in successful:');
      }
    } catch (err) {
      console.error('Sign in error:', err.response ? err.response.data : err.message);
      setError(err.response?.data?.message || 'Failed to sign in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='Navbar'>
      <Navbar />
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        new user <Link to='/signUp'>Signup</Link>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" disabled={loading}>
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </div>
    </div>
  );
};

export default SignIn;
