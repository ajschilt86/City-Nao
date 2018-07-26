$(document).ready(function () {
    var states = [
        "AK",
        "AL",
        "AR",
        "AZ",
        "CA",
        "CO",
        "CT",
        "DC",
        "DE",
        "FL",
        "GA",
        "HI",
        "IA",
        "ID",
        "IL",
        "IN",
        "KS",
        "KY",
        "LA",
        "MA",
        "MD",
        "ME",
        "MI",
        "MN",
        "MO",
        "MS",
        "MT",
        "NC",
        "ND",
        "NE",
        "NH",
        "NJ",
        "NM",
        "NV",
        "NY",
        "OH",
        "OK",
        "OR",
        "PA",
        "RI",
        "SC",
        "SD",
        "TN",
        "TX",
        "UT",
        "VA",
        "VT",
        "WA",
        "WI",
        "WV",
        "WY"];
    states.forEach(function (element) {
        $(".state-input").append("<option value='" + element + "'>" + element + "</option>")
    })

    //This will set the dates at start and end to the current day.
    function getNewDate() {
        var date = new Date();

        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();

        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;

        var today = year + "-" + month + "-" + day;
        $("#start").val(today);
        $("#end").val(today);
    }
    //Call the above function
    getNewDate();

    //If a user clicks enter submit form
    $('body').on("keydown", ".location-input", function (e) {
        if (e.which == 13) {
            $('.btn').click();
        }
    });

    var modal = $(".modal");
    var modalText = $(".modal-text");

    //close the modal if the x is clicked on
    $("body").on("click", ".close", function () {
        modal.hide();
    });
    //close the modal if the anywhere but the modal is clicked on
    $("body").on("click", function (event) {
        modal.hide();
    })

    $('body').on("click", ".submit-button", function (e) {
        var userInputLocation = $(".location-input").val().trim();
        var userInputDateStart = $("#start").val();
        var userInputDateEnd = $("#end").val();
        var userInputState = $(".state-input").val();
        // var newsKey = "73e7379dace64c0589551c94ccba7ab8";
        // var newsURL = "https://newsapi.org/v2/top-headlines?q=" + userInputLocation + "&apiKey=" + newsKey;
        var weatherKey = "f8c9acba8f1055fb160d7c22d0474eb4";
        var weatherURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + userInputLocation + ",us&appid=" + weatherKey;
        var eventfulURL = "https://api.eventful.com/json/events/search?app_key=tBSgjN5gKzmXQqxq&location=" + userInputLocation + "&date=" + userInputDateStart + "-" + userInputDateEnd + " ";


        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();

        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;

        var today = year + "-" + month + "-" + day;
        
        if (userInputLocation.length < 5 || typeof(userInputLocation) !== "number" ) {
            modal.show();
            modalText.text("Please enter a valid, 5 digit zip code!");
            return false;
        }
        if (userInputLocation.length >= 6) {
            modal.show();
            modalText.text("Please enter a valid, 5 digit zip code!");
            return false;
        }
        
        //If the user doesn't enter a city
        if (userInputLocation !== "" && /*userInputState !== "no-state-selected" &&*/ moment(userInputDateStart).isSameOrAfter(today) && moment(userInputDateEnd).isSameOrAfter(today)) {
            /*$(".news-display").empty();
            console.log("Hello");
            $.ajax({
                url: newsURL,
                dataType: 'json',
                method: "GET"
            }).then(function (response) {

                for (var i = 0; i < 5; i++) {
                    console.log(response);
                    // console.log(response.articles[i].title);
                    // console.log(response.articles[i].url);
                    if (response.totalResults === 0) {
                        $(".news-display").append(
                            "<div class = 'no-news'> Sorry, there are no articles for this location!</div>");
                        return;
                    }
                    else (
                        $(".news-display").append(
                            "<section class = 'news-output'><div class = 'news-title'>" + response.articles[i].title + "</div>" +
                            "<div>Description: " + response.articles[i].description + "</div>"
                            + "<div>URL: <a href='" + response.articles[i].url + "'target='_blank'>Click here</a></div>" +
                            "<div class = 'news-attribution'><a href='https://newsapi.org/' target='_blank'>Powered by News API</div></section>"));
                }
            });*/
            $.ajax({
                url: weatherURL,
                method: "GET"
            }).then(function (response) {
                $(".weather-display").empty();

                var fahrenheit = parseFloat((response.main.temp - 273.15) * 1.8 + 32).toFixed(1);
                var minTemp = parseFloat((response.main.temp_min - 273.15) * 1.8 + 32).toFixed(1);
                var maxTemp = parseFloat((response.main.temp_max - 273.15) * 1.8 + 32).toFixed(1);
    
    
                $(".weather-display").append(
                    "<section class='weather-output' data-aos='zoom-in-down'><div class = 'weather-location'>" + response.name + " Weather Details</div>" +
                    "<div>Main Temp (F): " + fahrenheit + "°</div>" +
                    "<div>Minimum Temp (F): " + minTemp + "°</div>" +
                    "<div>Maximum Temp (F): " + maxTemp + "°</div>" +
                    "<div>Weather Condition: " + response.weather[0].main + "</div>" +
                    "<div>Humidity: " + response.main.humidity + "%</div></section>");
            }); $.ajax({
                url: eventfulURL,
                // needed for this api
                dataType: 'jsonp',
                method: "GET"
            }).then(function (response) {
                $(".events-display").empty();
                for (var i = 0; i < 10; i++) {
                    $(".events-display").append(
                          "<section class='events-output'data-aos='zoom-in-down'><div class='event-title'>" + response.events.event[i].title + "</div>"
                        + "<div>Date: " + response.events.event[i].start_time + "</div>"
                        + "<div>Venue Name: " + response.events.event[i].venue_name + "</div>"
                        + "<div>City Name: " + response.events.event[i].city_name + "</div>"
                        + "<div>Description: " + response.events.event[i].description + "</div>"
                        + "<div>Venue Address: " + response.events.event[i].venue_address + "</div>"
                        + "<div>Venue URL: <a href='" + response.events.event[i].venue_url + "'target='_blank'>Click here</a></div>"
                        + "<div class = 'news-attribution'><a href='http://api.eventful.com/' target='_blank'>Powered by Eventful API</div></section>");
                }
            });
        } else if (userInputLocation === "" || userInputLocation.length<5) {
            modal.show();
            modalText.text("Please enter a valid zip code!");
            return false;
        }/* else if (userInputState === "no-state-selected") {
            modal.show();
            modalText.text("Please select a state");
            return false;
        }*/ else if (moment(today).isAfter(userInputDateStart) || moment(today).isAfter(userInputDateEnd)) {
            modal.show();
            modalText.text("Please be sure your date comes after the current one");
            return false;
        }
    });
    //Making side nav and select work in materialize
    $('.sidenav').sidenav();
    $('select').formSelect();
    AOS.init();

});