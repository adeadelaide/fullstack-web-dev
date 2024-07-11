import { useEffect, useState } from "react";
import Details from "./Detail";

const Results = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [foundResult, setFoundResult] = useState(false);

  useEffect(() => {
    if (countries.length == 1) {
      setSelectedCountry(countries[0]);
    } else {
      setSelectedCountry(null);
    }
  }, [countries]);

  const selectCountry = (c) => {
    setSelectedCountry(c);
  };

  return (
    <div>
      {countries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : countries.length == 1 ? (
        <Details country={countries[0]} />
      ) : (
        <>
          {countries.map((country) => (
            <p key={country.name.common}>
              {country.name.common}{" "}
              <button onClick={() => selectCountry(country)}>
                show details
              </button>
            </p>
          ))}

          {selectedCountry && <Details country={selectedCountry} />}
        </>
      )}
    </div>
  );
};

export default Results;
