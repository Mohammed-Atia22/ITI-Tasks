$(document).ready(function() {
    $("#image").animate(
        { left: "500px" },
        {
            duration: 5000,
            step: function(now) {
                $(this).css("left", now + "px");
                $("#data").text("position: " + Math.round(now) + "px");
            },
            complete: function() {
                $("#data").text("Animation finished!");
            }
        }
    );
});