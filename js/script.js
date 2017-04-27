
$.fn.accardion=function(){
    
    var accardion =$(".item");
    $(".head").click(function(ev){
        $(this).parent().find(".body").slideToggle();
        $(this).find("i").toggleClass("fa-minus");
           $(".head").not($(this)).parent().find(".body").slideUp();
           $(".head").not($(this)).find("i").removeClass("fa-minus").addClass("fa-plus");
    })
}
$(document).ready(function(){
    $(".head").accardion();
})






