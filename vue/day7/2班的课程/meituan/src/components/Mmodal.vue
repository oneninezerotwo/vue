<template>
  <transition name="bounce">
    <div v-show="isShowMmodel.isShowMmodel" class="_1b6ukHA3mqsriD151jxApK">
      <div class="_37J4zzojyx80PuqKLoFejB">
        <div class="_2P8rH6xEPuMbgLksMRe7Gh">
          <img
            src="http://p0.meituan.net/wmproduct/a78edd992712e6c15c1ab824d16fa8ad1659029.jpg"
            alt
            class="UYEzEm0ZnyL3jreWUUvbl"
          >
        </div>
        <dl class="_1-S-x03GX_EZzrIKTwTIXX">
          <dt class="StiVkgbkNHJUATp5Y_gdY">奥尔良腿排+鱼香茄子双拼饭</dt>
          <dd class="_1PUN4rZ1Z1KCnBC30wOqhB">
            <div class="eEQrs_hLCy8KhJ7c3sfXu">
              月售
              3570
            </div>
            <div class="_2IgzVPbnqds34hMtKoyXdp">
              赞
              41
            </div>
          </dd>
          <dd class="_2-W5UefR9quwhEGdxbaYcP"></dd>
          <dd class="zs511DCVVUmJHyLemG-KR">脆爽辛辣的腿排鸡肉，嚼劲十足，给你送上舌尖上的美食盛宴，我们不一样哦</dd>
        </dl>
        <div class="_2Ly8WnRVqttaX2KP7hv-4I">
          <div class="_2ICjkT6n1kruTAmUBmwvMy">
            ¥
            15.8
          </div>
          <div class="_3qaHKVo6wZKtqjz07TtEZh">
            <span class="_3V2xq0s1Sr9qWxGpda6zrG">
              <button
                class="_4N-l_ft-sqjZMUTJuKZT8 _3ZldkObt0bY4MgYPQs2U9H"
                aria-label="移出购物车"
                aria-haspopup="false"
              ></button>
            </span>
            <span class="_1XzZKMpZiEHd8SJZaOL81h">1</span>
            <span class="_pniWG7WglTiHR-vZEVyd">
              <button
                class="_2-aL0qCEXtBABf_qJzGbmm _3ZldkObt0bY4MgYPQs2U9H"
                aria-label="加入购物车"
                aria-haspopup="false"
              ></button>
            </span>
          </div>
        </div>
      </div>
      <button class="_1oj5ZireVlqhZdRNpneWZr"></button>
    </div>
  </transition>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    isShowMmodel() {
      // return this.$store.state.isShowMmodel
      return this.$store.getters.getIsShowMmodel;
    }
  }
});
</script>
<style scoped>
div._1b6ukHA3mqsriD151jxApK:first-child {
  border-radius: 0;
  position: relative;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  max-width: 84vw;
  max-height: 88vh;
  padding-bottom: 60px;
  background: transparent;
}
._2UbJF3Jz3GcEYF7KkmG47_ > :first-child {
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  border-radius: 8px;
  background-color: #ffffff;
  max-width: 90vw;
  width: 84vw;
  max-height: 60vh;
  position: relative;
  -webkit-animation: dGadAkQnREGAkwcsbJeGK 200ms;
  animation: dGadAkQnREGAkwcsbJeGK 200ms;
  -webkit-overflow-scrolling: touch;
}
._37J4zzojyx80PuqKLoFejB {
  border-radius: 8px;
  background-color: #fff;
  overflow-y: hidden;
  height: 100%;
  max-height: 88vh;
  position: relative;
  padding-bottom: 44px;
}
._2P8rH6xEPuMbgLksMRe7Gh {
  background-image: url(http://s3plus.meituan.net/v1/mss_e2821d7…/cdn-prod/file:9096d347/b7673c5….png);
  background-size: 100% 100%;
  width: 100%;
  padding-bottom: 75%;
  height: 0;
  overflow: hidden;
}
.UYEzEm0ZnyL3jreWUUvbl {
  width: 100%;
}
img {
  border-style: none;
}
._1-S-x03GX_EZzrIKTwTIXX {
  padding-top: 10px;
  max-height: 100px;
  overflow-y: auto;
  box-sizing: border-box;
}
dl {
  margin: 0;
}
.StiVkgbkNHJUATp5Y_gdY {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #333333;
  font-weight: bolder;
  margin-bottom: 2px;
  height: 22.5px;
  line-height: 22.5px;
  font-size: 16px;
  font-family: "PingFangSC-Medium", "Hiragino Sans GB", Arial, Helvetica,
    "\5B8B\4F53", sans-serif;
}
.StiVkgbkNHJUATp5Y_gdY,
._1PUN4rZ1Z1KCnBC30wOqhB,
._2-W5UefR9quwhEGdxbaYcP,
.zs511DCVVUmJHyLemG-KR {
  padding: 0 17px;
}
._1PUN4rZ1Z1KCnBC30wOqhB {
  font-size: 11px;
  color: #666666;
  margin-bottom: 5px;
  height: 15px;
  line-height: 15px;
}
.eEQrs_hLCy8KhJ7c3sfXu {
  display: inline-block;
  margin-right: 14px;
}
._2IgzVPbnqds34hMtKoyXdp {
  display: inline-block;
}
.StiVkgbkNHJUATp5Y_gdY,
._1PUN4rZ1Z1KCnBC30wOqhB,
._2-W5UefR9quwhEGdxbaYcP,
.zs511DCVVUmJHyLemG-KR {
  padding: 0 17px;
}
.zs511DCVVUmJHyLemG-KR {
  margin-top: 10px;
  margin-bottom: 16px;
  position: relative;
  font-size: 11px;
  color: #666;
  line-height: 15px;
}
.StiVkgbkNHJUATp5Y_gdY,
._1PUN4rZ1Z1KCnBC30wOqhB,
._2-W5UefR9quwhEGdxbaYcP,
.zs511DCVVUmJHyLemG-KR {
  padding: 0 17px;
}
._2Ly8WnRVqttaX2KP7hv-4I {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 8px 17px;
  background-color: #fafafa;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
._2ICjkT6n1kruTAmUBmwvMy {
  display: inline-block;
  color: #fb4e44;
  font-size: 24px;
  vertical-align: top;
  font-family: "PingFangSC-Medium", "Hiragino Sans GB", Arial, Helvetica,
    "\5B8B\4F53", sans-serif;
}
._3qaHKVo6wZKtqjz07TtEZh {
  font-size: 16px;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
._3V2xq0s1Sr9qWxGpda6zrG {
  padding-left: 20px;
  padding-right: 10px;
  margin-right: -10px;
}
._3I392RjTKfRURBE32SiH7f,
._3V2xq0s1Sr9qWxGpda6zrG,
._pniWG7WglTiHR-vZEVyd {
  padding-top: 15px;
  margin-top: -15px;
  padding-bottom: 15px;
  margin-bottom: -15px;
}
._4N-l_ft-sqjZMUTJuKZT8 {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAAM1BMV…upLCsNQGk1SlOT2qfSqJWRQBg+lDFHG6j00U0fEqVx9BvALAkNabHL3QAAAABJRU5ErkJggg==);
  box-sizing: border-box;
}
._3ZldkObt0bY4MgYPQs2U9H {
  border-radius: 50%;
  display: inline-block;
  height: 25px;
  width: 25px;
  background-size: 100% 100%;
  border: none;
}
._1XzZKMpZiEHd8SJZaOL81h {
  padding: 0 10px;
  text-align: center;
  color: #333333;
}
._pniWG7WglTiHR-vZEVyd {
  padding-right: 10px;
  margin-right: -10px;
  padding-left: 10px;
  margin-left: -10px;
}
._3I392RjTKfRURBE32SiH7f,
._3V2xq0s1Sr9qWxGpda6zrG,
._pniWG7WglTiHR-vZEVyd {
  padding-top: 15px;
  margin-top: -15px;
  padding-bottom: 15px;
  margin-bottom: -15px;
}

._2-aL0qCEXtBABf_qJzGbmm {
  background-image: url(http://s3plus.meituan.net/v1/mss_e2821d7…/cdn-prod/file:9096d347/318c525….png);
}
._3ZldkObt0bY4MgYPQs2U9H {
  border-radius: 50%;
  display: inline-block;
  height: 25px;
  width: 25px;
  background-size: 100% 100%;
  border: none;
}
._1oj5ZireVlqhZdRNpneWZr {
  display: inline-block;
  position: absolute;
  bottom: -14px;
  right: 50%;
  font-size: 15px;
  line-height: 1em;
  height: 40px;
  width: 40px;
  text-align: center;
  color: #ffffff;
  border: solid transparent 10px;
  font-weight: lighter;
  margin: 0;
  margin-right: -34px;
  background-image: url(http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/df125964473c5a2c4edadb74d8a11995.png);
  background-size: 100% 100%;
  box-sizing: content-box;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
}
@import '../assets/animate.css';
/* 进入的动画*/
.bounce-enter-active {
  animation: rotateInDownLeft 3s;
}
/* 离开的动画 */
.bounce-leave-active {
  animation: rotateInDownLeft 3s reverse;
}
/** 动画类 */
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>


