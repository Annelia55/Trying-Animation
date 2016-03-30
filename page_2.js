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
