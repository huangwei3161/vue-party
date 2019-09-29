<template>
  <div class="container" draggable="false" @mousedown="returnFalse">
    <div class="album" ref="album" @mousedown="returnFalse">
      <img src="../../img/clients/client-1.png" alt width="220" height="100" />
      <img src="../../img/clients/client-2.png" alt width="220" height="100" />
      <img src="../../img/clients/client-3.png" alt width="220" height="100" />
      <img src="../../img/clients/client-4.png" alt width="220" height="100" />
      <img src="../../img/clients/client-5.png" alt width="220" height="100" />
      <img src="../../img/clients/client-6.png" alt width="220" height="100" />
    </div>
  </div>
  <!-- 如何设置3D布局
        1、 先设置场景景深
        2、设置场景风格
  3、改变相册元素rotatecX和rotateY的值-->
</template>
<script>
export default {
  methods: {
    returnFalse(e) {
      e.preventDefault();
    }
  },
  mounted() {
    var album = this.$refs.album;
    var imgs = this.$refs.album.children;
    var len = imgs.length;
    var unitDeg = 360 / len;
    var newX, newY, lastX, lastY, minusX, minusY;
    var rotX = 0;
    var rotY = 0;
    this.$nextTick(() => {
      Array.prototype.forEach.call(imgs, (it, i, arr) => {
        it.style.transform = `rotateY(${i * unitDeg}deg) translateZ(300px)`;
        it.style.transition = `1s ${(len - i) * 0.1}s`;
        it.onmousedown = this.returnFalse;
      });
      //   鼠标移动 相册旋转 改变album的transform 的rotateX 和 rotateY的值
      document.onmousedown = function(e) {
        // 鼠标点击事件
        lastX = e.clientX;
        lastY = e.clientY;
        this.onmousemove = e => {
          // 鼠标移动事件
          newX = e.clientX;
          newY = e.clientY;

          // 假设 并求值 两次鼠标移动的差值就是移动的距离 和相册旋转的角度成正比
          minusX = newX - lastX;
          minusY = newY - lastY;

          rotX += minusY;
          rotY += minusX;

          album.style.transform = `rotateX(${-rotX * 0.2}deg) rotateY(${rotY *
            0.2}deg)`;

          // 新的值用完之后就成了旧的值
          lastX = newX;
          lastY = newY;
        };
        this.onmouseup = e => {
          // 鼠标松开事件
          console.log("松开");
          this.onmousemove = null;
        };
      };
    });
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  background: #280045;
  perspective: 1000px; /*场景景深*/
  &:before {
    content: "";
    display: table;
  }
  .album {
    width: 100px;
    height: 220px;
    // border: solid 1px red;
    margin: 200px auto;
    position: relative;
    transform-style: preserve-3d; /*设置场景风格*/
    img {
      position: absolute;
      -webkit-box-reflect: below 5px -webkit-linear-gradient(top, rgba(250, 250, 250, 0), rgba(
              250,
              250,
              250,
              0
            )
            30%, rgba(250, 250, 250, 0.5));
    }
  }
}
</style>
