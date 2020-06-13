$(function() {
    $(".carousel").carousel(  { interval: 8000 });
    $("#carouselControl").click(function(){
        if ($("#carouselControl").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselControl").children("i").removeClass("fa-pause");
            $("#carouselControl").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselControl").children("i").removeClass("fa-play");
            $("#carouselControl").children("i").addClass("fa-pause");
        }
    });
    $("#reserveButton").click(function(){
        $("#reserveModal").modal("show");
    });
    $("#loginButton").click(function(){
        $("#loginModal").modal("show");
    });
});