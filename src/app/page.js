import Buttons from '@/components/Buttons';


export default function HomePage(){
    return(
      <div
      className="bg-gradient-to-r from-gray-800 to-gray-950 bg-center backdrop-opacity-10 bg-cover h-screen flex flex-col justify-center items-center text-gray-300" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <div className='w-3/5'>
        <h3 className='bg-clip-text antialiased font-bold text-4xl animate__animated animate__fadeInDown text-center text-shadow'>Tailored Gents</h3>
        <p className='text-center text-wrap antialiased mt-1 text-lg animate__animated animate__fadeIn'>
        Discover timeless elegance and modern style with our <strong className="underline decoration-4 decoration-red-900/[.33] ">meticulously</strong> curated collection of men clothing, <strong className="underline decoration-4 decoration-red-900/[.33]">tailored</strong> to elevate your everyday <strong className="underline decoration-4 decoration-red-900/[.33]">wardrobe</strong>.
          </p>
          <Buttons/>
        </div>
        </div>
    )}
