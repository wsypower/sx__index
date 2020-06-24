$(function () {
  //   $.each($(".sx__sub--nav"), function (i, item) {
  //     $(item).SubAnima({
  //       subIconDom: ".sx__sub--nav-icon",
  //       anime: {
  //         translateX: 115,
  //         scale: 1.2,
  //         rotate: "1turn",
  //         autoplay: false,
  //       },
  //     });
  //   });
  $(".sx__sub--nav").SubAnima({
    target: ".sx__sub--nav-icon",
    anime: {
      translateX: 115,
      scale: 1.2,
      rotate: "1turn",
      autoplay: false,
    },
  });
});
