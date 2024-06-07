'use client';
import React, { useState, useEffect } from 'react';
import { getCartData } from '@/lib/categories';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  ChakraProvider,
  Button,
  Skeleton,
  Stack
} from '@chakra-ui/react';
import CartTableSkeleton from './CartTableSkeleton';

export default function CartTable({ userId }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const result = await getCartData();

      if (result && result.data) {
        setData(result.data);
      } else {
        setData([]);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  const handleDelete = async (cartId) => {
    try {
      const response = await fetch(`/api/cart?id=${cartId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete cart item');
      }

      const result = await response.json();
      console.log('Delete Result:', result);

      setData(data.filter(cart => cart._id !== cartId));
    } catch (error) {
      console.error('Error deleting cart item:', error);
    }
  };

  const filteredData = data.filter(cart => cart.user_id === userId);

  return (
    <ChakraProvider>
      {loading ? (
        <CartTableSkeleton/>
      ) : (
        <Stack spacing={4}  w="100%" maxW={{ base: '100%', sm: '400px', md: '600px', lg: '800px' }} mx="auto">
          <Table variant='striped' colorScheme='black'>
            <Thead>
              <Tr>
                <Th>Product Name</Th>
                <Th>Quantity</Th>
                <Th>Price</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredData.length > 0 ? (
                filteredData.map((cart, index) => (
                  <Tr key={index}>
                    <Td>{cart.product}</Td>
                    <Td>{cart.quantity}</Td>
                    <Td>{`${cart.price} Rs`}</Td>
                    <Td>
                      <Button colorScheme='red' onClick={() => handleDelete(cart._id)}>
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                ))
              ) : (
                <Tr>
                  <Td colSpan="4">No data available</Td>
                </Tr>
              )}
            </Tbody>
          </Table>
          <Button
        type="submit"
        className="bg-gray-800 rounded px-2 py-1 self-center text-gray-300 w-32 hover:bg-gray-900 disabled:bg-slate-500 disabled:cursor-not-allowed"
        isDisabled={filteredData.length === 0}
      >
        CheckOut
      </Button>
        </Stack>
      )}
    </ChakraProvider>
  );
}
