import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import '../styles/loginStyles.css'; // Adjust the path based on your folder structure
//sam\src\styles\loginStyles.css
const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    usernameOrEmail: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    usernameOrEmail: false,
    password: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Form validation logic
    if (!loginData.usernameOrEmail.trim()) {
      setErrors({ ...errors, usernameOrEmail: true });
      return;
    }
    if (!loginData.password.trim()) {
      setErrors({ ...errors, password: true });
      return;
    }
    // Further actions on successful submission
    console.log('Login data:', loginData);
  };
  return (
    <form onSubmit={handleFormSubmit} className="login-form-container">
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextField
            label="Username or Email"
            variant="outlined"
            name="usernameOrEmail"
            value={loginData.usernameOrEmail}
            onChange={handleInputChange}
            error={errors.usernameOrEmail}
            helperText={errors.usernameOrEmail ? 'Field is required' : ''}
            fullWidth
            className="username-password-field" // Apply CSS class
          />

        </Grid>
      </Grid>  
        <Grid item>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
            error={errors.password}
            helperText={errors.password ? 'Field is required' : ''}
            fullWidth
            className="username-password-field" // Apply CSS class
          />
        </Grid>
      
      <Grid item>
        <Button variant="contained" color="primary" type="submit" className="submit-button">
          Login
        </Button>
      </Grid>
    </form>
  );
};

export default LoginForm;

