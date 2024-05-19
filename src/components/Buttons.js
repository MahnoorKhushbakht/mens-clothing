'use client'
import { Wrap, WrapItem, Button, ChakraProvider } from '@chakra-ui/react';
import React from 'react';

export default function Buttons() {
  const handleCallUsClick = () => {
    window.location.href = 'tel:+923483715545';
  };

  const handleContactUsClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ChakraProvider>
    <Wrap spacing={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <WrapItem>
        <Button
        className='transition duration-700 ease-in-out'
          size='lg'
          color='white'
          backgroundColor='#1f2937'
          variant='solid'
          onClick={handleCallUsClick}
        >
          Call Us
        </Button>
      </WrapItem>
      <WrapItem>
        <Button
         className='transition duration-700 ease-in-out'
          size='lg'
          color='white'
          backgroundColor='#1f2937'
          variant='solid'
          onClick={handleContactUsClick}
        >
          Contact Us
        </Button>
      </WrapItem>
      </Wrap>
      </ChakraProvider>
  );
}

