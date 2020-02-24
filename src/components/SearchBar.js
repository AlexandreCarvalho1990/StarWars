import React from 'react'

const SearchBar = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--black bg-ligh-blue'
        type='search'
        placeholder='Search characters'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBar;