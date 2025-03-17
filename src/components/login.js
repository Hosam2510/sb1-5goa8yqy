import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
      const [error, setError] = useState('');
        const navigate = useNavigate();

          const handleSubmit = (e) => {
              e.preventDefault();
                  if (onLogin(email, password)) {
                        navigate('/dashboard');
                            } else {
                                  setError('Invalid email or password');
                                      }
                                        };

                                          return (
                                              <div className="login-container">
                                                    <div className="login-card">
                                                            <h2>EMR System Login</h2>
                                                                    <form onSubmit={handleSubmit}>
                                                                              {error && <div className="error-message">{error}</div>}
                                                                                        <div className="form-group">
                                                                                                    <label htmlFor="email">Email</label>
                                                                                                                <input
                                                                                                                              type="email"
                                                                                                                                            id="email"
                                                                                                                                                          value={email}
                                                                                                                                                                        onChange={(e) => setEmail(e.target.value)}
                                                                                                                                                                                      required
                                                                                                                                                                                                  />
                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                      <div className="form-group">
                                                                                                                                                                                                                                  <label htmlFor="password">Password</label>
                                                                                                                                                                                                                                              <input
                                                                                                                                                                                                                                                            type="password"
                                                                                                                                                                                                                                                                          id="password"
                                                                                                                                                                                                                                                                                        value={password}
                                                                                                                                                                                                                                                                                                      onChange={(e) => setPassword(e.target.value)}
                                                                                                                                                                                                                                                                                                                    required
                                                                                                                                                                                                                                                                                                                                />
                                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                                                    <button type="submit" className="login-button">Sign In</button>
                                                                                                                                                                                                                                                                                                                                                            </form>
                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                                                                                        };

                                                                                                                                                                                                                                                                                                                                                                        export default Login;