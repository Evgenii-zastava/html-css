//инициализация слайдера
new Swiper('.image-slider_2', {
    //стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    slidesPerView: 3,
    slidesPerGroup: 3,
});
