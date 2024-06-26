import { getPosts,getSlugs } from '@/lib/categories';
import { parseHTMLContent } from '@/lib/content';
import CommentList from '@/components/CommentList';
import ImageZoom from '@/components/ImageZoom';
import Image from 'next/image';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link'; 
import { getUserFromSession } from '@/lib/auth';
import Cart from '@/components/Cart';
import CommentListSkeleton from '@/components/CommentListSkeleton';
import ShareLinkButton from '@/components/ShareLinkButton';
import CommentForm from '@/views/CommentForm';
import SkeletonSuspense from '@/components/Skeleton';
import SpecsBtn from '@/components/SpecsBtn';


// export async function generateStaticParams() {
//   const slug = await getSlugs();
//   console.log('[ReviewPage] generateStaticParams:', slug);
//   return slug;
// }

export default async function Details({ params: { slug } }) {
  let user = null;
  let posts = [];

  try {
    user = await getUserFromSession();
  } catch (error) {
    console.error("Error fetching user:", error);
  }

  try {
    posts = await getPosts(slug);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  if (!posts || posts.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen  bg-gradient-to-r from-gray-800 to-gray-950">
      <div className="flex flex-col p-2 md:p-8  md:ml-20 md:mr-20 ml-5 mr-5">
        {posts.map((post) => (
          <div key={post.id}>
            {parseHTMLContent(post.content.rendered).map((content, index) => (
              <div key={index} className="flex flex-col md:flex-row justify-center items-center">
                <ImageZoom>
                  <div className="flex flex-col items-center w-full">
           
                    <Image
        src={content.imageUrl}
        alt="Product Detail"
        width={300}
        height={300}
    
                     
        className="object-cover  mt-10"
        quality={100} // Set quality to 100 for best quality
      />
                
                  </div>
                </ImageZoom>
                <div className="w-full md:w-3/5 ml-0 md:ml-8 mt-4 md:mt-0">
                  <div className='flex flex-row'>
                    <h2 className="text-lg md:text-xl font-bold text-white uppercase">{post.title.rendered}</h2>
                    <ShareLinkButton/>
                  </div>
                  <p className="text-white w-full md:w-3/4">{content.summary}</p>
                  <SpecsBtn>
                  <div 
                    className="text-white bg-gray-900 rounded p-2 w-auto border border-x-white" 
                    style={{ display: 'inline-block' }}
                  >
                    <div dangerouslySetInnerHTML={{ __html: content.table }} />
                  </div>
                  </SpecsBtn>
                  <p className="bg-gray-600 text-white p-2 rounded w-32 md:w-1/5 flex items-center justify-center text-lg shadow-lg">
                    {`Price: ${content.price}`} Rs
                  </p>
                  {user ? (
                  <Cart itemName={post.title.rendered} price={content.price} />
                ) : (
                  <div className="border bg-gray-700 mt-3 px-3 py-3 rounded">
                    <Link href="/sign-in" className="text-gray-200 hover:underline">
                      Sign in
                    </Link> to add Items
                  </div>
                )}
                </div>
              </div>
            ))}
          </div>
        ))}
        <div className="mt-6">
          <h2 className="text-lg font-bold text-white uppercase">Leave a Review</h2>
          {user ? (
            <CommentForm slug={slug} userName={user.name} />
          ) : (
            <div className="border bg-gray-700 mt-3 px-3 py-3 rounded">
              <Link href="/sign-in" className="text-gray-200 hover:underline">
                Sign in
              </Link> to have your say!
            </div>
          )}
          <Suspense fallback={<CommentListSkeleton/>}>
            <CommentList slug={slug} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
