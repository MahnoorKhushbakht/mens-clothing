'use client';

import { LinkIcon } from '@heroicons/react/solid';
import { useState } from 'react';

export default function ShareLinkButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => setClicked(false), 1500);
  };

  return (
    <button onClick={handleClick}
      className="border flex gap-1 items-center px-2 py-1 rounded
                 text-gray-500 text-sm
                 hover:bg-white hover:text-gray-800">
      <LinkIcon className="h-4 w-4" />
      {clicked ? 'Link copied!' : 'Share link'}
    </button>
  );
}