function FilterBtn({ filterBy, onFilterCards }) {
  return (
    <button className="filter-btn" data-filter={filterBy} onClick={() => onFilterCards(filterBy)}>
      {filterBy}
    </button>
  );
}

export default FilterBtn;
