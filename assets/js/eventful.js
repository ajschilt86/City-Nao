$(document).ready(function () {

    // var APIKey = tBSgjN5gKzmXQqxq;




    $("body").on("click", ".submit-button", function (event) {
        // variables
        event.preventDefault();

        var userInputLocation = $(".location-input").val().trim();
        var userInputDateStart = $("#start").val();
        var userInputDateEnd = $("#end").val();

        console.log(userInputLocation);
        // url
        var queryURL = "https://api.eventful.com/json/events/search?app_key=tBSgjN5gKzmXQqxq&location=" + userInputLocation + "&date=" + userInputDateStart + "-" + userInputDateEnd + " ";

        // var queryURL = "https://api.eventful.com/json/events/search?app_key=tBSgjN5gKzmXQqxq&location=" + userInputLocation + "";


        // var queryURL = "https://api.eventful.com/json/events/search?app_key=tBSgjN5gKzmXQqxq&location=chicago&date=today";

        // ajax call

        $.ajax({
            url: queryURL,
            // needed for this api
            dataType: 'jsonp',
            method: "GET"
        }).then(function (response) {
            for (var i = 0; i < 10; i++) {

                console.log(response);
                // console.log(response.events.event[i].title);
                // console.log(response.events.event[i].venue_name);
                // console.log(response.events.event[i].city_name);
                // console.log(response.events.event[i].venue_address);
                // console.log(response.events.event[i].description);
                // console.log(response.events.event[i].venue_url);

                $(".events-display").append("<div class='events-output'><div class='events-output-title'>Title:" + response.events.event[i].title + "</div>");
                $(".events-display").append("<div class='events-output-date'>Date:" + response.events.event[i].start_time + "</div>");
                $(".events-display").append("<div class='events-output-venueName'>Venue Name:" + response.events.event[i].venue_name + "</div>");
                $(".events-display").append("<div class='events-output-cityName'>City Name:" + response.events.event[i].city_name + "</div>");
                $(".events-display").append("<div class='events-output-description'>Description:" + response.events.event[i].description + "</div>");
                $(".events-display").append("<div class='events-output-venueAddress'>Venue Address:" + response.events.event[i].venue_address + "</div>");
                $(".events-display").append("<div class='events-output-venueURL'>Venue URL:<a href='" + response.events.event[i].venue_url + "'>Click here</a></div></div>");

            }
        });

    });

});