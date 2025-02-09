"use strict";

// Declaring variables
const containerApp = document.querySelector(".container");
const ranQuoteNum = document.querySelector(".random-quote-number");
const quote = document.querySelector("h1");
const btnRoll = document.querySelector(".random-roll-btn");

// update number click as user clicks the button
let updateNum = 1;

// set the text-content to the generated quotes
const renderQuotes = function (data) {
  quote.textContent = `${data.text}`;
};

// Adding functionality to the btn for random quote and number
btnRoll.addEventListener("click", () => {
  // Generate a Random number
  ranQuoteNum.textContent = updateNum++;

  // Generate a Random Quote
  const randomQuoteGen = async () => {
    try {
      const res = await fetch(
        "https://programming-quotes-api.azurewebsites.net/api/quotes/random"
      );
      if (!res.ok) throw new Error("Failed to get Quotes");
      const data = await res.json();
      renderQuotes(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  console.log((quote.textContent = randomQuoteGen()));
});
