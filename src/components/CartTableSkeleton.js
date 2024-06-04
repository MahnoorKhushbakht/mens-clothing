'use client';
import React, { useState, useEffect } from 'react';
import { getCartData, getId } from '@/lib/categories';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  ChakraProvider,Button
} from '@chakra-ui/react';



export default function CartTableSkeleton() {
  
  return (
    <ChakraProvider>
    <TableContainer className='animate-pulse'>
      <Table variant='striped' colorScheme='black'>
        <TableCaption>All Right Reserved</TableCaption>
        <Thead>
          <Tr>
            <Th>Product Name</Th>
            <Th>Quantity</Th>
            <Th>Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            [1, 2].map((cart, index) => (
              <Tr key={index}>
                <Td>--</Td>
                <Td>--</Td>
                <Td>
                  <Button className='bg-red-200' onClick={() => handleDelete(cart._id)}>
                    Delete
                  </Button>
                </Td>
              </Tr>
              
            ))
 }
        </Tbody>
        
      </Table>
    </TableContainer>

    </ChakraProvider>
  );
}
