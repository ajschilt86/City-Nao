$(document).ready(function () {

    var weatherKey = "f8c9acba8f1055fb160d7c22d0474eb4";

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userInputLocation + "&appid=" + weatherKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var fahrenheit = (response.main.temp - 273.15) * 1.8 + 32;
        var minTemp = (response.main.temp_min - 273.15) * 1.8 + 32;
        var maxTemp = (response.main.temp_max - 273.15) * 1.8 + 32;


        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        $(".main").html("Main Temp (F) : " + fahrenheit);
        $(".min").html("Minimum Temp (F) : " + minTemp);
        $(".max").html("Maximum Temp: " + maxTemp);
        $(".description").html("Weather Condition: " + response.weather.description);
        $(".humidity").html("Humidity: " + response.main.humidity);
    })

});


// wawnt main temp, min, max, weather id, humidity