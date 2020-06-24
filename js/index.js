$(function () {
  $(".sx__sub--nav")
    .SubAnima({
      target: ".sx__sub--nav-icon",
      anime: {
        translateX: 121,
        duration: 1050,
        easing: "easeInOutQuint",
        autoplay: false,
      },
    })
    .SubAnima({
      target: ".svg__path path",
      anime: {
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 400,
        delay: function (el, i) {
          return i * 150;
        },
        autoplay: false,
      },
    })
    .SubAnima({
      target: ".box-shadow",
      anime: {
        width: 177,
        duration: 1050,
        easing: "easeInOutQuint",
        autoplay: false,
      },
    })
    .SubAnima({
      target: ".anima__go--icon circle",
      anime: {
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        rotate: "180deg",
        fillOpacity: {
          value: "1",
        },
        duration: 800,
        delay: function (el, i) {
          return i * 650;
        },
        autoplay: false,
      },
    })
    .SubAnima({
      target: ".anima__go--icon path",
      anime: {
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        autoplay: false,
        duration: 300,
        delay: 200,
      },
    });
});
