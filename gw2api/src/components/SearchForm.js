import { useState } from "react";

const SearchForm = ({ setOutput, getFromStorage }) => {
  const [value, setValue] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    if (value.length < 3) {
      return setOutput("Minimum 3 characters");
    }
    let output = [];
    getFromStorage("itemList").forEach((element) => {
      if (
        element.name.toLowerCase().includes(value.toLowerCase()) &&
        getFromStorage("listOfCommerce").includes(element.id)
      ) {
        output.push(
          <li className="result-item" data-id={element.id} key={element.id}>
            {element.name}{" "}
          </li>
        );
      }
    });

    setOutput(output);
  }

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <input
        className="search-text"
        type="text"
        placeholder="Item name"
        onChange={(e) => setValue(e.target.value)}
      />
      <input className="search-btn" type="submit" value="" />
    </form>
  );
};

export default SearchForm;
