'use client';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import React, { useState, useRef } from 'react';
import Rating from '@mui/material/Rating';
import CommentIcon from '@mui/icons-material/Comment';
import RefreshBtn from '@/components/RefreshBtn';

export default function CommentForm({ slug, userName }) {
    const [formData, setFormData] = useState({
        name: userName,
        comment: '',
        rating: 0,
        slug: slug,
      });
      const [alert, setAlert] = useState({ message: '', type: '' });
      const alertRef = useRef(null);
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: name === 'rating' ? parseInt(value) : value
        }));
      };
    
      const apiUrl = process.env.NEXT_PUBLIC_API_URL_Posts;
    
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
            setAlert({ message: 'Data saved successfully!', type: 'success' });
            setFormData({ name: userName, comment: '', rating: 0, slug: slug });
          } else {
            throw new Error('Server responded with an error');
          }
        } catch (error) {
          setAlert({ message: 'Something went wrong! Please try again later.', type: 'error' });
        }
    
        if (alertRef.current) {
          clearTimeout(alertRef.current);
        }
    
        alertRef.current = setTimeout(() => {
          setAlert({ message: '', type: '' });
        }, 3000);
      };
    
  return (
    <div>
      {alert.message && (
        <Alert
          severity={alert.type}
          onClose={() => setAlert({ message: '', type: '' })}
          sx={{ mb: 2 }}
        >
          <AlertTitle>{alert.type === 'success' ? 'Success' : 'Error'}</AlertTitle>
          {alert.message}
        </Alert>
      )}
    <form onSubmit={handleSubmit}
      className=" flex flex-col w-full gap-2 bg-gray-900
                 max-w-screen-sm mt-3 px-3 py-3 rounded">
    <div className='flex '>
    <label htmlFor="ratingField" className="shrink-0 w-32 text-gray-300 ">
        Rating
        </label>
            <Rating
              size='large'
              sx={{
                '& .MuiRating-iconFilled': {
                  color: 'yellow',
                },
                '& .MuiRating-iconEmpty': {
                  color: 'white',
                },
              }}
              id="ratingField"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              required
              marginTop='2'
            />
          </div> 
      <div className="flex">
        {/* <label htmlFor="nameField" className="shrink-0 w-32">
          Name
        </label> */}
        <input id="nameField" name="name" type="hidden" value={formData.name} onChange={handleChange}
          className="border px-2 py-1 text-gray-300 rounded w-full"
        />
      </div>
      <div className="flex">
        <label htmlFor="commentField" className="shrink-0 w-32 text-gray-300 ">
          Comment
        </label>
        <input id="commentField" name="comment" type="text" value={formData.comment} onChange={handleChange} required multiline
          className="border-none px-2  text-gray-300 rounded py-1 bg-gray-800 w-full" placeholder='Enter Comment'
        />
      </div>
      <button 
  type="submit" 
  className="bg-inherit rounded px-2 py-1 mt-3 outline-gray-300 outline outline-offset-1
             text-gray-300 w-32 
             disabled:bg-slate-500 disabled:cursor-not-allowed"
>
  Comment <CommentIcon />
</button>

    </form>
    </div>
  );
}