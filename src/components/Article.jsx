import React from "react";

function Article(props) {
  return (
    <article className="article">
      <img src={props.img} alt="article image" />
      <div className="article-content">
        <p className="author-name">By {props.author}</p>
        <a href="#">
          <h4>{props.title}</h4>
        </a>
        <p className="p-article">{props.content}</p>
      </div>
    </article>
  );
}

export default Article;
