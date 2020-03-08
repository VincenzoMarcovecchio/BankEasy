import React from "react";

function Card(props) {
  return (
    <div className="card">
      <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72">
        <defs>
          <linearGradient id="a" x1="0%" x2="99.58%" y1="0%" y2="99.58%">
            <stop offset="0%" stop-color="#33D35E" />
            <stop offset="100%" stop-color="#2AB6D9" />
          </linearGradient>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <circle cx="36" cy="36" r="36" fill="url(#a)" />
          <path fill="#FFF" fill-rule="nonzero" d={props.img} />
        </g>
      </svg>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

export default Card;
