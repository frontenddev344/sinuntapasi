$(document).ready(function(){
    $(".toggle").click(function(){
        $("body").addClass("menuToggle");
    });
    $(".close, .nav-link").click(function(){
    $("body").removeClass("menuToggle");
    });
});

