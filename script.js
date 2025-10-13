const apiKey="a2e5ca9ebd0d6d514bb6448121e0647d";
const api="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

let searchBtn=document.getElementById("search");
let cityInput=document.getElementById("city");
let cityName=document.getElementById("city_name");
let temp=document.getElementById("temp");
let condition=document.getElementById("condition");
let wIcon=document.getElementById("w_icon");
let humidity=document.getElementById("humidity_data");
let wind=document.getElementById("wind_data");
let humidityIcon=document.getElementById("humidity_icon");

async function getWeather(city){
    const response=await fetch(api + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

    if(response.status=="404"){
        cityName.innerText="City not found";
    }

    if(data.weather[0].main=="Clouds"){
        wIcon.src="images/sun with clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        wIcon.src="images/sun.png";
    }
    else if(data.weather[0].main=="Rain"){
        wIcon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        wIcon.src="images/thunderstorm.png";
    }
    else if(data.weather[0].main=="Mist"){
        wIcon.src="images/snow.png";
    }

    cityName.innerText=data.name;
    cityInput.value="";
    temp.innerHTML=Math.round(data.main.temp) + "&#176;C";
    condition.innerText=data.weather[0].main;
    humidity.innerText=data.main.humidity + "%";
    wind.innerHTML=data.wind.speed +"km/h";
}


searchBtn.addEventListener('click',()=>{
    getWeather(cityInput.value);
})