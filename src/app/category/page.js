import Link from 'next/link';
import Paper from '@mui/material/Paper';
import Layout from '@/components/Layout';

export default function Category() {
  const category = [
    { slug: 'formal-wear', name: 'Formal Wear' },
    { slug: 'casual-wear', name: 'Casual Wear' },
    { slug: 'accessories', name: 'Accessories' },
  ];

  return (
    <Layout>
      <h1 className='mb-4 text-3xl font-bold'>Categories!!</h1>
      <p className="text-center italic mb-6 text-lg">
        Explore now to elevate your wardrobe with the latest trends and timeless classics!
      </p>
      <ul className='grid grid-cols-2 gap-4'>
        {category.map((categoryItem, index) => (
          <li key={index}>
            <Link href={`/category/${categoryItem.slug}`} passHref>
              <Paper
                className='drop-shadow-sm w-40 h-28 flex items-center justify-center bg-gray-200 text-gray-800 hover:bg-gray-400 transform hover:scale-105 transition-transform duration-300 rounded-lg p-4'
                elevation={5}
              >
                {categoryItem.name}
              </Paper>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
