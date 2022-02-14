import DebugScreen from "./components/DebugScreen";
import SearchForm from "./components/SearchForm";
import { useState, useEffect } from "react";
import Output from "./components/Output";

function App() {
  const [loading, setLoading] = useState(true);
  const [output, setOutput] = useState([]);

  let listOfCommerce = [];

  function getFromStorage(key) {
    return JSON.parse(localStorage[key]);
  }

  async function fillLocalStorage(itemsNumber) {
    localStorage.itemList = await fetchAllItems(itemsNumber);
    setLoading(false);
  }

  async function fetchAllItems(numberOfAllItems) {
    let promises = [];
    let temporary = [];
    let numberOfPages = Math.ceil(numberOfAllItems / 200);
    for (let i = 0; i <= numberOfPages; i++) {
      promises.push(
        fetch(`https://api.guildwars2.com/v2/items?page=${i}&page_size=200`)
      );
    }
    await Promise.all(promises)
      .then((responses) => responses.map((response) => response.json()))
      .then((promisePack) => Promise.all(promisePack))
      .then((data) =>
        data.forEach((arr) =>
          arr.forEach((obj) => temporary.push({ id: obj.id, name: obj.name }))
        )
      )
      .catch((error) => console.error(error));
    return JSON.stringify(temporary);
  }

  function compareWithLocalStorage() {
    fetch("https://api.guildwars2.com/v2/items")
      .then((res) => res.json())
      .then((array) => {
        if (
          !localStorage.itemList ||
          array.length !== getFromStorage("itemList").length
        ) {
          fillLocalStorage(array.length);
          console.log("repopulate");
        } else {
          setLoading(false);
          console.log("all ready");
        }
      })
      .catch((error) => console.error("Error in compare: ", error));
  }

  // async function fetchAllItems(numberOfAllItems) {
  //   let temporary = [];
  //   let numberOfPages = Math.ceil(numberOfAllItems / 200);
  //   console.log(numberOfPages);
  //   for (let i = 0; i <= numberOfPages; i++) {
  //     await fetch(`https://api.guildwars2.com/v2/items?page=${i}&page_size=200`)
  //       .then((res) => {
  //         if (res.ok) {
  //           return res.json();
  //         }
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         data.forEach((obj) => {
  //           temporary.push({ id: obj.id, name: obj.name });
  //         });
  //       })
  //       .then((localStorage.itemList = JSON.stringify(temporary)))
  //       .catch((error) => console.error(error));
  //   }

  //   setLoading(false);
  // }

  function fetchListOfCommerce() {
    fetch("https://api.guildwars2.com/v2/commerce/listings")
      .then((res) => {
        if (!res.ok) {
          throw "Error while fetching listings id's";
        }
        return res.json();
      })
      .then((data) => (localStorage.listOfCommerce = JSON.stringify(data)));
  }

  useEffect(() => {
    fetchListOfCommerce();
    compareWithLocalStorage();
  }, []);

  if (loading) return "Loading";
  // if (error) return "Error";
  return (
    <div className="App">
      <SearchForm
        listOfCommerce={listOfCommerce}
        setOutput={setOutput}
        getFromStorage={getFromStorage}
      />
      <Output output={output} />
      <DebugScreen output={listOfCommerce} />
    </div>
  );
}

export default App;
