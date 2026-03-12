$.fn.zoom = function(x) {
    this.css("transform", `scale(${x})`);
    return this;
};

$(document).ready(function(){
    let z = 1;
    $("#zoom").click(function(){
        z+=0.1;
        $("#image").zoom(z);
    });
});