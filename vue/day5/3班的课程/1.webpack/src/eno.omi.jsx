import {
  // register component
  WeElement,
  // when you use component, you should define
  define,
  h
} from "omi";

export default class extends WeElement {
  css() {
    return `header {
  text-align: center;
  background: red;
  width: 100%;
  height: 60px;
  line-height: 60px;
  color: white; }
`;
  }
  render() {
    return h("header", null, this.data.title);
  }

  install() {
    this.data = {
      title: "支付宝"
    };
  }
}
