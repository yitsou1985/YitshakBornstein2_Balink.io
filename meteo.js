let input = document.getElementById("input");
let button = document.getElementById("button");

button.addEventListener("click", inputvalue);

function inputvalue(e) {
  e.preventDefault;
  // console.log(e);
  data_get(input.value);
  console.log(input.value);
}

function data_get() {
  let valuinput = input.value;
  fetch(
    `https://www.metaweather.com/api/location/search/?query=${valuinput}&units=metric`
  )
    .then((res) => {
      return res.json();
    })
    .then(woeid_data);
}
function woeid_data(res) {
  let wooeid = res[0].woeid;
  fetch(`https://www.metaweather.com/api/location/${wooeid}`)
    .then((data) => {
      return data.json();
    })
    .then(displayBis);
}

function displayBis(data) {
  console.log(data);
  let d = data.consolidated_weather.length;
  for (let i = 0; i < d; i++) {
    // console.log(d);
    console.log(i);
    const cityAnd = document.querySelector(".City");

    const Date = document.querySelectorAll(".Date");
    const Temp = document.querySelectorAll(".Temp");
    const Weather = document.querySelectorAll(".Weather");
    const Humidity = document.querySelectorAll(".Humidity");
    const Visibilite = document.querySelectorAll(".Visibilite");
    const Pressure = document.querySelectorAll(".Pressure");

    const timedata = document.querySelector(".time");
    const sunrize = document.querySelector(".sunrise");
    const sunzet = document.querySelector(".sunset");
    //   console.log(data.sun_rise);
    //   console.log(data.sun_set);
    //   console.log(data.consolidated_weather[i].weather_state_name);
    let startIndex = data.time.indexOf("T") + 1;
    let endIndex = startIndex + 5;

    cityAnd.innerHTML = data.title + " " + "(" + data.parent.title + ")";

    timedata.innerHTML =
      "<b>Time</b> : " + data.time.substring(startIndex, endIndex);
    sunrize.innerHTML =
      "<b>Sun_rise</b> : " + data.sun_rise.substring(startIndex, endIndex);
    sunzet.innerHTML =
      "<b>Sun_set</b> : " + data.sun_set.substring(startIndex, endIndex);

    Date[i].innerHTML =
      "<b>Date</b>: " + data.consolidated_weather[i].applicable_date;
    Humidity[i].innerHTML =
      "<b>Humidity</b>: " + data.consolidated_weather[i].humidity;
    Visibilite[i].innerHTML =
      "<b>Visibility</b>: " +
      Math.trunc(data.consolidated_weather[i].visibility) +
      " miles";
    Pressure[i].innerHTML =
      "<b>Pressure</b>: " +
      Math.trunc(data.consolidated_weather[i].air_pressure) +
      " mb";
    Temp[i].innerHTML =
      "<b>Temp</b>: " + parseInt(data.consolidated_weather[i].the_temp) + "°C";
    Weather[i].innerHTML =
      "<b>Weather</b>: " + data.consolidated_weather[i].weather_state_name;
    let NameAbr = data.consolidated_weather[i].weather_state_abbr;
    let weathersvg = document.querySelectorAll(".weathersvg");
    console.log(NameAbr);
    let URlsvg = `https://www.metaweather.com/static/img/weather/${NameAbr}.svg`;
    // let URlsvg= `<img src=https://www.metaweather.com/static/img/weather/${NameAbr}.svg>`
    weathersvg[i].src = URlsvg;
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// function displaywoeid(data) {
//   console.log(data);
//   const cityAnd = document.querySelector(".City");
//   const display = document.querySelector(".display");
//   const displayA = document.querySelector(".displayA");
//   const displayB = document.querySelector(".displayB");
//   const displayC = document.querySelector(".displayC");
//   const displayD = document.querySelector(".displayD");
//   const timedata = document.querySelector(".time");
//   const sunrize = document.querySelector(".sunrise");
//   const sunzet = document.querySelector(".sunset");
//   console.log(data.sun_rise);
//   console.log(data.sun_set);
//   console.log(data.weather_state_name);
//   let startIndex = data.time.indexOf("T") + 1;
//   let endIndex = startIndex + 5;

//   cityAnd.innerHTML = data.title + " " + "(" + data.parent.title + ")";

//   timedata.innerHTML = '<b>Time</b> : '+ data.time.substring(startIndex, endIndex);
//   sunrize.innerHTML = '<b>Sun_rise</b> : '+ data.sun_rise.substring(startIndex, endIndex);
//   sunzet.innerHTML ='<b>Sun_set</b> : '+ data.sun_set.substring(startIndex, endIndex);

//   display.innerHTML = "<b>Date</b>: " + data.consolidated_weather[0].applicable_date;
//   displayC.innerHTML = "<b>Humidity</b>: " + data.consolidated_weather[0].humidity;
//   displayA.innerHTML ="<b>Temp</b>: " + parseInt(data.consolidated_weather[0].the_temp) + "°C";

//   let NameAbr = data.consolidated_weather[0].weather_state_abbr;
//   let weathersvg = document.querySelector(".weathersvg");
//   console.log(NameAbr);
//   let URlsvg = `https://www.metaweather.com/static/img/weather/${NameAbr}.svg`;
// // let URlsvg= `<img src=https://www.metaweather.com/static/img/weather/${NameAbr}.svg>`
// weathersvg.src = URlsvg;
// }
