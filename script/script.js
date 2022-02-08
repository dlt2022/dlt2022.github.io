window.onload = function() {
    
    //div position
    var top1 = $("#ov").offset().top;
    var top2 = $("#sco").offset().top;
    var top3 = $("#prog").offset().top;
    var top4 = $("#org").offset().top;
    
    $("#h").click(function() {
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 300);
    });
    
    $("#hov").click(function() {
        $('html, body').animate({
            scrollTop: $("#ov").offset().top-70
        }, 300);
    });
    $("#hsco").click(function() {
        $('html, body').animate({
            scrollTop: $("#sco").offset().top-70
        }, 300);
    });
    $("#hprog").click(function() {
        $('html, body').animate({
            scrollTop: $("#prog").offset().top-70
        }, 300);
    });
    $("#horg").click(function() {
        $('html, body').animate({
            scrollTop: $("#org").offset().top-70
        }, 300);
    });
    
    $(window).scroll(function() {
        if($(window).scrollTop() < top1) {
            $("#h").addClass("current_a");
            $("#hov").removeClass("current_a");
            $("#hsco").removeClass("current_a");
            $("#hprog").removeClass("current_a");
            $("#horg").removeClass("current_a");
        }
        if($(window).scrollTop() > top1-71) {
            $("#h").removeClass("current_a");
            $("#hov").addClass("current_a");
            $("#hsco").removeClass("current_a");
            $("#hprog").removeClass("current_a");
            $("#horg").removeClass("current_a");
        }
        if($(window).scrollTop() > top2-71) {
            $("#h").removeClass("current_a");
            $("#hov").removeClass("current_a");
            $("#hsco").addClass("current_a");
            $("#hprog").removeClass("current_a");
            $("#horg").removeClass("current_a");
        }
        if($(window).scrollTop() > top3-71) {
            $("#h").removeClass("current_a");
            $("#hov").removeClass("current_a");
            $("#hsco").removeClass("current_a");
            $("#hprog").addClass("current_a");
            $("#horg").removeClass("current_a");
        }
        if($(window).scrollTop() > top4-71) {
            $("#h").removeClass("current_a");
            $("#hov").removeClass("current_a");
            $("#hsco").removeClass("current_a");
            $("#hprog").removeClass("current_a");
            $("#horg").addClass("current_a");
        }
    });
    
}
