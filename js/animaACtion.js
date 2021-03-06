(function ($) {
  function SubAnima(ele, { target, anime }) {
    this.$element = ele;
    this.target = $(this.$element).find(target).get(0);
    this.anime = anime;
    this.animation = this.animeAction();
    this.init();
  }
  SubAnima.prototype = {
    /**
     * @description
     * 初始化绑定事件
     * @author wsy
     * @date 2020-06-23  21:36:55
     */
    init() {
      this.bindAction();
    },
    /**
     * @description
     * 返回动画事件（依赖于animeJs）
     * @author wsy
     * @date 2020-06-23  21:41:05
     */
    animeAction() {
      var animeParameter = Object.assign(this.anime, {
        targets: this.target,
      });
      return anime(animeParameter);
    },
    /**
     * @description
     * 开始动画
     * @author wsy
     * @date 2020-06-23  21:41:33
     */
    starAnima() {
      // 鼠标移除事件有翻转动画,flag判断是否初次鼠标滑入，不是初次需反转动画
      if (this.starFlag) {
        this.animation.reverse();
      } else {
        this.starFlag = true;
      }
      this.animation.play();
    },
    /**
     * @description
     * 结束动画
     * @author wsy
     * @date 2020-06-23  21:41:33
     */
    stopAnima() {
      this.animation.reverse();
      this.animation.play();
    },
    /**
     * @description
     * 绑定鼠标事件
     * @author wsy
     * @date 2020-06-23  21:41:33
     */
    bindAction() {
      var self = this;
      $(this.$element)
        .on("mouseenter", function () {
          self.starAnima();
        })
        .on("mouseleave", function () {
          self.stopAnima();
        });
    },
  };
  //在插件中使用SubAnima对象
  $.fn.SubAnima = function (options) {
    $.each(this, function (i, item) {
      new SubAnima(item, options);
    });
    return this;
  };
})(jQuery);
