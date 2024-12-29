import { useState } from "react";
import "./App.css";
import Autocomplete from "./components/AutoComplete.jsx";

function App() {
  const cityNames = [
    "Amsterdam",
    "Berlin",
    "London",
    "New York",
    "Paris",
    "Rome",
    "San Francisco",
    "Tokyo",
    "Washington DC",
    "Zurich",
    "Copenhagen",
    "Helsinki",
    "Madrid",
    "Reykjavik",
    "Stockholm",
    "Vancouver",
    "Vienna",
    "Zagreb",
    "Budapest",
    "Dublin",
    "Hamburg",
    "Krakow",
    "Lisbon",
    "Ljubljana"
  ];
  
  const [cities, setCities] = useState(cityNames)
  const [city, setCity] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(true)

  const handleCityChange = (e) => {
    setCity(e.target.value)
    setShowSuggestions(true)

    const filteredData = cityNames.filter((item) =>
      item.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCities(filteredData)
  }

  const handleSelect = (city) => {
    setCity(city)
    setShowSuggestions(false)
  }
  return (
    <>
    {/* <Autocomplete/> */}
      <div className="typeahead-container">
        <input
          type="text"
          className="typeahead-input"
          placeholder="Search..."
          value={city}
          onChange={(e) => handleCityChange(e)}
        />
        {showSuggestions && <ul className="typeahead-suggestions">
          {cities.map((city, index) => {
            return (
              <li onClick={() => handleSelect(city)} key={index}>{city}</li>
            )
          })}
        </ul>}
      </div>
    </>
  );
}

export default App;
