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

  function compareWithLocalStorage() {
    fetch("https://api.guildwars2.com/v2/items")
      .then((res) => res.json())
      .then((array) => {
        // console.log(array.length + " vs " + lsJSON().length)
        if (
          !localStorage.itemList ||
          array.length !== getFromStorage("itemList").length
        ) {
          fetchAllItems(array.length);
          console.log("repopulate");
        } else {
          setLoading(false);
          console.log("all ready");
        }
      })
      .catch((error) => console.error("Error in compare: ", error));
  }

  async function fetchAllItems(numberOfAllItems) {
    let temporary = [];
    let numberOfPages = Math.ceil(numberOfAllItems / 200);
    console.log(numberOfPages);
    for (let i = 0; i <= numberOfPages; i++) {
      await fetch(`https://api.guildwars2.com/v2/items?page=${i}&page_size=200`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          data.forEach((obj) => {
            temporary.push({ id: obj.id, name: obj.name });
          });
        })
        .then((localStorage.itemList = JSON.stringify(temporary)))
        .catch((error) => console.error(error));
    }

    await setLoading(false);
  }

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
