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
    var label = $("#label");
    var startX;
    var stopX;
    var startY;
    var stopY;

    $( ".drag" ).draggable({
        start: function(event, ui) {
            startX = ui.position.left;
            startY = ui.position.top;
            label.text("Wohoooo");
        },
        stop: function(event, ui) {
            stopX = ui.position.left;
            stopY = ui.position.top;
            var dX = stopX - startX;
            var dY = stopY - startY;
            if ( dX > 100 || dX < -100 || dY > 100 || dY < -100) {
                label.text("Thanks");
            } else {
                label.text("No! It's not enough!");
            }
        }
    });
});

/* pens fadeTo */
$(document).ready(function(){
    $("button").click(function(){
        $("button").effect("shake",{direction: "up",  times:7, distance: 10}, "slow" );
        $("#pen_1").fadeTo("slow", 0.1);
        $("#pen_2").fadeTo("slow", 0.3);
        $("#pen_3").fadeTo("slow", 0.5);
        $("#pen_4").fadeTo("slow", 0.7);
    });
});


