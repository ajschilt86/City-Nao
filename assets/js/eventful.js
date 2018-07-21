$(document).ready(function () {

    // var APIKey = tBSgjN5gKzmXQqxq;

    // variables
    var userInputLocation = $(".location").val().trim();
    var userInputDate = $(".date").val().trim();

    // url
    var queryURL = "https://api.eventful.com/json/events/search?app_key=tBSgjN5gKzmXQqxq&location=" + userInputLocation + "&date=" + userInputDate + "";
    // var queryURL = "https://api.eventful.com/json/events/search?app_key=tBSgjN5gKzmXQqxq&location=chicago&date=today";

    // ajax call
    $.ajax({
        url: queryURL,
        // needed for this api
        dataType: 'jsonp',
        method: "GET"
    })

        .then(function (response) {
            for (var i = 0; i < 10; i++) {

                // console.log(response);
                // console.log(response.events.event[i].title);
                // console.log(response.events.event[i].venue_name);
                // console.log(response.events.event[i].city_name);
                // console.log(response.events.event[i].venue_address);
                // console.log(response.events.event[i].description);
                // console.log(response.events.event[i].venue_url);

                $(".test").append("<div>Title:" + response.events.event[i].title + "</div>");
                $(".test").append("<div>Title:" + response.events.event[i].venue_name + "</div>");
                $(".test").append("<div>Title:" + response.events.event[i].city_name + "</div>");
                $(".test").append("<div>Title:" + response.events.event[i].description + "</div>");
                $(".test").append("<div>Title:" + response.events.event[i].venue_name + "</div>");
                $(".test").append("<div>Title:" + response.events.event[i].venue_url + "</div>");


            

            }

        });



});