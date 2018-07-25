$(document).ready(function () {

    $("body").on("click", ".submit-button", function (event) {
        $(".weather-display").empty();

        //variables
        event.preventDefault();
        var userInputLocation = $(".location-input").val().trim();

        var weatherKey = "f8c9acba8f1055fb160d7c22d0474eb4";

        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userInputLocation + "&appid=" + weatherKey;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            var fahrenheit = parseFloat((response.main.temp - 273.15) * 1.8 + 32).toFixed(1);
            var minTemp = parseFloat((response.main.temp_min - 273.15) * 1.8 + 32).toFixed(1);
            var maxTemp = parseFloat((response.main.temp_max - 273.15) * 1.8 + 32).toFixed(1);


            $(".weather-display").append(
                "<section class='weather-output'><div class = 'weather-location'>" + response.name + " Weather Details</div>" +
                "<div>Main Temp (F): " + fahrenheit + "°</div>" +
                "<div>Minimum Temp (F): " + minTemp + "°</div>" +
                "<div>Maximum Temp (F): " + maxTemp + "°</div>" +
                "<div>Weather Condition: " + response.weather[0].main + "</div>" +
                "<div>Humidity: " + response.main.humidity + "%</div></section>");
        });
    });
});
// wawnt main temp, min, max, weather id, humidity