'use client';

import React, { useState } from 'react';


export default function SignUpForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
      });

      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name] : value,
        }));
      };

      const apiUrl = process.env.NEXT_PUBLIC_API_URL_Sign;

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
           
           console.log('data saved',formData)
          
        
          } else {
            throw new Error('Server responded with an error');
          }
        } catch (error) {
          console.log('error',error)
        }
    
       
      };
  return (
    <form onSubmit={handleSubmit}
      className="border flex flex-col gap-2
                 max-w-screen-sm mt-3 px-3 py-3 rounded">
          <div className="flex">
        <label htmlFor="nameField" className="shrink-0 w-32">
          Name
        </label>
        <input id="nameField" name="name" type="string"
          className="border px-2 py-1 rounded w-full" value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="flex">
        <label htmlFor="emailField" className="shrink-0 w-32">
          Email
        </label>
        <input id="emailField" name="email" type="email"
          className="border px-2 py-1 rounded w-full" value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="flex">
        <label htmlFor="passwordField" className="shrink-0 w-32">
          Password
        </label>
        <input id="passwordField" name="password" type="password"
          className="border px-2 py-1 rounded w-full" value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit"
        className="bg-gray-400 rounded px-2 py-1 self-center
                   text-gray-800 w-32 hover:bg-gray-200
                   disabled:bg-slate-500 disabled:cursor-not-allowed">
        Sign Up
      </button>
    </form>
  );
}