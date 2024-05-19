document.getElementById('fetchDataBtn').addEventListener('click', fetchData);

async function fetchData() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '6a432d8447fc8c2b38270a064e037d45';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        displayError(error);
    }
}

function displayData(data) {
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}

function displayError(error) {
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = `<p>${error.message}</p>`;
}
