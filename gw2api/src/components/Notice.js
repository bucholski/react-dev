import React from "react";

function noticeToggle(event) {
  let container = event.target.closest(".notice-container").classList;
  container.toggle("hidden");
  if (container.contains("hidden")) {
    event.target.innerText = ">>";
  } else {
    event.target.innerText = "<<";
  }
}

const Notice = ({ text }) => {
  return (
    <div className="notice-container">
      {text}
      <div className="notice-container__toggle" onClick={noticeToggle}>
        &lt;&lt;
      </div>
    </div>
  );
};

export default Notice;
