import React from 'react'

function Search(props) {
  return (
    <div className="Search">      
      <input 
        type='text' 
        onChange={(results) => props.onSearch(results.target.value)}
      />
    </div>
  );
}

export default Search;
