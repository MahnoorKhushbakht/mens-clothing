import '@/app/css/style.css';
import { getComments } from "@/lib/categories";
import Rating from '@mui/material/Rating';


export default async function CommentList({slug}) {


    const posts = await getComments(slug);


    

    return (
       <>
          {((posts.length === 0)) ? <div className="mb-4 bg-gray-800 text-white rounded-lg p-4 shadow-md  italic mt-3">No comments yet.</div>
          :
          <div className="flex flex-col scrollContainer">
            {posts.map((post) => (
                <div key={post._id} className="mb-4 bg-gray-800 rounded-lg p-4 shadow-md ">
                    <Rating
                        size='large'
                        sx={{
                            '& .MuiRating-iconFilled': {
                                color: 'yellow',
                            },
                            '& .MuiRating-iconEmpty': {
                                color: 'white', 
                            },
                        }}
                        value={post.rating}
                        marginTop={2}
                    />
                    <p className="text-white text-lg font-semibold mt-2">{post.name}</p>
                    <p className="text-white">{post.comment}</p>
                </div>
            ))}
        </div>
          }
          </>
    );
}