/* Sortable books and authors */
$(document).ready(init);
function init(){
    $(function(){
        $("#authors").sortable();
    });
}
$(function(){
    $("#authors").sortable({
        containment: 'parent'
    });
});

/* Running man */
$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
            // Left arrow key pressed
            case 37:
                $('.run').animate({left: "-=20px"}, 'fast');
                break;
            // Up Arrow Pressed
            case 38:
                $('.run').animate({top:"-=20px"}, 'fast');
                break;
            // Right Arrow Pressed
            case 39:
                $('.run').animate({left:"+=20px"},'fast');
                break;
            // Down Arrow Pressed
            case 40:
                $('.run').animate({top:"+=20px"},'fast');
                break;
        }
    });
});

/* Selectable breeds */
$(document).ready(init);

function init(){
    $(function(){
        $("#breeds").selectable()
    });
};
$(document).ready(init);

function init(){
    $(function(){
        $("#breeds").selectable({
            selected: function(event, ui) {
                var a=ui.selected;
                if ($(a).hasClass("cat")){
                    $("#les14_ex2").text("Да, " + ui.selected.innerHTML + " это котик! ");
                }
                else {
                    $("#les14_ex2").text("Нет, " + ui.selected.innerHTML + " это пёс! ");
                }
            }
        })
    });
};

/* Explode */
$(document).ready(function(){
    $('#bomb').click(function(){
        $(this).effect('explode', {pieces: 30}, 1000 );
    });
});

/* Shame */
$(document).ready(function(){
    $('#shame').click(function(){
        $(this).effect('clip');
    });
});

/* Menu */
$(document).ready(function() {
    $("#menu").accordion({collapsible: true, active: false});
});

/* Puff */
$( document ).ready(function() {
    $("#butterfly").click(function(){
        $( "#butterfly" ).toggle( "puff", 3000 );
    });
});
