$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            items: 1,
            mouseDrag: false,
            smartSpeed: 1000
        }
    );

    function menu_togler(selector, clickElement) {
            if (!clickElement.hasClass('active')){
                selector.each(function () {
                    $(this).removeClass('active')
                });
                clickElement.addClass('active');
            }
    }

    $('.style-cst-icon').click(function () {
        menu_togler($('.style-cst-icon'), $(this));
    });

    $('.nav-item').click(function () {
        menu_togler($('.nav-item'), $(this));
    })
});
