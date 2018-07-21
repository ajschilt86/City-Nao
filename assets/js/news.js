$(document).ready(function () {

    var newsKey = "73e7379dace64c0589551c94ccba7ab8";

    // var queryURL = "https://newsapi.org/v2/top-headlines?q=" + userInputLocation + "&apiKey=" + newsKey;
    var queryURL = "https://newsapi.org/v2/top-headlines?q=trump&apiKey=" + newsKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        for (var i = 0; i < 5; i++){        
            console.log(response);
            console.log(response.articles[i].title);
            console.log(response.articles[i].url);

        }
})

});

// news API requires an "attribution link"
    // an "attribution link is a text link to NewsAPI.org that reads 'Powered by News API'"