import React from 'react';
import { useLocation } from 'react-router-dom';
import Product from './Product';

const SearchResults = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query');

  // Use the searchQuery to fetch and display search results

  return (
    <div>
      <h2>Search Results for: {searchQuery}</h2>
    </div>
  );
};

export default SearchResults;
