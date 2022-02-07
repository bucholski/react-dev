import { useState } from 'react';
 
const SearchForm = ({ setOutput }) => {

  const [value, setValue] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    
  }

  return(
  <form onSubmit={handleSearch}>
    <label>
      Item name:
      <input type="text" onChange={e => setValue(e.target.value)} />
      </label>
    <input type="submit" value="Search" />
  </form>
)};

export default SearchForm;
