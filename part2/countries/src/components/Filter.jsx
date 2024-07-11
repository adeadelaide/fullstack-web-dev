const Filter = ({ filterValue, handleFilterChange }) => {
  return (
    <div>
      find countries:{" "}
      <input value={filterValue} onChange={handleFilterChange} /> <br />
    </div>
  );
};

export default Filter;
