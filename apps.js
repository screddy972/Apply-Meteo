const APIKEY = "0d47d640a383307597fca125db84f064";

let url = ` https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${APIKEY}&units=metric&lang=fr`;

fetch(url)
  .then((response) =>
    response.json().then((data) => {
      console.log(data);
      let precipitation = 0;
      if (data.rain != undefined) {
        precipitation = Object.values(data.rain)[0] * 100;
      }

      document.querySelector("#city").innerHTML = data.name;
      document.querySelector("#temp").innerHTML = data.main.temp + "°c";
      document.querySelector("#humidity").innerHTML = data.main.humidity + " %";
      document.querySelector("#wind").innerHTML = data.wind.speed + "km/h";
      document.querySelector("#pluie").innerHTML = precipitation + "%";
    })
  )
  .catch((Err) => console.log("erreur : " + Err));

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let ville = document.querySelector("#inputCity").value;
});

let currentDate = new Date();

let formattedDate = currentDate.toLocaleDateString("fr-FR");
document.getElementById("date").innerHTML = formattedDate;
