import { useState } from "react";
import { fetchWeather } from "./api/fetchWeather";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
      console.log(data);
      setQuery("");
    }
  };

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />

      {weather.location && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.location.name}</span>
            <sup> {weather.location.country} </sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.current.temp_c)}
            <sup>&deg;C </sup>
          </div>
          <div className="info">
            <img
              src={weather.current.condition.icon}
              alt={weather.current.condition.code}
              className="city-icon"
            />
            <p> { weather.location.tz_id } </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
