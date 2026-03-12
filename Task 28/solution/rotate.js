$(document).ready(function(){
    $(".image").animate({deg:360},
        {
            duration:9000,
            step:function(now){
                $(this).css(`transform`,`rotate(${now}deg) scale(${now/360})`);
            }
        }
    )
})