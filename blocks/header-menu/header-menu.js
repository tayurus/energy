$(".header-menu__item").mouseover(function() {
    $(".header-menu").css({background : 'url(img/' + $(this).attr("data-img") + ') no-repeat center / cover'})
})
