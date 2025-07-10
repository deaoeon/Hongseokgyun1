$(function () {
    $('.nav li').hover(
        function () {
            const menuType = $(this).data('menu');
            $('.submenu-wrap').stop().slideDown(200);
            $('.submenu').hide();
            $('.submenu.' + menuType).show();
        },
        function () {
            // do nothing here, wait for .submenu-wrap leave
        }
    );

    $('.submenu-wrap').mouseleave(function () {
        $(this).stop().slideUp(200);
    });
});
