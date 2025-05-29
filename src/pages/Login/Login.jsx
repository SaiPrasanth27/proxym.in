import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleAuth = async (e) => {
    e.preventDefault();
    if (user) {
      
      await signOut(auth);
      setEmail('');
      setPassword('');
      setUser(null);
    } else {
      setError('');
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/'); 
      } catch (err) {
        setError('Invalid email or password');
      }
    }
  };

  return (
    <div className="login-container">
      <Link to="/" className="login-back-btn">← Back to Home</Link>

      <form className="login-form" onSubmit={handleAuth}>
        <h2 className="login-title">
          {user ? `Welcome, ${user.email}` : 'Login to Your Account'}
        </h2>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        {!user && (
          <>
            <label className="login-label" htmlFor="email">Email</label>
            <input
              className="login-input"
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="login-label" htmlFor="password">Password</label>
            <input
              className="login-input"
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </>
        )}

        <button className="login-button" type="submit">
          {user ? 'Logout' : 'Login'}
        </button>
      </form>
    </div>
  );
}
