const express = require("express");
const https = require("https");

//body-parser is used to parse a string based...
//client request
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){

    res.sendFile(__dirname + "/index.html");

})

app.post("/", function(req, res){

    const query = req.body.cityName;
    const appid = "795aae9c46c88e3343df1f3edf28123e";
    const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid=" + appid +"&units=" + units;
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const desc = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "https://openweathermap.org/img/wn/" + icon +"@2x.png"

            
            res.write("<h1>The temperature in " + query +" is " + temp + " degress celcius.</h1>");
            res.write("<p>The weather is currently " + desc+ "<p>");
            res.write("<img src=" +imageURL +">");
            res.send();
        });
    });
});



//setting up of server
app.listen(3000, function(){
    console.log("Port 3000 is listening");
})
