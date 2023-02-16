var swiperBanner = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: false,
    speed: 750,
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
    },
    // navigation: {
    //     nextEl: '.swiper-button.next',
    //     prevEl: '.swiper-button.prev',
    // },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + ' swiper-pagination-svg-animation"><svg width="26" height="26" viewBox="0 0 28 28"><circle class="svg__circle" cx="14" cy="14" r="12" fill="none" stroke-width="2"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="6" stroke-width="3"></circle></svg></span>';
        },
    },
});