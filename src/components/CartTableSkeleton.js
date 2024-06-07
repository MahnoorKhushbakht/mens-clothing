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
  ChakraProvider,Skeleton
} from '@chakra-ui/react';



export default function CartTableSkeleton() {
  
  return (
    <ChakraProvider>
    <TableContainer className='animate-pulse'>
      <Table variant='striped' colorScheme='black'>
        <Thead>
          <Tr>
            <Th>Product Name</Th>
            <Th>Quantity</Th>
            <Th>Price</Th>
          </Tr>
        </Thead>
        <Tbody>
        {[1, 2].map((cart, index) => (
              <Tr key={index}>
                <Td>
                  <Skeleton height="20px" />
                </Td>
                <Td>
                  <Skeleton height="20px" />
                </Td>
                <Td>
                  <Skeleton height="20px" />
                </Td>
              </Tr>
            ))}
        </Tbody>
        
      </Table>
    </TableContainer>

    </ChakraProvider>
  );
}
