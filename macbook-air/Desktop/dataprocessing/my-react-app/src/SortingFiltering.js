import React, { useState } from 'react';

function SortingFiltering({ onSortChange, onFilterChange }) {
  const [sortOrder, setSortOrder] = useState('asc');
  const [naics, setNaics] = useState('');

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
    onSortChange(event.target.value);
  };

  const handleFilterChange = (event) => {
    setNaics(event.target.value);
    onFilterChange(event.target.value);
  };

  return (
    <div>
      <h2>Filter and Sort</h2>
      <input
        type="text"
        placeholder="Filter by NAICS"
        value={naics}
        onChange={handleFilterChange}
      />
      <select onChange={handleSortChange} value={sortOrder}>
        <option value="asc">Sort Ascending</option>
        <option value="desc">Sort Descending</option>
      </select>
    </div>
  );
}

export default SortingFiltering;
