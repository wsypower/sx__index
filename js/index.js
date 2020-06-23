$(function () {
  //   $.each($(".sx__sub--nav"), function (i, item) {
  //     new SubAnima({
  //       target: item,
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
    subIconDom: ".sx__sub--nav-icon",
    anime: {
      translateX: 115,
      scale: 1.2,
      rotate: "1turn",
      autoplay: false,
    },
  });
});
