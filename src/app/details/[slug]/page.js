import { getPosts } from '@/lib/categories';
import { parseHTMLContent } from '@/lib/content';
import Form from '@/views/new';
import CommentList from '@/components/CommentList';
import ImageZoom from '@/components/ImageZoom';
import { Skeleton } from '@mui/material';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link'; 
import { getUserFromSession } from '@/lib/auth';
import Cart from '@/components/Cart';

export default async function Details({ params: { slug } }) {
  const user = await getUserFromSession()
  const posts = await getPosts(slug);
// if (!posts){
//   notFound()
// }
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-950 min-h-screen">
      {((posts.length === 0)) ? notFound()
        : 
        <div className="flex flex-col p-8">
        {posts.map((post) => (
          <div key={post.id}>
            {parseHTMLContent(post.content.rendered).map((content, index) => (
              <div key={index} className="flex flex-col md:flex-row  justify-center items-center">
                <ImageZoom>
                <img
                  boxsize={{ base:'80%',md:'40%'}}
                  margintop={{ base:'10px',md:'0px'}}
                  src={content.imageUrl} 
                  alt='Dan Abramov'
                  className='drop-shadow-2xl '
                />
                </ImageZoom>
                <div className="max-w-full w-full md:w-60% ml-0 md:ml-8 mt-4 md:mt-0">
                  <h2 className="text-lg font-bold text-white uppercase">{post.title.rendered}</h2>
                  <p className="text-white">{content.summary}</p>
                  <div className="text-white" dangerouslySetInnerHTML={{ __html: content.table }} />
                  {/* <ImageShow feature={content.feature} /> */}
                  <Cart itemName={post.title.rendered} />
                  
                </div>
              </div>
            ))}
          </div>
        ))}
        <div className="mt-6">
          <h2 className="text-lg font-bold text-white uppercase">Leave a Review</h2>
          {user ? (
          <Form slug={slug} userName={user.name} />
        ) : (
          <div className="border bg-gray-700 mt-3 px-3 py-3 rounded">
            <Link href="/sign-in" className="text-gray-200 hover:underline">
              Sign in
            </Link> to have your say!
          </div>
        )}
    <div className="relative h-48">
      <Suspense fallback={null}>
        <CommentList slug={slug} />
      </Suspense>
    </div>
        
        </div>
        </div>
}

   
    </div>
  );
}

