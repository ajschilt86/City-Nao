$(document).ready(function () {

    $("body").on("click", ".submit-button", function (event) {
        event.preventDefault();
        $(".news-display").empty();

        //variables
        var userInputLocation = $(".location-input").val().trim();

        var newsKey = "73e7379dace64c0589551c94ccba7ab8";
        // This queryURL is for the actual working website//
        var queryURL = "https://newsapi.org/v2/top-headlines?q=" + userInputLocation + "&apiKey=" + newsKey;

        // This queryURL is for the testing of the API//
        // var queryURL = "https://newsapi.org/v2/top-headlines?q=trump&apiKey=" + newsKey;

        $.ajax({
            url: queryURL,
            dataType: 'json',
            method: "GET"
        }).then(function (response) {

            for (var i = 0; i < 5; i++) {
                // console.log(response);
                // console.log(response.articles[i].title);
                // console.log(response.articles[i].url);

                $(".news-display").append(
                    "<section class = 'news-output'><div>Title: " + response.articles[i].title + "</div>" +
                    "<div>Description: " + response.articles[i].description + "</div>"
                    + "<div>URL: <a href='" + response.articles[i].url + "'>Click here</a></div></section>");

            }
        });
    });
});

// news API requires an "attribution link"
    // an "attribution link is a text link to NewsAPI.org that reads 'Powered by News API'"