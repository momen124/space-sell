// /auth/Login.tsx

import React from 'react';

export default function Login() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh', 
      backgroundColor: '#f0f0f0' 
    }}>
      <div style={{ 
        backgroundColor: 'white', 
        padding: '40px', 
        borderRadius: '12px', 
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', 
        maxWidth: '400px', 
        width: '100%' 
      }}>
        <h1 style={{ 
          textAlign: 'center', 
          marginTop: '0', 
          marginBottom: '40px', 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          color: '#000' 
        }}>
          Welcome back to Space Shell!
        </h1>

        <label htmlFor="email" style={{ 
          display: 'block', 
          marginBottom: '0.5rem', 
          fontWeight: '500', 
          color: '#333' 
        }}>
          Email address
        </label>
        <input
          id="email"
          type="email"
          placeholder="hello@gmail.com"
          style={{ 
            width: '100%', 
            padding: '12px', 
            marginBottom: '1.5rem', 
            border: '1px solid #ddd', 
            borderRadius: '6px', 
            fontSize: '1rem' 
          }}
        />

        <label htmlFor="password" style={{ 
          display: 'block', 
          marginTop: '1rem', 
          marginBottom: '0.5rem', 
          fontWeight: '500', 
          color: '#333' 
        }}>
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Your password"
          style={{ 
            width: '100%', 
            padding: '12px', 
            marginBottom: '1.5rem', 
            border: '1px solid #ddd', 
            borderRadius: '6px', 
            fontSize: '1rem' 
          }}
        />

        <div style={{ 
          marginTop: '1.5rem', 
          display: 'flex', 
          alignItems: 'center' 
        }}>
          <input type="checkbox" id="keep-logged-in" />
          <label htmlFor="keep-logged-in" style={{ 
            marginLeft: '0.5rem', 
            fontWeight: '400', 
            color: '#333' 
          }}>
            Keep me logged in
          </label>
        </div>

        <button style={{ 
          width: '100%', 
          padding: '12px', 
          marginTop: '1.5rem', 
          backgroundColor: '#007bff', 
          color: 'white', 
          border: 'none', 
          borderRadius: '6px', 
          fontSize: '1.2rem', 
          cursor: 'pointer' 
        }}>
          Login
        </button>

        <p style={{ 
          textAlign: 'center', 
          marginTop: '1.5rem', 
          fontSize: '1rem' 
        }}>
          Don&apos;t have an account?{' '}
          <a href="#" style={{ 
            fontWeight: '700', 
            color: '#007bff' 
          }} onClick={(event) => event.preventDefault()}>
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
