<template>
  <div class="_2m6ykQWMTX3_dW7Ab-XsY8">
    <div class="_1JHn9KhcnvNrar1crXmTIk" :class="{
      '_350JA45HCnWxLcngmBwzjl':bool
    }">
      <div class="XojVIq9qzHwkS-H5hJLWh">广东省华侨职业技术学校</div>
    </div>
    <div class="_1GdfNwKnUZUXB2ckSYH1m8">
      <input disabled readonly placeholder="请输入商家或商品名称">
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      bool: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.scroll, true);
  },
  methods: {
    scroll() {
      if (window.scrollY >= 200) {
        this.bool = !0;
      } else {
        this.bool = 0;
      }
    },
  },
  destroyed() {
    window.onscroll = null;
    window.removeEventListener('scroll', this.scroll, false);
  },
});
</script>

<style lang="scss" scoped>
._2m6ykQWMTX3_dW7Ab-XsY8 {
  position: fixed;
  z-index: 15;
  top: 0;
  left: 0;
  right: 0;
  left: constant(safe-area-inset-left) !important;
  left: env(safe-area-inset-left) !important;
  right: constant(safe-area-inset-right) !important;
  right: env(safe-area-inset-right) !important;
  height: 50px;
  padding: 0 10px;
  background: #1c1b20;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
._2m6ykQWMTX3_dW7Ab-XsY8 ._1JHn9KhcnvNrar1crXmTIk {
  line-height: 30px;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  font-size: 16px;
  color: #fff;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  max-width: 200px;
  transition: 500ms;
}
._2m6ykQWMTX3_dW7Ab-XsY8 ._1JHn9KhcnvNrar1crXmTIk::before {
  content: "";
  width: 15px;
  height: 15px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAppJREFUSA3FlzFPFFEUhXck0mBhLEhw6SykI9Q0Uiok2lBbqdEQpKWzING/gD8AawoqDTExkdLKSEQqFRstNDbKmvU7s++SO883+2Z3Cm9y9t737jnnzuzszux2Ov8piqZz+/3+LNybYBlcAZeB4gQcgz2wWxTFJ3L7YOAMeAp6IBfiiDvTajIGK+AHGDWkWRlrOMI18Cea+IL1HXAVXAhQrT31fEi7NtJwBDpTP/SI9bWciThAXAt5NDtziLqm301JfgUu5YZaX9ygIZUhr/w1h7Q94JevH3htPDQaLq3FtvWSGVYXnBqbvBQT2ZsFO+AkQLW+apVgbwlYyLNbIfgFzQfGJO/7nmr2NPSb41ipvdTwfSOQ78d+Z2uae45496wRCno6u7rYSfDvObJuMOmAdOiIczGLnt7eutAdrBIQ5xz50DfP+QW13Qa1/TnqjbP0Ht67Ew/uOfdJV1v50opETvW8x2lCM9jibTlwb81iTKQ36odr0fkdeL/4jN+55nVXl2V48syzeAa+BKier3kqeQ/vjcQFR7fsjvAjdXxgjj28lBbIw0KP03TAmAD+k7uaZuZ38Vm1icFzYqgK0pYTvKc+P1SQaEoDjpzPVoJW3YJ8Efi703qVkV+hX3dDv8ozr4IBccMJf1Lrp06jEBdIY7HRSCgSiknw1pTk12D4NRro9BkR10Ie/rucPwYEC+C3OZAf51Rwnji+tAs5TbKPcNMZqbydJLKpngguNuu42X1M9F3cdWa/qG/EQu0B9SykGfseUPpjMAXemCNZA27ZcNVhj1SGuFPWb5Ux0j36uLQdvPRIjwJUW4jzzw+CtsO7mPrntQ2zrF79z5s20zGeBs9tksvam27jndUyoAAPgR4AgurG/8FswF+AQn0Q4NtYewAAAABJRU5ErkJggg==);
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  margin-right: 5px;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}
._2m6ykQWMTX3_dW7Ab-XsY8 .XojVIq9qzHwkS-H5hJLWh {
  max-width: 140px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
._2m6ykQWMTX3_dW7Ab-XsY8 ._1JHn9KhcnvNrar1crXmTIk::after {
  content: "";
  width: 10px;
  height: 10px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAJ1JREFUOBHtkkEKwjAQRTMWN9FLlHoQr+wFpLSnsJtScO/WXXwDWSUSmIB2kw+PUNp5Gabj3L8SQhA4WO8rFdyRLUgvFmlJ+EI0wGiVfm0AiQeVaZ5g6rRJ8wkww5/M9IR4As0bjunVpbVJv9VngS6+CPGsO+jmDDNoNujrTFRR3GQV02NuN9CYfkBpbTx9POAqImtFT3kJ3ene7ZsPLHfnp+4NdnkAAAAASUVORK5CYII=);
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
  margin-left: 2px;
  margin-right: 20px;
}
._2m6ykQWMTX3_dW7Ab-XsY8 ._1GdfNwKnUZUXB2ckSYH1m8 {
  -webkit-flex: 1 0 0;
  -ms-flex: 1 0 0px;
  flex: 1 0 0;
  position: relative;
  background: #fff;
  border-radius: 100px;
}
._2m6ykQWMTX3_dW7Ab-XsY8 ._1GdfNwKnUZUXB2ckSYH1m8 input {
  width: 100%;
  position: relative;
  border: none;
  height: 30px;
  padding-left: 30px;
  box-sizing: border-box;
  border-radius: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 30px;
  font-size: 14px;
  opacity: 1;
}

._2m6ykQWMTX3_dW7Ab-XsY8 ._1GdfNwKnUZUXB2ckSYH1m8::after {
  content: "";
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA3VJREFUSA3tlktIVFEYx52XVhNkbRrHomkzIUSQzigi1IDZiyICFSEEXfXYVxAYE9U2aFFoEL0WEREZSItcaNEwPjPaFFE65ThKWJvGmkej/b6Ze4eZO3dyUtqEB879zvnO//v/z/nuPefcoqKV8r9nwFDoAr1er7Gnp6cW/IGFhYWtWJvBYAhjQ/QHTCZTz9DQ0NdC+RYVbmpqMk1MTLRB6EVgUz5iJpFg7L7ZbO4YGBgI5MOp/j8K19XV2aPR6GMEq5WAD9huo9H4GjuDfy11C6L7sfX4iqlRxk8ODw/fop235BWurq52JhKJPiLt1AD1zOjo6EOsbnG73ZsRv0xtVQAXwZ/XBePUFfZ4PKXhcHgQEieYvuLi4ka/3/8tH0mmnwm0z8/Pd+GzUNsQv5M5rraNaiPTInpFREnhGP5DhYoKh6SYuBPSxnZKJqStLSatw+VybUe0E3+cd7V7ZGTkixazWD8UCo2Vl5dvg2cndf309PQTbYzeio8DMjLbLmY/rg0otM/XfQ6OX+CPVVVVrdPG6QkfERAzva0F/01f2VLPibEwgYPa2Cxh3ocNQXkns3wUr7TgJfSfKTFubWyWMF+jbB0pn1NmeU9W+klhUHnThFnCeNcoIz/SiOU1VB6VN82WJcx+nVFGbGnE8hpJHl6fyptmyxIuKSkJMhIjRY7a2toNadQSGwhWKqE5uyNLuL+/PwKwjwBzLBY7vES9ZJhcLvAkdwhb66mWK0tYBjk0HiigsxKsDSi0Pz4+3g62jPpucHDwjTYuR9hqtd4j1e8BVhB8WhtQSF9uNTguCRbboRdj0HNyM+3jZkqmh8Bmjs1Hejg9n3LB9JJmF7G9xO7Vw+mmcmpq6qPdbo8S0EBt5NxNOJ1OfyAQmNcjUX01NTU7IpHIC/oV1Fl2iScYDP5UxzOtrrAAONh9CMo+3EOtj8fjLfSjDocjODk5OScYKfId8Hp2lZWVXeAAuo6rlNUusNpVZG0OHplITtFNdSaK26oBnqv4ZBVSZNXT1BnI5Q9EfoesVCmyFa9hx/DfxMo35OX4Tb5v2umyqLAgZVWkuQWyZroykdVphlTjLabbYrHcUP+3mLDg7+IXcQ/iL1PQ1LMg4cwAPh4z/2EbSauNVIY5dEI+n+97JkZtV1ZWHiUDrWzRU1yxOaeXilux/zQDvwFiGVdw0BGAOQAAAABJRU5ErkJggg==);
  background-repeat: no-repeat;
  background-size: contain;
  width: 15px;
  height: 15px;
  margin: 0 5px 0 10px;
  position: absolute;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

._2m6ykQWMTX3_dW7Ab-XsY8 ._1JHn9KhcnvNrar1crXmTIk._350JA45HCnWxLcngmBwzjl {
  max-width: 0;
}
</style>
