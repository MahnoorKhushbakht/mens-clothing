import SocialNav from './SocialNav';

function Footer() {
  return (
    <div className="text-center bg-gradient-to-r from-gray-800 to-gray-950 text-white h-full w-full">
      <div className="flex flex-col justify-center h-full">
        <SocialNav/>
        <p className="text-white">Copyright by TailorGents</p>
      </div>
    </div>
  );
}

export default Footer;
