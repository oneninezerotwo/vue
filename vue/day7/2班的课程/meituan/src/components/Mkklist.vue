<template name="my-test" lang="html">
  <div class="_3uTnjGaICQR0QQJ0b-Nk8k _2yCMxFCzKcIRQuCBS1XZ_k">
    <div ref="wrapper" class="_3XRWZqdyupCVEnwa2XBFGr homeshoplist">
      <ul class="_2db1e1m154ODnjL1-ivQvq">
        <li v-for="(s,index) in shopList" :key="index" data-watch="1118788624027580">
          <!-- 声明式导航 -->
          <router-link to="/list" class="FcKg0z7ZA3tlZo-vSxopN" role="logo" aria-label="真功夫（龙洞）">
            <div class="_2q5HWkq__CHgEQLE76bhCF" role="logo" aria-label="真功夫（龙洞）">
              <img
                src="http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png"
                alt="icon"
                class="_3f5at3Y6MnNFz0hFltS3GS"
              />
              <div>
                <div class="_2igkDNMjpxxIgHzE1Ptqyk lazyimage-holder" style="height: 57px;">
                  <img
                    :src="s.picUrl"
                    alt="icon"
                    class="lazyimage-img"
                  />
                </div>
              </div>
            </div>
            <div class="_2L_M6YlchG3yfnSSg7L6mL">
              <div class="_3ce4X4pC6NTjqy4_fKHA8E" v-text="s.shopName"></div>
              <div class="_21yyPg0MxIEFMCg8RnTeUo">
                <div>
                  <div class="D11MX3M-SDa4TXs8lmgHq" style="height: 10px;">
                    <i class="_1ukqM-8qHp61SdF68btTCh" style="transform: scale(0.833333);"></i>
                    <i class="_1ukqM-8qHp61SdF68btTCh" style="transform: scale(0.833333);"></i>
                    <i class="_1ukqM-8qHp61SdF68btTCh" style="transform: scale(0.833333);"></i>
                    <i class="_1ukqM-8qHp61SdF68btTCh" style="transform: scale(0.833333);"></i>
                    <i class="_1ukqM-8qHp61SdF68btTCh" style="transform: scale(0.833333);"></i>
                  </div>
                  <span class="_34MB4leIjAhG3LXl-DN8Ed _19QQt5prXpFQr9QhCVfwC5" v-text="wmPoiScore(s.wmPoiScore)"></span>
                  <span class="_1V9_Khfd3oEDl7_xSgGuGL _34MB4leIjAhG3LXl-DN8Ed" v-text="s.monthSalesTip"></span>
                </div>
                <div class="_20HnNmr2Skt7lyGyrsg5R7">
                  <span class="_34MB4leIjAhG3LXl-DN8Ed" v-text="s.deliveryTimeTip"></span>
                  <span class="_34MB4leIjAhG3LXl-DN8Ed _3jD4JjJGIR519uivFOA_ud" v-text="s.distance"></span>
                </div>
              </div>
              <div class="_1wRyOmTit2wxvwxcfx4tf1">
                <span class="_34MB4leIjAhG3LXl-DN8Ed" v-text="s.minPriceTip"></span>
                <span class="_34MB4leIjAhG3LXl-DN8Ed _3jD4JjJGIR519uivFOA_ud" v-text="s.shippingFeeTip"></span>
                <span class="_34MB4leIjAhG3LXl-DN8Ed _3jD4JjJGIR519uivFOA_ud" v-text="s.averagePriceTip"></span>
              </div>
              <div class="_2t-V7ElqTaDS-PIn3jWR_X">
                <span class="_2kkldfTxIX9haSW1LXDlCS"></span>
                <p class="_3ykJaIHGFSdjdQuChaUN6z">
                  <img
                    :src="s.picUrl"
                    alt="activity icon"
                    class="_1vvO5ZUocEXs-aSvyWfhGT"
                  />
                  <span class="_34MB4leIjAhG3LXl-DN8Ed">满38减10;满70减20</span>
                </p>
                <p class="_3ykJaIHGFSdjdQuChaUN6z">
                  <img
                    src="http://p0.meituan.net/activityconfig/3da2d9c7a4ddf89e4e71cfdfff168c391088.png"
                    alt="activity icon"
                    class="_1vvO5ZUocEXs-aSvyWfhGT"
                  />
                  <span class="_34MB4leIjAhG3LXl-DN8Ed">折扣商品5.94折起</span>
                </p>
                <p class="_3ykJaIHGFSdjdQuChaUN6z">
                  <img
                    src="http://p0.meituan.net/xianfu/476ba65ee80b6385bab292c085baed17940.png"
                    alt="activity icon"
                    class="_1vvO5ZUocEXs-aSvyWfhGT"
                  />
                  <span class="_34MB4leIjAhG3LXl-DN8Ed">本店支持开发票，开票金额0元起</span>
                </p>
              </div>
            </div>
            <!-- react-empty: 4885 -->
          </router-link>
        </li>
      </ul>
      <div @click="getShopList" class="_2DWI5MQavfzP27kRciy2ia">
        <div class="_33vevPA4wCUHDSyh8YgZyS"></div>
        <span v-text="loading>0?'正在加载...':'点击加载'"></span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import BScroll from 'better-scroll';
export default Vue.extend({
  // 私有数据
  data() {
    return {
      shopList: [],
    };
  },
  created() {
    this.getShopList(() => {
      // this.$nextTick(() => {
      //   // this.scroll = new BScroll(this.$refs.wrapper, {});
      //   console.log(this.$refs.wrapper.offsetHeight)
      //   this.$refs.wrapper.offsetHeight
      // });
    });
  },
  mounted() {
    window.onscroll = (e) => {
      // if(window.scrollY===2408){
      //   this.getShopList();
      // }
      // console.log(window.innerHeight)
      // console.log(window.scrollY)
      if (window.scrollY > 250) {
        this.$store.state.isFixedMenu = true;
      } else {
        this.$store.state.isFixedMenu = false;
      }
    };
  },
  methods: {
    // 获取列表数据
    async getShopList(callback) {
      this.$store.state.loading += 1;
      const data = await this.$axios(
        'https://www.easy-mock.com/mock/5cee26e4c7e0071827e4f109/shoplist',
      );
      this.$store.state.loading -= 1;
      console.log(data);
      this.shopList = [...this.shopList, ...data.data.data.shopList];
      // callback();
    },
    wmPoiScore(wmPoiScore) {
      return wmPoiScore / 10;
    },
  },
  computed: {
        loading() {
            // 把仓库的公有变量获取到loading组件里面使用
            console.log(this);
            // 从仓库拿到一个值
            return this.$store.state.loading;
        },
    },
});
</script>

<style lang="scss">
._3uTnjGaICQR0QQJ0b-Nk8k {
  width: 100%;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
._2yCMxFCzKcIRQuCBS1XZ_k {
  overflow: visible;
}
._3XRWZqdyupCVEnwa2XBFGr {
  font-size: 11px;
  min-height: 600px;
  min-height: calc(100vh - 140px);
}
._2db1e1m154ODnjL1-ivQvq {
  background: #fff;
  overflow: hidden;
}
.FcKg0z7ZA3tlZo-vSxopN {
  padding: 0 10px;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  text-decoration: none;
  box-sizing: border-box;
  margin-bottom: 25px;
  margin-top: 10px;
  position: relative;
}
._2q5HWkq__CHgEQLE76bhCF {
  width: 76px;
  height: 57px;
  position: relative;
  box-sizing: border-box;
  margin-right: 8px;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  border-radius: 2px;
  overflow: hidden;
}
._2q5HWkq__CHgEQLE76bhCF ._3f5at3Y6MnNFz0hFltS3GS {
  position: absolute;
  width: 26px;
  right: 0;
  z-index: 1;
}
._2q5HWkq__CHgEQLE76bhCF ._2igkDNMjpxxIgHzE1Ptqyk {
  display: block;
  width: 100%;
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
._2q5HWkq__CHgEQLE76bhCF::after {
  content: "";
  position: absolute;
  border: 1px solid #e4e4e4;
  left: 0;
  top: 0;
  width: 200%;
  height: 200%;
  box-sizing: border-box;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
}
._2L_M6YlchG3yfnSSg7L6mL {
  -webkit-flex: 1 0;
  -ms-flex: 1 0;
  flex: 1 0;
  min-width: 0;
}
._2L_M6YlchG3yfnSSg7L6mL ._3ce4X4pC6NTjqy4_fKHA8E {
  font-size: 16px;
  color: #333;
  line-height: 1.4;
  white-space: nowrap;
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
}
._2L_M6YlchG3yfnSSg7L6mL ._21yyPg0MxIEFMCg8RnTeUo {
  margin-top: 4px;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.D11MX3M-SDa4TXs8lmgHq {
  display: inline-block;
  height: 12px;
}
._1ukqM-8qHp61SdF68btTCh {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAABICAMAAADbJ8U9AAAAmVBMV…eccK8y9v/roCTAvNIEmFdvVqhF9N+rGoZlLXmVz6I7evUDNbpOpWFLPZYAAAAASUVORK5CYII=)
    no-repeat;
  width: 12px;
  height: 12px;
  float: left;
  background-position: 40% 5.66%;
  background-size: 126% 379%;
}
._19QQt5prXpFQr9QhCVfwC5 {
  margin-left: 4px;
}
._34MB4leIjAhG3LXl-DN8Ed {
  font-size: 11px;
  color: #333;
  line-height: 1.4;
}
._20HnNmr2Skt7lyGyrsg5R7 {
  -webkit-flex: 1 0;
  -ms-flex: 1 0;
  flex: 1 0;
  text-align: right;
}
._34MB4leIjAhG3LXl-DN8Ed {
  font-size: 11px;
  color: #333;
  line-height: 1.4;
}
._34MB4leIjAhG3LXl-DN8Ed {
  font-size: 11px;
  color: #333;
  line-height: 1.4;
}
._3jD4JjJGIR519uivFOA_ud:not(:first-child):before {
  content: "";
  display: inline-block;
  margin: 0 3px;
  height: 6px;
  width: 1px;
  background: #ccc;
}
._1wRyOmTit2wxvwxcfx4tf1 {
  margin-top: 4px;
}
._34MB4leIjAhG3LXl-DN8Ed {
  font-size: 11px;
  color: #333;
  line-height: 1.4;
}
._34MB4leIjAhG3LXl-DN8Ed {
  font-size: 11px;
  color: #333;
  line-height: 1.4;
}
._3jD4JjJGIR519uivFOA_ud:not(:first-child):before {
  content: "";
  display: inline-block;
  margin: 0 3px;
  height: 6px;
  width: 1px;
  background: #ccc;
}
._34MB4leIjAhG3LXl-DN8Ed {
  font-size: 11px;
  color: #333;
  line-height: 1.4;
}
._2t-V7ElqTaDS-PIn3jWR_X {
  max-height: 46px;
  overflow: hidden;
  position: relative;
}
._2kkldfTxIX9haSW1LXDlCS {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR…CKQZpBYiA5kBqgS3lB4gTBqlWrOAkpIkYNITNG5YdqCAAADbteKk49CTcAAAAASUVORK5CYII=);
  background-repeat: no-repeat;
  background-size: contain;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 8px;
  right: 0;
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
._3ykJaIHGFSdjdQuChaUN6z {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 8px;
}
._1vvO5ZUocEXs-aSvyWfhGT {
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
._3ykJaIHGFSdjdQuChaUN6z ._34MB4leIjAhG3LXl-DN8Ed {
  color: #666;
}
._34MB4leIjAhG3LXl-DN8Ed {
  font-size: 11px;
  color: #333;
  line-height: 1.4;
}
._3ykJaIHGFSdjdQuChaUN6z {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 8px;
}
._1vvO5ZUocEXs-aSvyWfhGT {
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
._3ykJaIHGFSdjdQuChaUN6z ._34MB4leIjAhG3LXl-DN8Ed {
  color: #666;
}
._34MB4leIjAhG3LXl-DN8Ed {
  font-size: 11px;
  color: #333;
  line-height: 1.4;
}
._3ykJaIHGFSdjdQuChaUN6z {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 8px;
}
._1vvO5ZUocEXs-aSvyWfhGT {
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
._3ykJaIHGFSdjdQuChaUN6z ._34MB4leIjAhG3LXl-DN8Ed {
  color: #666;
}
._34MB4leIjAhG3LXl-DN8Ed {
  font-size: 11px;
  color: #333;
  line-height: 1.4;
}
li {
  list-style: none;
}
._2DWI5MQavfzP27kRciy2ia {
  background: #fff;
  text-align: center;
  line-height: 45px;
  margin-top: -10px;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding-bottom: 34px;
}
._2DWI5MQavfzP27kRciy2ia ._33vevPA4wCUHDSyh8YgZyS {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFW…zeFUY7SWciSq2eyXKUaY3vM4eY+b283Z84AvTFm6V/BBgAX9PbT7jt1+QAAAAASUVORK5CYII=);
  width: 20px;
  height: 20px;
  display: inline-block;
  background-size: contain;
  vertical-align: middle;
  -webkit-animation: _1q14AVvEVu7nEzWDpellTN 1.2s infinite linear;
  animation: _1q14AVvEVu7nEzWDpellTN 1.2s infinite linear;
  margin-right: 10px;
}
</style>
