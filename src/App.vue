<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import $ from "jquery";
$(document).ready(function() {
  var stars = 1000; /*星星的密集程度，数字越大越多*/
  var $stars = $(".stars");
  var r = 1000; /*星星的看起来的距离,值越大越远,可自行调制到自己满意的样子*/
  for (var i = 0; i < stars; i++) {
    var $star = $("<div/>").addClass("star");
    $stars.append($star);
  }
  $(".star").each(function() {
    var cur = $(this);
    var s = 0.2 + Math.random() * 1;
    var curR = r + Math.random() * 300;
    cur.css({
      transformOrigin: "0 0 " + curR + "px",
      transform:
        " translate3d(0,0,-" +
        curR +
        "px) rotateY(" +
        Math.random() * 360 +
        "deg) rotateX(" +
        Math.random() * -50 +
        "deg) scale(" +
        s +
        "," +
        s +
        ")",
    });
  });
});
export default {};
</script>
<style lang="less">
// login 背景
.login {
  background: radial-gradient(
    200% 100% at bottom center,
    #f7f7b6,
    #e96f92,
    #75517d,
    #1b2947
  );
  background: radial-gradient(
    220% 105% at top center,
    #1b2947 10%,
    #75517d 40%,
    #e96f92 65%,
    #f7f7b6
  );
  background-attachment: fixed;
  overflow: hidden;
}
@keyframes rotate {
  0% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
  }

  100% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg)
      rotateY(-360deg);
  }
}

.stars {
  transform: perspective(500px);
  transform-style: preserve-3d;
  position: absolute;
  bottom: 0;
  perspective-origin: 50% 100%;
  left: 50%;
  animation: rotate 20s infinite linear;
}

.star {
  width: 2px;
  height: 2px;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: 0 0 -300px;
  transform: translate3d(0, 0, -300px);
  backface-visibility: hidden;
}
</style>
