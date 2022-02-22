import SearchForm from "./components/SearchForm";
import { useState, useEffect } from "react";
import Output from "./components/Output";
import Notice from "./components/Notice";

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
        } else {
          setLoading(false);
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

  if (loading)
    return "Fetching 61.000 records, this usually takes up to 14 seconds.";
  // if (error) return "Error";

  let notice = (
    <p className="notice-text">
      This is a search tool for marketable Guild Wars 2 items.
      <br /> If you are not familiar with the game, try searching for phrases
      such as 'Mighty' or 'Rune' to see how it works.
      <br />
      <hr />
      In the current iteration it makes about
      <strong>307 fetch API requests</strong> to populate the
      <strong>local storage</strong> with names and IDs of items. Guild Wars 2
      API has a <strong>limit of 600 requests per minute</strong> per source, so
      clearing the storage and cache and reloading soon after loading has
      finished might cause it to malfunction.
    </p>
  );

  return (
    <div className="App">
      <div className="container">
        <SearchForm
          listOfCommerce={listOfCommerce}
          setOutput={setOutput}
          getFromStorage={getFromStorage}
        />
        <Output output={output} />
        <Notice text={notice} />
      </div>
    </div>
  );
}

export default App;
