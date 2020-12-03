$('#mobile-menu').click(function () {
    $(this).toggleClass('open');
});

$('#mobile-menu-close').click(function () {
    $('#mobile-menu').removeClass('open');
});

$(window).scroll(function () {
    $('#mobile-menu').removeClass('open');
});

$('header > ul > li').click(function () {
    $('header > ul > li').removeClass('open');
    $(this).toggleClass('open');
});