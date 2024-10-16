import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Define the form validation schema using Zod
const formSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters long",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // Handle form submission
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    console.log(data);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

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
        padding: '60px',  // Adjusted for more space
        borderRadius: '12px', 
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', 
        maxWidth: '600px',  // Increased width
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
          Create a New Account
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username" style={{ 
            display: 'block', 
            marginBottom: '0.5rem', 
            fontWeight: '500', 
            color: '#333' 
          }}>
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            {...register("username")}
            style={{ 
              width: '100%', 
              padding: '12px', 
              marginBottom: '1.5rem', 
              border: '1px solid #ddd', 
              borderRadius: '6px', 
              fontSize: '1rem' 
            }}
          />
          {errors.username && <p style={{ color: 'red' }}>{errors.username.message}</p>}

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
            placeholder="name@example.com"
            {...register("email")}
            style={{ 
              width: '100%', 
              padding: '12px', 
              marginBottom: '1.5rem', 
              border: '1px solid #ddd', 
              borderRadius: '6px', 
              fontSize: '1rem' 
            }}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

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
            {...register("password")}
            style={{ 
              width: '100%', 
              padding: '12px', 
              marginBottom: '1.5rem', 
              border: '1px solid #ddd', 
              borderRadius: '6px', 
              fontSize: '1rem' 
            }}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}

          <label htmlFor="confirmPassword" style={{ 
            display: 'block', 
            marginTop: '1rem', 
            marginBottom: '0.5rem', 
            fontWeight: '500', 
            color: '#333' 
          }}>
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword")}
            style={{ 
              width: '100%', 
              padding: '12px', 
              marginBottom: '1.5rem', 
              border: '1px solid #ddd', 
              borderRadius: '6px', 
              fontSize: '1rem' 
            }}
          />
          {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword.message}</p>}

          <button type="submit" style={{ 
            width: '100%', 
            padding: '12px', 
            marginTop: '1.5rem', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '6px', 
            fontSize: '1.2rem', 
            cursor: 'pointer' 
          }} disabled={isLoading}>
            {isLoading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <p style={{ 
          textAlign: 'center', 
          marginTop: '1.5rem', 
          fontSize: '1rem' 
        }}>
          Already have an account?{' '}
          <a href="#" style={{ 
            fontWeight: '700', 
            color: '#007bff' 
          }} onClick={(event) => event.preventDefault()}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
