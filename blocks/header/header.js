$('.header__menu-icon, .left__menu').click(function(){
    $(".header-menu").addClass("header-menu_active");
})

$(".header-menu").click(function(){
    $(".header-menu").removeClass("header-menu_active");
})
