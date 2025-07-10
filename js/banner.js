var swiper = new Swiper('.mySwiper', {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});
