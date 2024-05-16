
import '@/app/css/style.css';
import { getCategories, getposts,getSlugs } from '@/lib/categories';
import { parseHTMLContent } from '@/lib/content';
import { Stack, Box } from '@chakra-ui/react';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardData from '@/components/CardContent';



export async function generateStaticParams() {
  const slug = await getSlugs();
  console.log('[ReviewPage] generateStaticParams:', slug);
  return slug;
}

export default async function ReviewPage({ params: { slug } }) {
  
        const posts = await getCategories(slug);
     



  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-950 min-h-screen flex flex-col justify-center items-center">
      <Stack
        spacing={10}
        justify="center"
        align="center"
        p={4}
        direction={{ base: 'column', md: 'row' }}
        wrap="wrap"
      >
        {posts.map((post) => (
          <Box key={post.id} flex="1" minWidth="300px" maxWidth="400px" >
            {parseHTMLContent(post.content.rendered).map((content, index) => (
              <CardData key={index}>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  </Typography>
                  <Typography variant="body2">
                    {content.summary}
                  </Typography>
                  {/* <Typography variant="body2">
                    <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                  </Typography> */}
                  <Button style={{ color: '#d1d5db' }} href={`http://localhost:3000/details/${post.slug}`} size="small">Learn More</Button>
                </CardContent>
                <img
                  style={{ display: 'block', margin: 'auto',padding:"2%" }}
                  alt="green iguana"
                  height="35%"
                  width="35%"


                  src={content.imageUrl}
                />
              </CardData>
            ))}
          </Box>
        ))}
      </Stack>
    </div>
  );
}


