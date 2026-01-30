const cities = ["Warszawa", "Berlin", "Praga", "Paryż"];

const citiesList = document.getElementById("cities-list");

if (citiesList) {
    cities.forEach(city => {
        const div = document.createElement("div");
        div.className = "city";
        div.textContent = city;
        citiesList.appendChild(div);
    });
}