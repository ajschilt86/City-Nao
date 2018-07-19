$(document).ready(function () {

    var APIKey = tBSgjN5gKzmXQqxq;

    var queryURL = "http://eventful.com/events?q=music";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        
        .then(function (response) {
            console.log(response)
            
        });









});