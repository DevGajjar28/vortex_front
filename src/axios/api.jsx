// api.js

import axios from 'axios';

// Add a request interceptor for POST requests
axios.interceptors.request.use(
  (config) => {
    // Modify config for POST requests here if needed
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Add a response interceptor for POST requests
axios.interceptors.response.use(
  (response) => {
    // Handle successful responses for POST requests
    return response;
  },
  (error) => {
    // Handle response errors for POST requests
    return Promise.reject(error);
  }
);

// Function to handle the registration form submission
export const handleRegistration = async (formData) => {
  try {
    // Make a POST request using axios
    const response = await axios.post('http://localhost:8000/api/register/', formData);
    console.log("Registration successful:", response.data);
    return response.data; // Return data if needed
  } catch (error) {
    console.error("Registration failed:", error);
    throw error; // Throw error to handle in the calling function
  }
};

// Function to handle the login form submission
export const handleLogin = async (formData) => {
  try {
    // Make a POST request using axios
    const response = await axios.post('http://localhost:8000/api/login/', formData);
    console.log("Login successful:", response.data);
    return response.data; // Return data if needed
  } catch (error) {
    console.error("Login failed:", error);
    throw error; // Throw error to handle in the calling function
  }
};
