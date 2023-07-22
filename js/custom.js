$(document).ready(function() {
    $(".mobile-menu-button").on("click", function() {
        if($("ul.main-menu").hasClass("show")) {
            $("ul.main-menu").removeClass("show");
        } else {
            $("ul.main-menu").addClass("show");
        }
    })        
}) 