$(document).ready(function () {

    $("body").on("click", ".submit-button", function (event) {
        // variables
        event.preventDefault();
        $(".events-display").empty();

        var userInputLocation = $(".location-input").val().trim();
        var userInputDateStart = $("#start").val();
        var userInputDateEnd = $("#end").val();
        // var APIKey = tBSgjN5gKzmXQqxq;

        console.log(userInputLocation);
        // url
        var queryURL = "https://api.eventful.com/json/events/search?app_key=tBSgjN5gKzmXQqxq&location=" + userInputLocation + "&date=" + userInputDateStart + "-" + userInputDateEnd + " ";

        // ajax call

        $.ajax({
            url: queryURL,
            // needed for this api
            dataType: 'jsonp',
            method: "GET"
        }).then(function (response) {
            for (var i = 0; i < 10; i++) {

                // console.log(response);
                // console.log(response.events.event[i].title);
                // console.log(response.events.event[i].venue_name);
                // console.log(response.events.event[i].city_name);
                // console.log(response.events.event[i].venue_address);
                // console.log(response.events.event[i].description);
                // console.log(response.events.event[i].venue_url);

                $(".events-display").append(
                      "<section class='events-output'><div class='event-title'>" + response.events.event[i].title + "</div>"
                    + "<div>Date: " + response.events.event[i].start_time + "</div>"
                    + "<div>Venue Name: " + response.events.event[i].venue_name + "</div>"
                    + "<div>City Name: " + response.events.event[i].city_name + "</div>"
                    + "<div>Description: " + response.events.event[i].description + "</div>"
                    + "<div>Venue Address: " + response.events.event[i].venue_address + "</div>"
                    + "<div>Venue URL: <a href='" + response.events.event[i].venue_url + "'target='_blank'>Click here</a></div></section>");
            }
        });
    });
});