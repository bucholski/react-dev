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
        element.name.includes(value) &&
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
    <form onSubmit={handleSearch}>
      <label>
        Item name:
        <input type="text" onChange={(e) => setValue(e.target.value)} />
      </label>
      <input type="submit" value="Search" />
    </form>
  );
};

export default SearchForm;
