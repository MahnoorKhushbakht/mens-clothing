'use client';
import { useState } from 'react';
import { Suspense } from 'react';
import { useRouter } from 'next/navigation';
import ShareLinkButton from './ShareLinkButton';

export default function Cart({ itemName}) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    product: itemName,
    quantity: 1     
  });
// console.log('user id',{ userId })
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === 'quantity' ? parseInt(value, 10) : value
    }));
  };

  const apiUrl = process.env.NEXT_PUBLIC_API_URL_Cart;

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
        console.log('Data saved', formData);
        router.push('/cart');
      } else {
        throw new Error('Server responded with an error');
      }
    } catch (error) {
      console.log('Error', error);
    }
  };


  return (
    <div className="backdrop-opacity-10 text-white flex justify-start">
        <div className="relative h-48">
  <Suspense fallback={null}>
      <form className="flex flex-col gap-2 mt-3 w-2/3 py-3 items-start max-w-md" onSubmit={handleSubmit}>
        <div className="flex w-full">
          <label htmlFor="productField" className="shrink-0 w-32">
            Product Name
          </label>
          <input
            id="productField"
            name="product"
            type="text"
            onChange={handleChange}
            className="border px-2 py-1 text-black rounded w-full"
            value={formData.product}
          />
                    {/* <input
           
            type="text"
           
            className="border px-2 py-1 text-black rounded w-full"
            value={userId}
          /> */}
        </div>
        <div className="flex w-full">
          <label htmlFor="quantityField" className="shrink-0 w-32">
            Quantity
          </label>
          <input
            id="quantityField"
            name="quantity"
            type="number"
            onChange={handleChange}
            value={formData.quantity}
            className="border px-2 text-black py-1 rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-gray-400 rounded py-1 text-gray-800 w-32 hover:bg-gray-200 disabled:bg-slate-500 disabled:cursor-not-allowed"
        >
          Add to Cart
        </button>
        <ShareLinkButton/>
      </form>
      </Suspense>
      </div>
    </div>
  );
}
