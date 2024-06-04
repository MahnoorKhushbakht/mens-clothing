

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
    <div className="p-2 space-x-8 flex justify-center align-middle">
           <button type="submit" 
        className="bg-inherit rounded px-2 py-1 self-center outline-gray-300 outline outline-offset-4
                   text-gray-300 w-24 md:w-32
                   disabled:bg-slate-500 disabled:cursor-not-allowed">
        Call Us
      </button>
      <button type="submit" 
        className="bg-inherit rounded px-2 py-1 self-center outline-gray-300 outline outline-offset-4
                   text-gray-300 w-24 md:w-32
                   disabled:bg-slate-500 disabled:cursor-not-allowed">
        Contact Us
      </button>
      </div>
  );
}

