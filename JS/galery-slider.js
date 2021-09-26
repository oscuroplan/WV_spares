$(document).ready(function () {
  $(".gallerySlider").slick({
    arrows: true,
    dots: false,
    slidesToShow: 4,
    autoplay: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
