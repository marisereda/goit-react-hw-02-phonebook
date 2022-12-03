export const Filter = ({ handleChangeFilter, filterValue }) => (
  <div>
    <p>Find contacts by name</p>
    <input
      name="filter"
      onChange={handleChangeFilter}
      value={filterValue}
    ></input>
  </div>
);
