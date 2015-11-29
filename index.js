
$(".give-cake").click(function(){
    $('#Give-Form').show(); $('#Get-Form').hide();
});


$(".get-cake").click(function(){
    $('#Get-Form').show(); $('#Give-Form').hide();
});

$(".get-btn").click(function(){
    $('#match').css("color", "purple")
});

$(".give-btn").click(function(){
    $('#spec').css("color", "purple")
});

$(function() {
    $('.jcarousel').jcarousel({
       list: ".jcarousel-list"
});