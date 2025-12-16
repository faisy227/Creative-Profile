import SortBtn from "./SortBtn";
function SortBtns({sorts, allCards, setCards}) {
  const sortCards = (sort) => {
    if(sort === "oldest"){
      // cant put in:
      // setCards(allCards.reverse())
      // ^^ like that, it mutates the array
      setCards([...allCards].reverse())
    }
    else if(sort === 'newest'){
      // use spread to avoid mutation!!
      setCards([...allCards])
    } 
  }
  return (
    <div className="sort-options">
        {
            sorts.map((sort) => {
                return <SortBtn key={sort} sortBy={sort} onSortCards={sortCards}/>
            })
        }
    </div>
  );
}

export default SortBtns;
