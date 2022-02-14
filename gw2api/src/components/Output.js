import React, { createElement } from "react";

function showInfo(e) {
  if (e.target.classList[0] === "result-item") {
    Promise.all([
      fetch(
        `https://api.guildwars2.com/v2/commerce/listings/${e.target.dataset.id}`
      ),
      fetch(`https://api.guildwars2.com/v2/items/${e.target.dataset.id}`),
    ])
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .then((data) => {
        if (!e.target.childElementCount) {
          let info = document.createElement("div");
          console.log(data);
          info.innerHTML = `
            <table>
            <tr>
              <td>Icon</td>
              <td>Required Level</td>
              <td>Rarity</td>
              <td>Chatlink</td>
              <td>Buys</td>
              <td>Sells</td>
            </tr>
            <tr>
              <td><img src=${data[1].icon}></td>
              <td>${data[1].level}</td>
              <td>${data[1].rarity}</td>
              <td><a href='http://wiki.guildwars2.com/wiki/Special:Search?search=${encodeURIComponent(
                data[1].chat_link
              )}'>${data[1].chat_link}</a></td>
              <td>${data[0]?.buys?.length} buy listings starting at ${
            data[0]?.buys[0]?.unit_price
          }c</td>
              <td>${data[0]?.sells?.length} sell listings starting at ${
            data[0].sells[0]?.unit_price
          }c</td>
            </tr>
            <table>
            `;
          // alternate design, listlike. kept just in case
          //   <img src=${data[1].icon}> <br/>
          // Required level:  <br/>
          // Rarity: ${data[1].rarity} <br/>
          // Chat link: ${data[1].chat_link} </br>
          // ${data[0]?.buys?.length} buy listings starting at ${data[0]?.buys[0]?.unit_price} <br/>
          // ${data[0]?.sells?.length} sell listings starting at ${data[0].sells[0]?.unit_price}
          e.target.append(info);
        }
      });
    // fetch(
    // `https://api.guildwars2.com/v2/commerce/listings/${e.target.dataset.id}`
    // )
    //   .then((res) => res.json())
  }
}

const Output = ({ output }) => {
  return (
    <ul className="output-list" onClick={showInfo}>
      {output}
    </ul>
  );
};

export default Output;
