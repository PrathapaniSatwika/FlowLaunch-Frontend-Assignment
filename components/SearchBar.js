import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        className="w-full p-2 border rounded-lg"
        placeholder="Search products..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
