$(document).ready(function () {

    $("body").on("click", ".submit-button", function (event) {
        event.preventDefault();

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
            console.log(response);

            for (var i = 0; i < 5; i++) {
                // console.log(response);
                // console.log(response.articles[i].title);
                // console.log(response.articles[i].url);

                $(".news-display").html(
                    "<section class = 'news-output'><div>Title:" + response.articles[i].title + "</div>"
                    + "<div>URL:<a href='" + response.articles[i].url + "'>Click here</a></div></section>");

            }
        });
    });
});

// news API requires an "attribution link"
    // an "attribution link is a text link to NewsAPI.org that reads 'Powered by News API'"