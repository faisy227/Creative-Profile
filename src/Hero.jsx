import React, { useState } from "react";

function Hero({ allCards, setCards }) {
  // search via cards array or objects!!
  const [searchValue, setSeachValue] = useState("");

  const handleSearch = (value) => {
    setSeachValue(value);

    // if search is empty → show all cards
    if (!value.trim()) {
      setCards(allCards);
      return;
    }

    // otherwise filter the cards
    // Filter all cards by checking if ANY value inside the card object 
// contains the search text. 
// 1. Object.values(card) turns the card into an array of its values 
//    e.g. { name: "App", tag: "React" } → ["App", "React"]
// 2. .some(...) checks if at least one of those values matches the search
// 3. String(value).toLowerCase() makes sure every value is searchable as text
// 4. .includes(searchValue.toLowerCase()) checks if the search text appears 
//    anywhere inside that value
// This lets the search bar look through the entire card object automatically.

    const filtered = allCards.filter((card) =>
      // this is the condition:
      Object.values(card).some((value) =>
        String(value).toLowerCase().includes(searchValue.toLowerCase())
      )
    );

    setCards(filtered);
  };

  return (
    <section className="hero">
      <h1>Creative Gallery</h1>
      <p>
        Discover amazing projects and creative works from our community. Save
        your favorites!
      </p>

      <div className="search-container">
        <input
          type="search"
          id="search"
          className="search-bar"
          placeholder="Search projects..."
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </section>
  );
}

export default Hero;
