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


$(".menu li").hover(function(){
    $('.menu li').css("color", "purple")
});

