$(document).ready(function () {

    var userInputLocation = $(".location-input").val().trim();

    var weatherKey = "f8c9acba8f1055fb160d7c22d0474eb4";

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userInputLocation + "&appid=" + weatherKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var fahrenheit = (response.main.temp - 273.15) * 1.8 + 32;
        var minTemp = (response.main.temp_min - 273.15) * 1.8 + 32;
        var maxTemp = (response.main.temp_max - 273.15) * 1.8 + 32;


        $(".weather-display").append("<div class='weather-display-name'>" + response.name + " Weather Details</div>");
        $(".weather-display").append("<div class='weather-display-main'>Main Temp (F) : " + fahrenheit + "</div>");
        $(".weather-display").append("<div class='weather-display-min'>Minimum Temp (F) : " + minTemp + "</div>");
        $(".weather-display").append("<div class='weather-display-max'>Maximum Temp: " + maxTemp + "</div>");
        $(".weather-display").append("<div class='weather-display-condition'>Weather Condition: " + response.weather.description + "</div>");
        $(".weather-display").append("<div class='weather-display-humidity'>Humidity: " + response.main.humidity + "</div>");
    })

});


// wawnt main temp, min, max, weather id, humidity