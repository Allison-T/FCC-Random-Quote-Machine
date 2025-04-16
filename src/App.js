import React from "react";
import { BeerQuote } from "beerq";

let beerQuote = BeerQuote("eng");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: beerQuote.getRandomQuote().quote,
      author: beerQuote.getRandomQuote().author
    };
    this.getNewQuote = this.getNewQuote.bind(this);
  }

  getNewQuote() {
    this.setState({
      quote: beerQuote.getRandomQuote().quote,
      author: beerQuote.getRandomQuote().author
    });
  }

  render() {
    return (
      <div className="App container-fluid">
        <div
          id="quote-box"
          className="position-absolute top-50 start-50 translate-middle"
        >
          <div id="text" className="quote-text">
            <p>{this.state.quote}</p>
          </div>

          <div id="author" className="quote-author">
            -{this.state.author}
          </div>

          <div className="buttons">
            <a
              id="tweet-quote"
              className="button"
              title="Tweet this quote!"
              target="_top"
              href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22Life%20is%20what%20happens%20to%20you%20while%20you%E2%80%99re%20busy%20making%20other%20plans.%22%20John%20Lennon"
            >
              Tweet it
            </a>

            <button
              id="new-quote"
              className="button"
              type="submit"
              onClick={this.getNewQuote}
            >
              New quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
