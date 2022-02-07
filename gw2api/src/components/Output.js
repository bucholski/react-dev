import React, { useState } from 'react';


const Output = ({ output }) => {

 const [commerceInfo, setCommerceInfo] = useState("");

  function showCommerce(event) {
    setCommerceInfo("");
    fetch(`https://api.guildwars2.com/v2/commerce/listings/${event.target.getAttribute("data-id")}`)
    .then((response) => {
      if (response.ok) {
        console.log("ok")
        return response.json();
      } 
      throw response;
    })
    .then ((res) => {
      console.log(res.buys.length)
      setCommerceInfo(
       <ul>
        <li>{res.buys.length} buy listings, starting at {res.buys[0].unit_price}</li>
        <li>{res.sells.length} sell listings, starting at {res.sells[0].unit_price}</li>
      </ul>)
      console.log(commerceInfo);
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    })
  }

  function showResults() {
    return output.map(output => 
    <div><button className="item-button" data-id={output[1]} onClick={showCommerce}>{output[0]}</button>{commerceInfo}</div>
    );
  }

  return <div>{showResults()}</div>;
};

export default Output;
