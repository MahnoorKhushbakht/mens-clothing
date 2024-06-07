import Buttons from '@/components/Buttons';
import Layout from '@/components/Layout';



export default function HomePage(){
    return(
      <Layout>
        <div className='w-48 '>
        <h3 className='bg-clip-text  text-center text-transparent hover:bg-gradient-to-l bg-gradient-to-r from-gray-200 to-white-500 text-3xl md:text-5xl font-extrabold'>Tailored Gents</h3>
        <p className='text-center text-wrap antialiased mt-1 text-lg md:text-xl '>
        Discover timeless elegance and modern style with our <strong className="underline decoration-4 decoration-red-900/[.33] ">meticulously</strong> curated collection of men clothing, <strong className="underline decoration-4 decoration-red-900/[.33]">tailored</strong> to elevate your everyday <strong className="underline decoration-4 decoration-red-900/[.33]">wardrobe</strong>.
          </p>  
     
        </div>
        <Buttons/>
        </Layout>
    )}
