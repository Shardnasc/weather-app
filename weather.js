// script.js

const apiKey = 'YOUR_API_KEY';
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const locationElement = document.querySelector('.location h1');
const temperatureElement = document.getElementById('temp');
const conditionElement = document.getElementById('condition');

searchButton.addEventListener('click', () => {
    const location = searchInput.value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = `${data.name}, ${data.sys.country}`;
            temperatureElement.textContent = `${data.main.temp}°C`;
            conditionElement.textContent = data.weather[0].description;
        })
        .catch(error => console.error(error));
});
