const API_KEY = "494d69bb9bce4e888693a40067a6eec3";

const cities = [
  { name: "Warszawa", api: "Warsaw,PL", image: "img/warsaw.jpg" },
  { name: "Berlin", api: "Berlin,DE", image: "img/berlin.jpg" },
  { name: "Praga", api: "Prague,CZ", image: "img/prague.jpg" },
  { name: "Paryż", api: "Paris,FR", image: "img/paris.jpg" },
  { name: "Rzeszów", api: "Rzeszow, PL", image: "img/rzeszow.jpg"},
  { name: "Mińsk", api: "Minsk, BY", image: "img/minsk.jpg"}
];

const citiesList = document.getElementById("cities-list");

async function getWeather(city, card) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.api}&appid=${API_KEY}&units=metric&lang=pl`
    );

    if (!res.ok) {
      throw new Error("Błąd API");
    }

    const data = await res.json();

    card.querySelector(".temp").textContent =
      `${data.main.temp}°C`;
  } catch (error) {
    card.querySelector(".temp").textContent = "brak danych";
    console.error(error);
  }
}

if (citiesList) {
  cities.forEach(city => {
    const card = document.createElement("div");
    card.className = "city-card";

    card.innerHTML = `
      <img src="${city.image}" alt="${city.name}">
      <h3>${city.name}</h3>
      <p class="temp">Ładowanie...</p>
    `;

    citiesList.appendChild(card);
    getWeather(city, card);
  });
}

const cityCount = document.getElementById("city-count");

if (cityCount) {
  cityCount.textContent = cities.length;
}

const form = document.getElementById("contact-form");
const formInfo = document.getElementById("form-info");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    formInfo.textContent = "Wiadomość została wysłana!";
    formInfo.style.color = "green";

    form.reset();
  });
}
