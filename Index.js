$(function() {
    $( ".circle_1" ).draggable();
});
$(document).ready(function() {
    $(".circle_1").mouseenter(function() {
        $(".circle_1").css("background-color", "yellow");
        $( "p:first", this ).text("Yeeeee ^_^");
        $(this).animate({
            height   : "200",
            width    : "200",
        }, "fast");
    });
    $(".circle_1").mouseleave(function(){
        $(".circle_1").css("background-color", "#61d258");
        $( "p:first", this ).text("Thank you!");
        $(this).animate({
            height   : "150",
            width    : "150",
        }, "fast");
    });
});