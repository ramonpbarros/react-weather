import React, { useState } from 'react';

const api = {
  key:"b0105367c10a309df73fedf0f8b8f403",
  base:"https://api.openweathermap.org/data/2.5/"
}
const secret_key = "GBZIvsNHDMoO8ghj5neW-nOlNdZaCHtBdOBsJp7ZK_M"

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [image, setImage] = useState({});

  const search = event => {
    if(event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
        });

      fetch(`${api.base}forecast?q=${query}&units=imperial&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setForecast(result);
        });

      fetch(`https://api.unsplash.com/search/photos/?client_id=${secret_key}&orientation=portrait&query=${query}`)
        .then(res => res.json())
        .then(result => {
          setImage(result);
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  const convertDate = (dateVar) => {
    dateVar = dateVar.replace(/(....).(..).(..)/, "$2/$3/$1");
    return dateVar;
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 60) ? 'app warm': 'app') : 'app'}>
          {(typeof image.results != "undefined") ? (
            <div className="image">
              <img src={image.results[1].urls.regular} alt=""></img>
            </div>
          ) : ('')}
      <main>
        <div className="search-box">
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}˚f
              </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : ('')}
        {(typeof forecast.list != "undefined") ? (
          <div>
            <div className="forecast-box">
              <div className="forecast">
                <div className="">{convertDate((forecast.list[2].dt_txt).split(" ")[0])}</div>
                <img src={`https://openweathermap.org/img/wn/${forecast.list[2].weather[0].icon}.png`} alt=""></img>
                <p>Temp: {Math.round(forecast.list[2].main.temp)}˚f</p>
                <p>Humidity: {forecast.list[2].main.humidity}%</p>
              </div>  
              <div className="forecast">
                <div className="">{convertDate((forecast.list[10].dt_txt).split(" ")[0])}</div>
                <img src={`https://openweathermap.org/img/wn/${forecast.list[10].weather[0].icon}.png`} alt="" id="imgForecast0"></img>
                <p>Temp: {Math.round(forecast.list[10].main.temp)}˚f</p>
                <p>Humidity: {forecast.list[10].main.humidity}%</p>
              </div>  
              <div className="forecast">
                <div className="">{convertDate((forecast.list[18].dt_txt).split(" ")[0])}</div>
                <img src={`https://openweathermap.org/img/wn/${forecast.list[18].weather[0].icon}.png`} alt="" id="imgForecast0"></img>
                <p>Temp: {Math.round(forecast.list[18].main.temp)}˚f</p>
                <p>Humidity: {forecast.list[18].main.humidity}%</p>
              </div>  
              <div className="forecast">
                <div className="">{convertDate((forecast.list[26].dt_txt).split(" ")[0])}</div>
                <img src={`https://openweathermap.org/img/wn/${forecast.list[26].weather[0].icon}.png`} alt="" id="imgForecast0"></img>
                <p>Temp: {Math.round(forecast.list[26].main.temp)}˚f</p>
                <p>Humidity: {forecast.list[26].main.humidity}%</p>
              </div>  
              <div className="forecast">
              <div className="">{convertDate((forecast.list[34].dt_txt).split(" ")[0])}</div>
                <img src={`https://openweathermap.org/img/wn/${forecast.list[34].weather[0].icon}.png`} alt="" id="imgForecast0"></img>
                <p>Temp: {Math.round(forecast.list[34].main.temp)}˚f</p>
                <p>Humidity: {forecast.list[34].main.humidity}%</p>
              </div>  
            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
