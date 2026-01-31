const API_KEY = "494d69bb9bce4e888693a40067a6eec3";

const cities = [
  { name: "Warszawa", api: "Warsaw,PL" },
  { name: "Berlin", api: "Berlin,DE" },
  { name: "Praga", api: "Prague,CZ" },
  { name: "Paryż", api: "Paris,FR" }
];

const citiesList = document.getElementById("cities-list");

async function getWeather(city, element) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.api}&appid=${API_KEY}&units=metric&lang=pl`
    );

    if (!res.ok) {
      throw new Error("Błąd pobierania danych");
    }

    const data = await res.json();
    element.textContent = `${city.name}: ${data.main.temp}°C`;
  } catch (error) {
    element.textContent = `${city.name}: brak danych`;
  }
}

if (citiesList) {
  citiesList.innerHTML = "";

  cities.forEach(city => {
    const div = document.createElement("div");
    div.className = "city";
    div.textContent = "Ładowanie...";
    citiesList.appendChild(div);

    getWeather(city, div);
  });
}
