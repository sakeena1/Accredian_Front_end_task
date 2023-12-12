import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import '../styles/signupStyles.css'; // Adjust the path based on your folder structure

const SignUpForm = () => {
  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSignupData({ ...signupData, [name]: value });
    // Reset error for the field being modified
    setErrors({ ...errors, [name]: false });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let formIsValid = true;

    // Form validation logic
    if (!signupData.username.trim()) {
      setErrors({ ...errors, username: true });
      formIsValid = false;
    }
    if (!signupData.email.trim()) {
      setErrors({ ...errors, email: true });
      formIsValid = false;
    }
    if (!signupData.password.trim()) {
      setErrors({ ...errors, password: true });
      formIsValid = false;
    }
    if (signupData.password !== signupData.confirmPassword) {
      setErrors({ ...errors, confirmPassword: true });
      formIsValid = false;
    }

    // If form is valid, proceed
    if (formIsValid) {
      console.log('Signup data:', signupData); // Log form data to console
      // You can proceed with further actions like sending data to backend
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="signup-form-container">
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextField
            label="Username"
            variant="outlined"
            name="username"
            value={signupData.username}
            onChange={handleInputChange}
            error={errors.username}
            helperText={errors.username ? 'Field is required' : ''}
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            name="email"
            value={signupData.email}
            onChange={handleInputChange}
            error={errors.email}
            helperText={errors.email ? 'Field is required' : ''}
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            name="password"
            value={signupData.password}
            onChange={handleInputChange}
            error={errors.password}
            helperText={errors.password ? 'Field is required' : ''}
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            name="confirmPassword"
            value={signupData.confirmPassword}
            onChange={handleInputChange}
            error={errors.confirmPassword}
            helperText={errors.confirmPassword ? 'Passwords do not match' : ''}
            fullWidth
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" type="submit">
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SignUpForm;
