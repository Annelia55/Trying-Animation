/* circle_1 */
$(document).ready(function() {
    $(".circle_1").mouseenter(function() {
        $(".circle_1").css("background-color", "yellow");
        $( "p:first", this ).text("Yeeeee ^_^");
        $(this).animate({
            height   : "250",
            width    : "250",
        }, "fast");
    });
    $(".circle_1").mouseleave(function(){
        $(".circle_1").css("background-color", "#67f45e");
        $( "p:first", this ).text("Touch me and I'll grow");
        $(this).animate({
            height   : "100",
            width    : "100",
        }, "fast");
    });
});

/* smile-drag */
$(function() {
    $( ".drag" ).draggable();
});
$(document).ready(function() {
    $(".drag").mouseenter(function() {
        $( "p:first", this ).text("Wohoooo");

    });
    $(".drag").mouseleave(function(){
        $( "p:first", this ).text("Thanks");

    });
});