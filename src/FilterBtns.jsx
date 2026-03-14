import FilterBtn from "./FilterBtn";

function FilterBtns({ filters, allCards, setCards }) {
    const filterCards = (filter) => {
      if (filter === "all") {
        // this changes the CARDS array, the ALLCARDS array remains the same
        setCards(allCards);
      }
      else{
        // this changes the CARDS array, the ALLCARDS array remains the same
        setCards(allCards.filter(card => card.category === filter ));
        // if i did this, it set the cards(WHAT is being used by the Cards components)
        // to the filterd array,so when you click another filter, the array ALREADY REMOVED
        // the categories where it == the first clicked. by ysing the allCards in the SETCARDS
        // setting it changes only the cards variable the allCard cant chnage without a setter
        // so no matter how you filter it it will remain the same

        // setCards(prevCards => prevCards.filter(card => card.category == filter ))
        // prevCards = the first filtered, where all other categories are gone
      }
     
    }
  return (
    <div className="filter-buttons">
      {filters.map((filter) => (
        <FilterBtn key={filter} filterBy={filter} onFilterCards={filterCards} />
      ))}
    </div>
  );
}

export default FilterBtns;
