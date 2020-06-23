(function ($) {
  function SubAnima({ target, subIconDom, anime }) {
    this.target = target;
    this.subIconDom = $(this.target).find(subIconDom).get(0);
    this.anime = anime;
    this.animation = this.subIconAnima();
    this.init();
  }
  SubAnima.prototype = {
    init() {
      this.bindAction();
    },
    subIconAnima() {
      var animeParameter = Object.assign(this.anime, {
        targets: this.subIconDom,
      });
      return anime(animeParameter);
    },
    starAnima() {
      // 鼠标移除事件有翻转动画,flag判断是否初次鼠标滑入，不是初次需反转动画
      if (this.starFlag) {
        this.animation.reverse();
      } else {
        this.starFlag = true;
      }
      this.animation.play();
    },
    stopAnima() {
      this.animation.reverse();
      this.animation.play();
    },
    bindAction() {
      var self = this;
      $(this.target)
        .on("mouseenter", function () {
          self.starAnima();
        })
        .on("mouseleave", function () {
          self.stopAnima();
        });
    },
  };

  $.fn.SubAnima = function (options) {
    //创建Beautifier的实体
    var SubAnima = new SubAnima(options);
    //调用其方法
    return this;
  };
})(jQuery);
