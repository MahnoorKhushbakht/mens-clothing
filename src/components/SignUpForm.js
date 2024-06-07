'use client';

import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function SignUpForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const apiUrl = process.env.NEXT_PUBLIC_API_URL_Sign;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);
        setError(false);

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                });
                console.log('data saved', formData);
            } else {
                setError(true);
                throw new Error('Server responded with an error');
            }
        } catch (error) {
            setError(true);
            console.log('error', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {success && (
                <Alert variant="filled" onClose={() => setSuccess(false)} className='flex justify-center' severity="success"  style={{ width: '50%', position: 'fixed', top: 0, left: '25%', right: '25%', zIndex: 1000 }}>
                <AlertTitle>Success</AlertTitle>
                    Welcome
                </Alert>
            )}
            {error && (
                <Alert variant="filled" onClose={() => setError(false)} className='flex justify-center' severity="error"  style={{ width: '50%', position: 'fixed', top: 0, left: '25%', right: '25%', zIndex: 1000 }}>
                    <AlertTitle>Error</AlertTitle>
                    Something Went Wrong
                </Alert>
            )}
            <form onSubmit={handleSubmit}
                className="flex flex-col gap-2  m-5 bg-gray-900
                w-full mt-3 px-3 py-4 rounded">
                <div className="flex">
                    <label htmlFor="nameField" className="shrink-1 mr-2">
                        Name
                    </label>
                    <input id="nameField" name="name" type="text" placeholder='Name'
          className="border px-2 py-1 text-gray-400 bg-gray-300  w-full" value={formData.name}
                        onChange={handleChange} disabled={loading} required
                    />
                </div>
                <div className="flex">
                    <label htmlFor="emailField" className="shrink-0 ">
                        Email
                    </label>
                    <input id="emailField" name="email" type="email"placeholder='user@example.com'
          className="border px-2 py-1 text-gray-400 bg-gray-300  w-full" value={formData.email}
                        onChange={handleChange} disabled={loading} required
                    />
                </div>
                <div className="flex">
                    <label htmlFor="passwordField" className="shrink-1 mr-2">
                        Password
                    </label>
                    <input id="passwordField" name="password" type="password"placeholder='Password'
          className="border px-2 py-1 text-gray-400 bg-gray-300  w-full" value={formData.password}
                        onChange={handleChange} disabled={loading} required
                    />
                </div>
                <button type="submit"
                    className="bg-gray-400 rounded px-2 py-1 self-center text-gray-800 w-32 hover:bg-gray-200
                               disabled:bg-slate-500 disabled:cursor-not-allowed"
                    disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
}
