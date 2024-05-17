
const swiper3 = document.querySelectorAll(".swiper3")
if (swiper3) {
    swiper3.forEach(item => {
        let itemSwiper = new Swiper(item.querySelector(".swiper"), {
            slidesPerView: '2',
            observer: true,
            observeParents: true,
            navigation: {
              nextEl: item.querySelector('.swiper-btn--next'),
              prevEl: item.querySelector('.swiper-btn--prev'),
            },
            spaceBetween: 8,
            simulateTouch: true,
            watchSlidesProgress: true,
            speed: 800,
            breakpoints: {
                1400: {
                    spaceBetween: 32,
                    slidesPerView: '3'
                  },
                992: {
                    slidesPerView: '3',
                    spaceBetween: 20
                },
                767: {
                    slidesPerView: '2',
                    spaceBetween: 20
                },
            }
          });
    })
}
const fancybox = Fancybox.bind('[data-fancybox]', {
    Hash: false,
    Toolbar: {
      display: ["close"]
    },
    Thumbs: false,
});