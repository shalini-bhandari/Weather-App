const apiKey = "795aae9c46c88e3343df1f3edf28123e";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weatherIcon");
    //const icon = data.weather[0].description;
    
    async function checkWeather(cityName){
        const response = await fetch(apiUrl + cityName +  `&appid=${apiKey}` );
        var data = await response.json();
        console.log(data);

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".cityName").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    //     const imageURL = "https://openweathermap.org/img/wn/" + icon +"@2x.png"
    //    // res.write("<img src=" +imageURL +">");
    //     document.getElementsByClassName(".weatherIcon").src = imageURL;
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
    
    
    }

    searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
    })
    