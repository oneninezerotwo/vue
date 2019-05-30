import {
  // register component
  WeElement,
  // when you use component, you should define
  define,
  h
} from "omi";

// JS

export default class extends WeElement {
  css() {
    return `/* CSS */
header {
  text-align: center;
  width: 100%;
  height: 50px;
  color: white;
  line-height: 50px;
  background: red; }
`;
  }
  render() {
    return h("header", null, this.data.title);
  }

  install() {
    this.data = {
      title: "微信"
    };
  }
}
