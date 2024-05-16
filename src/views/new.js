'use client'
import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button, Box } from '@mui/material';
import { HStack, VStack } from '@chakra-ui/react';

function Form({slug}) {

  const [formData, setFormData] = useState({
    name: '',
    comment: '',
    rating: 0,
    slug: slug // Ensure that slug is set correctly
});

console.log('form',formData.slug)
console.log('details',slug)
const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: name === 'rating' ? parseInt(value) : value,
    slug: slug // Include the slug value
  }));
};

  const apiUrl = process.env.NEXT_PUBLIC_API_URL_Posts;
console.log('slug',slug)
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
        alert('Data saved successfully!');
       
        setFormData({ name: '', comment: '', rating: 0 });
      } else {
        throw new Error('Server responded with an error');
      }
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Something went wrong! Please try again later.');
    }
  };

  return (
 
    <form onSubmit={handleSubmit}>
    <HStack spacing={2} >
    <TextField type="string" name="slug" value={slug} />
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        size="small"
        value={formData.name}
        onChange={handleChange}
        required
        sx={{
          '& .MuiOutlinedInput-root': {
            color: 'white', 
           
          },
          '& .MuiOutlinedInput-input': {
            color: 'white', 
          },
          '& .MuiInputLabel-root': {
            color: 'white',
          },
          '& .MuiFormLabel-root.Mui-focused': {
            color: 'white', 
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white', 
          },
        }}
      />
      <TextField
        id="comment"
        label="Comment"
        variant="outlined"
        type="text"
        size="small"
        name="comment"
        value={formData.comment}
        onChange={handleChange}
        required
        multiline
        maxRows={4}
        sx={{
          '& .MuiOutlinedInput-root': {
            color: 'white',
           
          },
          '& .MuiOutlinedInput-input': {
            color: 'white',
          },
          '& .MuiInputLabel-root': {
            color: 'white', 
          },
          '& .MuiFormLabel-root.Mui-focused': {
            color: 'white', 
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white', 
          },
        }}
      />


              </HStack>
               <VStack display='flex' flexDirection='column' justifyContent='flex-start' alignItems='flex-start'>
<Box>
    <Typography sx={{ color: 'white' }} component="legend">Rating</Typography>
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
        id="rating"
        name="rating"
        value={formData.rating}
        onChange={handleChange}
        required
        margintop='2'
    />
</Box>
<Button type="submit" variant="contained" color="success">
    Submit
</Button>
</VStack>


  </form>
  );
}

export default Form;
