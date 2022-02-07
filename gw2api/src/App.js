import DebugScreen from "./components/DebugScreen";
import SearchForm from "./components/SearchForm";
import { useState, useEffect } from "react";
import Output from "./components/Output";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [output, setOutput] = useState([]);

  function compareWithLocalStorage() {
    console.log(localStorage.length)
    fetch('https://api.guildwars2.com/v2/items')
    .then(res => res.json())
    .then(array =>{
      if(array.length !== localStorage.length) {
        fetchAllItems(array.length);
        console.log("repupulate")
      } else {
        setLoading(false);
        console.log("all ready")
      }
    })
    .catch(error => console.error("Error in compare: " ,error));
  }

   async function fetchAllItems(numberOfAllItems) {
      let numberOfPages = Math.ceil(numberOfAllItems / 200) - 1;
      for (let i = 0; i <= numberOfPages; i++){
         await fetch(`https://api.guildwars2.com/v2/items?page=${i}&page_size=200`)
        .then(res => {
          if ( res.status===400) {
            throw "No more pages";
          }  
          return res.json();
        })
        .then(data=> 
          data.forEach(obj => {
          if(!obj.id) {console.log(obj)};
          localStorage.setItem(obj.id, obj.name);
        }))
        .catch(error => {
          console.log(error)
          })}
          setLoading(false);
}

  useEffect (() => {
   compareWithLocalStorage();
    }, [])

  if (loading) return "Loading";
  // if (error) return "Error";
  return (
    <div className="App">
      <SearchForm data={data} setOutput={setOutput} />
      <Output output={output} />
      <DebugScreen output={data} />
    </div>
  );
}

export default App;
