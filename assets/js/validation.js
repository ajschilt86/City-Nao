$(document).ready(function () {
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

        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();

        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;

        var today = year + "-" + month + "-" + day;

        //If the user doesn't enter a city
        if(userInputLocation === ""){
            modal.show();
            modalText.text("Please enter a city!");
            return false;
        }

        //If the user doesn't enter a state
        if(userInputState === "no-state-selected"){
            modal.show();
            modalText.text("Please select a state");
            return false;
        }
        
        //If the user enters a past date
        if (moment(today).isAfter(userInputDateStart) || moment(today).isAfter(userInputDateEnd)) {
            modal.show();
            modalText.text("Please be sure your date comes after the current one");
            return false;
        }
    });
});