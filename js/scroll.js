// $(window).on("scroll",function(){
//     if($(window).scrollTop() > 400){
//         //縮小後のclassを追加
//         $(".header ").addClass("header-down");

//     }else{
//         //追加したclassを削除
//         $(".header ").removeClass("header-down");

//     }
//         });


let duration = 200;
let easing = "swing";
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 600) {
        $(".item1").animate({ "padding-right": "70%", "opacity": "1" }, duration, easing);
    }
});


$(window).on("scroll", function () {
    if ($(window).scrollTop() > 600) {
        $(".item2").animate({ "padding-right": "56%", "opacity": "1" }, duration, easing);
    }
});


$(window).on("scroll", function () {
    if ($(window).scrollTop() > 600) {
        $(".item3").animate({ "padding-right": "40%", "opacity": "1" }, duration, easing);
    }
});


$(window).on("scroll", function () {
    if ($(window).scrollTop() > 600) {
        $(".item4").animate({ "padding-right": "50%", "opacity": "1" }, duration, easing);
    }
});



$(window).on("scroll", function () {
    if ($(window).scrollTop() > 600) {
        $(".item5").animate({ "padding-right": "70%", "opacity": "1" }, duration, easing);
    }
});

$(window).on("scroll", function () {
    if ($(window).scrollTop() > 600) {
        $(".item6").animate({ "padding-right": "70%", "opacity": "1" }, duration, easing);
    }
});

$(document).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 150) { //150pxスクロールすると起動
        $('.header-top').css('background-color', 'unset');
    } else { //スクロールしていないときは起動しない
        $('.header-top').css('background-color', '#fff');
    }
});