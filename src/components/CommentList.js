import { getComments } from "@/lib/categories";
import Rating from '@mui/material/Rating';


export default async function CommentList({slug}) {

    console.log('commant slug',{slug})
    const posts = await getComments(slug);
console.log('posts',posts)
    if (posts.length === 0) {
        return <p className="italic mt-3">No comments yet.</p>;
    }

    

    return (
        <div className="flex flex-col">
            {posts.map((post) => (
                <div key={post._id} className="mb-4 bg-gray-800 rounded-lg p-4 shadow-md">
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
    );
}