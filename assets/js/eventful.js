$(document).ready(function () {

    // var APIKey = tBSgjN5gKzmXQqxq;

   
    var queryURL = "https://api.eventful.com/json/events/search?app_key=tBSgjN5gKzmXQqxq&keywords=shows&location=Chicago&date=today";

    $.ajax({
        url: queryURL,
        dataType: 'jsonp',
        method: "GET"
    })
        
        .then(function (response) {
            for (var i = 0; i < 10; i++) {
            console.log(response);
            console.log(response.events.event[i].city_name);
            console.log(response.events.event[i].description);
            console.log(response.events.event[i].venue_name);
            }

        });









});