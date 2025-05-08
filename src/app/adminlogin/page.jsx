'use client';

import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false); // State for loading
  const [loginLoading, setloginLoading] = useState(true); // State for loading


  useEffect(() => {
    async function fetchData() {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        try {
          await axios.post('https://mahamaya-law.vercel.app/user/verifytoken', {}, {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          });
          router.push('/adminblog');
          setloginLoading(false); // Stop loading after verifying token
        } catch (error) {
          router.push('/adminlogin');
          console.error('Token verification failed:', error);
          setloginLoading(false); // Stop loading if token verification fails
        }
      } else {
        router.push('/adminlogin');
        setloginLoading(false); // Stop loading if no token is found
      }
    }
    fetchData();
  }, [router]);

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (values) => {
      setLoading(true); // Start loading when form is submitted

      try {
        const result = await axios.post('https://mahamaya-law.vercel.app/user/authenticate', values);
        toast.success('Login successful');
        localStorage.setItem('token', result.data.token); // Store token in localStorage
        router.push('/adminblog'); // Redirect to another page
      } catch (err) {
        toast.error('Login failed. Please check your credentials.');
        console.log(err);
      } finally {
        setLoading(false); // Stop loading after response
      }
    }
  });

  if (loginLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="p-6 bg-white border border-blue-300 text-blue-800 rounded-md shadow-lg animate-pulse">
          <h2 className="text-2xl font-semibold mb-2">Loading...</h2>
          {/* <p className="text-lg">Fetching blog details...</p> */}
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-center text-2xl font-bold mb-4">Admin Panel</h1>

        <form onSubmit={loginForm.handleSubmit}>
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            onChange={loginForm.handleChange}
            id='email'
            value={loginForm.values.email}
            className='w-full border border-gray-300 bg-gray-50 p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
            type="email"
            placeholder="Enter your email"
          />

          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            onChange={loginForm.handleChange}
            id='password'
            value={loginForm.values.password}
            className='w-full border border-gray-300 bg-gray-50 p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
            type="password"
            placeholder="Enter your password"
          />

          <button
            type='submit'
            disabled={loading} // Disable button while loading
            className={`w-full py-2 mt-4 text-white ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} rounded-lg focus:outline-none transition-colors duration-200`}
          >
            {loading ? 'Logging in...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
