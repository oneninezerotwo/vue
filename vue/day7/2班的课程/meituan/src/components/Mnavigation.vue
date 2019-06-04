<template>
  <div class="_2qDABxIhG58DjS3SnGcdQ4">
    <div ref="father" class="_11TYQrv0WY_3j7bGnRwtih">
      <div class="_3SHCeLB5gfUdeTSqdHGT-w"></div>
      <a
        v-appendhtml="$refs.father"
        v-for="(k,index) in kingkongList"
        :key="index"
        class="efeR5uyg2vbdcC1mfhm1B"
        data-cateid="910"
      >
        <div class="lYqlChWY4rNp3-JYyHmhG">
          <div>
            <div class="_3_juUbSw5kiHB8btC6rFF6 lazyimage-holder">
              <img :src="k.icon" alt="icon" class="lazyimage-img">
            </div>
          </div>
        </div>
        <div class="_35aWbI-Ceo7eXbrvcqpnOb" v-text="k.name"></div>
      </a>
      <div class="_3SHCeLB5gfUdeTSqdHGT-w"></div>
    </div>

    <!-- 第二行 -->
    <div class="_11TYQrv0WY_3j7bGnRwtih">
      <div class="_3SHCeLB5gfUdeTSqdHGT-w"></div>
      <a class="efeR5uyg2vbdcC1mfhm1B" data-cateid="19">
        <div class="lYqlChWY4rNp3-JYyHmhG">
          <div>
            <div class="_3_juUbSw5kiHB8btC6rFF6 lazyimage-holder">
              <img
                src="http://p1.meituan.net/jungle/e54f1fe77b0588d2dfe82a12e424108a9450.png"
                alt="icon"
                class="lazyimage-img"
              >
            </div>
          </div>
        </div>
        <div class="_35aWbI-Ceo7eXbrvcqpnOb">甜点饮品</div>
      </a>
      <div class="_3SHCeLB5gfUdeTSqdHGT-w"></div>
      <a class="efeR5uyg2vbdcC1mfhm1B" data-cateid="100180">
        <div class="lYqlChWY4rNp3-JYyHmhG">
          <div>
            <div class="_3_juUbSw5kiHB8btC6rFF6 lazyimage-holder">
              <img
                src="http://p0.meituan.net/jungle/2ec76f8f4f21a4ec163adc7fccfa1a399428.png"
                alt="icon"
                class="lazyimage-img"
              >
            </div>
          </div>
        </div>
        <div class="_35aWbI-Ceo7eXbrvcqpnOb">小吃馆</div>
      </a>
      <div class="_3SHCeLB5gfUdeTSqdHGT-w"></div>
      <a class="efeR5uyg2vbdcC1mfhm1B" data-cateid="100209">
        <div class="lYqlChWY4rNp3-JYyHmhG">
          <div>
            <div class="_3_juUbSw5kiHB8btC6rFF6 lazyimage-holder">
              <img
                src="http://p0.meituan.net/jungle/2eee7747fd143249b100b9fa5ee5e31d9873.png"
                alt="icon"
                class="lazyimage-img"
              >
            </div>
          </div>
        </div>
        <div class="_35aWbI-Ceo7eXbrvcqpnOb">家常菜</div>
      </a>
      <div class="_3SHCeLB5gfUdeTSqdHGT-w"></div>
      <a class="efeR5uyg2vbdcC1mfhm1B" data-cateid="23">
        <div class="lYqlChWY4rNp3-JYyHmhG">
          <div>
            <div class="_3_juUbSw5kiHB8btC6rFF6 lazyimage-holder">
              <img
                src="http://p1.meituan.net/jungle/dfd03fd91f640682c16179ba85837f739679.png"
                alt="icon"
                class="lazyimage-img"
              >
            </div>
          </div>
        </div>
        <div class="_35aWbI-Ceo7eXbrvcqpnOb">鲜花蛋糕</div>
      </a>
      <div class="_3SHCeLB5gfUdeTSqdHGT-w"></div>
      <a class="efeR5uyg2vbdcC1mfhm1B" data-cateid="101502">
        <div class="lYqlChWY4rNp3-JYyHmhG">
          <div>
            <div class="_3_juUbSw5kiHB8btC6rFF6 lazyimage-holder">
              <img
                src="http://p1.meituan.net/jungle/99fb0a3687a7ad570d015ec081ff396a9989.png"
                alt="icon"
                class="lazyimage-img"
              >
            </div>
          </div>
        </div>
        <div class="_35aWbI-Ceo7eXbrvcqpnOb">品牌连锁</div>
      </a>
      <div class="_3SHCeLB5gfUdeTSqdHGT-w"></div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
// Vue.directive('appendhtml',(el, binding)=>{
//   console.log(el)
// })
// import $ from "zepto";
export default Vue.extend({
  data() {
    return {
      kingkongList: []
    };
  },
  async created() {
    const data = await this.$axios(
      "https://www.easy-mock.com/mock/5cee26e4c7e0071827e4f109/kingkong"
    );
    this.kingkongList = data.data.data.kingkongList.slice(0, 6);
    console.log(data);
  },
  mounted(){
    console.log(this.$refs.father);
  },
  directives: {
    appendhtml(el, binding) {
      // <div class="_3SHCeLB5gfUdeTSqdHGT-w"></div>
      // var newItem=document.createElement("div")
      // newItem.className = '_3SHCeLB5gfUdeTSqdHGT-w'
      // console.log(el, binding.value);
      // binding.value.insertBefore(newItem, el)
      // $(binding.value).before(`<div class="_3SHCeLB5gfUdeTSqdHGT-w"></div>`)
    }
  }
});
</script>

<style lang="scss" scoped>
._2qDABxIhG58DjS3SnGcdQ4 {
  overflow: hidden;
  background: #fff;
  margin-bottom: 15px;
  max-height: 170px;
}

._2qDABxIhG58DjS3SnGcdQ4 ._11TYQrv0WY_3j7bGnRwtih {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

._2qDABxIhG58DjS3SnGcdQ4 ._11TYQrv0WY_3j7bGnRwtih {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

._2qDABxIhG58DjS3SnGcdQ4
  ._11TYQrv0WY_3j7bGnRwtih
  ._3SHCeLB5gfUdeTSqdHGT-w:first-child,
._2qDABxIhG58DjS3SnGcdQ4
  ._11TYQrv0WY_3j7bGnRwtih
  ._3SHCeLB5gfUdeTSqdHGT-w:last-child {
  -webkit-flex: 1 0 0;
  -ms-flex: 1 0 0px;
  flex: 1 0 0;
}

._2qDABxIhG58DjS3SnGcdQ4 ._11TYQrv0WY_3j7bGnRwtih ._3SHCeLB5gfUdeTSqdHGT-w {
  -webkit-flex: 2 0 0;
  -ms-flex: 2 0 0px;
  flex: 2 0 0;
}

._2qDABxIhG58DjS3SnGcdQ4 ._11TYQrv0WY_3j7bGnRwtih .efeR5uyg2vbdcC1mfhm1B {
  display: block;
  width: 44px;
  text-align: center;
  position: relative;
}
._2qDABxIhG58DjS3SnGcdQ4
  ._11TYQrv0WY_3j7bGnRwtih
  .efeR5uyg2vbdcC1mfhm1B
  .lYqlChWY4rNp3-JYyHmhG {
  position: relative;
  margin: 0 auto;
}
._2qDABxIhG58DjS3SnGcdQ4
  ._11TYQrv0WY_3j7bGnRwtih
  .efeR5uyg2vbdcC1mfhm1B
  .lYqlChWY4rNp3-JYyHmhG
  ._3_juUbSw5kiHB8btC6rFF6 {
  width: 44px;
  height: 44px;
  object-fit: cover;
  top: 0;
  left: 0;
  margin-bottom: 5px;
  margin-top: 15px;
}
.lazyimage-holder {
  position: relative;
}
.lazyimage-holder .lazyimage-img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
._2qDABxIhG58DjS3SnGcdQ4
  ._11TYQrv0WY_3j7bGnRwtih
  .efeR5uyg2vbdcC1mfhm1B
  ._35aWbI-Ceo7eXbrvcqpnOb {
  width: 44px;
  line-height: 1.4;
  white-space: nowrap;
  color: #333;
  font-size: 11px;
}
</style>

