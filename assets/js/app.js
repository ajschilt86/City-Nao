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
        states.forEach(function(element){
            $(".state-input").append("<option value='"+ element +"'>" + element + "</option>")
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

    //Making side nav and select work in materialize
    $('.sidenav').sidenav();
    $('select').formSelect();

    
});