const swiper = new Swiper('.swiper-container', {
  // Optional parameters
    direction: 'horizontal',
    loop: true,
    freeMode: true,
    spaceBetween: 0,
    speed: 400,
    mousewheel: {
    invert: false,
  },
  slidesPerView: 'auto',
  loopedSlides: 2,
});

/* const swiperHandler = new Swiper('.swiper-container', {});

swiperHandler.on('click', function () {
  swiper.slideNext(500)
  console.log('click')
}) 

*/

