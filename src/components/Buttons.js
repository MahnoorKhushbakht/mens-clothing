

export default function Buttons() {
  // const handleCallUsClick = () => {
  //   window.location.href = 'tel:+923483715545';
  // };

  // const handleContactUsClick = () => {
  //   const contactSection = document.getElementById('contact');
  //   if (contactSection) {
  //     contactSection.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <div className="p-2 space-x-4 flex justify-center align-middle">
           <button type="submit" 
        className="bg-gray-400 rounded px-2 py-1 self-center
                   text-gray-800 w-32 hover:bg-gray-200
                   disabled:bg-slate-500 disabled:cursor-not-allowed">
        Call Us
      </button>
      <button type="submit" 
        className="bg-gray-400 rounded px-2 py-1 self-center
                   text-gray-800 w-32 hover:bg-gray-200
                   disabled:bg-slate-500 disabled:cursor-not-allowed">
        Contact Us
      </button>
      </div>
  );
}

