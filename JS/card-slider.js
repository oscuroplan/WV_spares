$(document).ready(function () {
  $(".card-slider").slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    mobileFirst: true,

    responsive: [
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 379,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
