$(document).ready(function () {
  $(".slider-review").slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    autoplay: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
