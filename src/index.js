import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  const menu = document.querySelector(".nav-bar-ul");
  menu.classList.toggle("show");
  hamburger.classList.toggle("close");
});
