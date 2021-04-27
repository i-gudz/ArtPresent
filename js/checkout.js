$('#first_step').click(function() {
    $("#first_step").addClass("active");
    $("#second_step").removeClass("active");
    $('.second_step').hide(300);
    $('.first_step').show(300);
});
$('#continue').click(function() {
    $("#first_step").removeClass("active");
    $("#second_step").addClass("active");
    $('.second_step').show(300);
    $('.first_step').hide(300);
});



$('#second_step').click(function() {
    $("#first_step").removeClass("active");
    $("#second_step").addClass("active");
    $('.second_step').show(300);
    $('.first_step').hide(300);
})