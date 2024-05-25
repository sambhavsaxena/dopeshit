import React, { useState, useEffect } from "react";

const Searchbox = () => {
  const [inputValue, setInputValue] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [weather, setWeather] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [currency, setCurrency] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [inputValue, countries]);

  const handleChange = (event) => {
    setSelectedCountry(null);
    setWeather(null);
    setExchangeRate(null);
    setImage(null);
    setInputValue(event.target.value);
    setShowDropdown(true);
  };

  const handleSelectCountry = (countryName) => {
    setInputValue(countryName);
    setShowDropdown(false);
  };

  const fetchCountry = async () => {
    setSelectedCountry(null);
    setWeather(null);
    setExchangeRate(null);
    setImage(null);
    await fetch(`https://restcountries.com/v3.1/name/${inputValue}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedCountry(data);
        const obj = data[0].currencies;
        var result = Object.keys(obj).map((key) => [key, obj[key]]);
        setCurrency(result[0][0]);
      })
      .catch((error) => console.log(error));
  };

  const fetchImage = async (req, res) => {
    const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY_PIX}&q=${req}&image_type=photo&pretty=true`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setImage(data.hits[0].largeImageURL);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const fetchWeather = async () => {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${selectedCountry[0].capital[0]}&APPID=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        fetchImage(data.weather[0].description);
      })
      .catch((error) => console.log(error));
  };

  const fetchExchange = async () => {
    await fetch(
      `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_API_KEY_EX}/latest/${currency}`
    )
      .then((response) => response.json())
      .then((data) => {
        setExchangeRate(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Search for your country</h2>
      <div className="Searchbox">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type a country name..."
        />
        <button type="submit" onClick={fetchCountry}>
          Fetch
        </button>
        {showDropdown && inputValue && (
          <div className="dropdown-content" style={{ cursor: "pointer" }}>
            {filteredCountries.map((country) => (
              <div
                key={country.name.common}
                onClick={() => handleSelectCountry(country.name.common)}
              >
                {country.name.common}
              </div>
            ))}
          </div>
        )}
      </div>
      {selectedCountry && (
        <div>
          <div>
            <h3>{selectedCountry[0].name.common}</h3>
            <p>Capital: {selectedCountry[0].capital[0]}</p>
            <p>Currency: {currency}</p>
            <p>Continent: {selectedCountry[0].continents[0]}</p>
            <p>
              Flag: <span>{selectedCountry[0].flag}</span>
            </p>
            <p>Population: {selectedCountry[0].population}</p>
          </div>
          <div>
            <h4>Weather information</h4>
            {weather && weather.main ? (
              <div>
                <p>Temperature: {weather.main.temp} Kelvin</p>
                <p>Description: {weather.weather[0].description}</p>
                <img
                  style={{ height: "320px", width: "600px", margin: "6px" }}
                  key={image}
                  src={image}
                  alt="weather"
                />
                <p>Humidity: {weather.main.humidity}%</p>
                <p>Wind Speed: {weather.wind.speed} m/s</p>
              </div>
            ) : (
              <button type="submit" onClick={fetchWeather}>
                Fetch weather
              </button>
            )}
          </div>
          <div>
            <h4>Exchange information</h4>
            {exchangeRate ? (
              <div>
                <p>Conversion rates: </p>
                {Object.keys(exchangeRate.conversion_rates).map((key) => (
                  <p key={key}>
                    {key}: {exchangeRate.conversion_rates[key]}
                  </p>
                ))}
              </div>
            ) : (
              <button type="submit" onClick={fetchExchange}>
                Fetch Exchange rates
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Searchbox;
