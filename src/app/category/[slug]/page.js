
import '@/app/css/style.css';
import { getCategories, getCategoriesSlug, getposts,getSlugs } from '@/lib/categories';
import { parseHTMLContent } from '@/lib/content';
import { Stack, Box } from '@chakra-ui/react';
import CardContent from '@mui/material/CardContent';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import CardData from '@/components/CardContent';
import { notFound } from 'next/navigation';
import Image from 'next/image';



export async function generateStaticParams() {
  const slug = await getCategoriesSlug()
  console.log('[ReviewPage] generateStaticParams:', slug);
  return slug;
}

export default async function ReviewPage({ params: { slug } }) {
  
        const posts = await getCategories(slug);
     

if(!posts){
  notFound()
}

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-950 min-h-screen flex flex-col flex-wrap justify-center items-center">

              {((posts.length === 0)) ? notFound()
        : 
        <Stack
        spacing={10}
        justify="center"
        align="center"
        p={4}
        className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'
        wrap="wrap"
      >
        {posts.map((post) => (
          <Box key={post.id} flex="1" minWidth="300px" maxWidth="400px" className='hover:shadow-2xl' >
            {parseHTMLContent(post.content.rendered).map((content, index) => (
              <CardData key={index}>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className='flex justify-between items-center flex-row space-x-4'>
                  <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
  <Link href={`${process.env.NEXT_PUBLIC_API_URL_Details}/${post.slug}`} passHref>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-gray-500 hover:text-white w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  </Link>

                  </Typography>
                  <div className='flex justify-center m-auto p-1 items-center'>
  <img
    src={content.imageUrl}
    width={150}
    height={150}
    alt='details image'
  />
</div>

                  <Typography variant="body2">
                    {content.summary}
                  </Typography>
                  {/* <Typography variant="body2">
                    <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                  </Typography> */}
                  {/* <Button style={{ color: '#d1d5db' }} href={`http://localhost:3000/details/${post.slug}`} size="small">Learn More</Button> */}
                  {/* <button  href={`${process.env.NEXT_PUBLIC_API_URL_Posts}${post.slug}`} 
        className="mt-2
                   text-gray-800 bg-gray-100 p-2 rounded
                   disabled:bg-slate-500 disabled:cursor-not-allowed">
        Learn More
      </button> */}
      
                </CardContent>
               
               
              </CardData>
            ))}
          </Box>
        ))}
      </Stack>
}
    </div>
  );
}


