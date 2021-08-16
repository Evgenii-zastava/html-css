//инициализация слайдера
new Swiper('.image-slider', {
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

    spaceBetween: 30,

    slidesPerGroup: 3,

    slidesPerColumn: 2,
});
