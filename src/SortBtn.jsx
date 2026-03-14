function SortBtn({sortBy, onSortCards}) {
  return (
    <button className="sort-btn" data-sort={sortBy} onClick={() => onSortCards(sortBy)}>{sortBy}</button>
  );
}

export default SortBtn;
