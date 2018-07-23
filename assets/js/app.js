$(document).ready(function() {

    //This will set the dates at start and end to the current day.
    function getNewDate(){
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;       
    $("#start").attr("value", today);
    $("#end").attr("value", today);
    }
    getNewDate();
});