import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import cards from "../cards";
import Card from "./Card";
import articles from "../articles";
import Article from "./Article";
import Footer from "./Footer";
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <section id="about" className="why">
        <div className="wrapper">
          <div className="texta">
            <h2>Why choose Easybank?</h2>
            <p>
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
          <div className="cards-container">
            {cards.map(cardItem => (
              <Card
                key={cardItem.key}
                img={cardItem.img}
                title={cardItem.title}
                content={cardItem.content}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="articles">
        <h2>Latest Articles</h2>
        <div className="articles-container">
          {articles.map(articleItem => (
            <Article
              key={articleItem.key}
              img={articleItem.img}
              author={articleItem.author}
              title={articleItem.title}
              content={articleItem.content}
            />
          ))}
        </div>
      </section>
      <Footer />
      <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        .Coded by{" "}
        <a href="http://www.github.com/VincenzoMarcovecchio">
          Vincenzo Marcovecchio
        </a>
        .
      </div>
    </div>
  );
}

export default App;
