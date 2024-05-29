'use client'
import React, { useState, useRef } from 'react';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button, Box } from '@mui/material';
import { HStack, VStack } from '@chakra-ui/react';
import RefreshBtn from '@/components/RefreshBtn';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CommentIcon from '@mui/icons-material/Comment';

function Form({ slug, userName}) {
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
        setFormData({ name: userName, comment: '', rating: 0, slug: slug});
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
      <form onSubmit={handleSubmit}>
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
        </VStack>
        <HStack spacing={4}>
          <TextField type="hidden" name="slug" value={slug} />
          
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            type="text"
            name="name"
            size="small"
            value={userName}
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
        <HStack spacing={4} className='mt-2 mb-2'>
          <Button type='submit' color='success' variant="contained" endIcon={<CommentIcon />}>
            Comment
          </Button>
        </HStack>
      </form>
      <RefreshBtn />
    </div>
  );
}

export default Form;
