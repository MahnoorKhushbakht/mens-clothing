'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Searchbar() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (query.length > 1) {
        try {
          const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
          const searchData = await response.json();
          setSearchResults(searchData); 
        } catch (error) {
          console.error('Error fetching search:', error);
          setSearchResults([]);
        }
      } else {
        setSearchResults([]);
      }
    };

    fetchSearchResults();
  }, [query]);

  const handleSearch = () => {
    router.push(`/details/${query}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <div className="flex items-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="border px-2 py-1 rounded w-32 mr-2"
        />
        <button type="submit" className="bg-gray-600 text-white px-4 py-1 rounded">
          Search
        </button>
      </form>
    </div>
  );
}
