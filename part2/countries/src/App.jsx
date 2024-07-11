import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Results from "./components/Results";
import api from "./services/api";
import Details from "./components/Detail";

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    api.getall().then((res) => {
      setCountries(res.data);
    });
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filtered =
    filter.length == 0
      ? countries
      : countries.filter((country) =>
          country.name.common.toLowerCase().includes(filter.toLowerCase()),
        );

  return (
    <div>
      <h1>Find countries</h1>
      <Filter handleFilterChange={handleFilterChange} filterValue={filter} />
      <Results countries={filtered} />
    </div>
  );
}

export default App;
