$(document).ready(function () {
  $(".ourClientsSlider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 6,
    autoplay: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 721,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
