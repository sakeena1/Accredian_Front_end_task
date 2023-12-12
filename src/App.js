import React, { useState } from 'react';
import LoginForm from './components/Login'; // Import LoginForm component
import SignUpForm from './components/signup'; // Import SignUpForm component

function App() {
  const [showLoginForm, setShowLoginForm] = useState(true); // State to manage which form to show

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm); // Toggle between login and sign-up forms
  };

  return (
    <div className="App">
      {showLoginForm ? (
        <>
          <h1>Login</h1>
          <LoginForm />
          <p>
            Don't have an account?{' '}
            <span style={{ cursor: 'pointer', color: 'blue' }} onClick={toggleForm}>
              Sign Up
            </span>
          </p>
        </>
      ) : (
        <>
          <h1>Sign Up</h1>
          <SignUpForm />
          <p>
            Already have an account?{' '}
            <span style={{ cursor: 'pointer', color: 'blue' }} onClick={toggleForm}>
              Login
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default App;
