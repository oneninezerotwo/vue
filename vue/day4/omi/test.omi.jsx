import {
  // register component
  WeElement,
  // when you use component, you should define
  define,
  h
} from "omi";

export default class extends WeElement {
  css() {
    return `p {
  color: red; }
`;
  }
  render() {
    return h(
      "div",
      null,
      h("p", null, "hello world"),
      h("p", null, this.data.title)
    );
  }

  install() {
    this.data = {
      title: "A"
    };
  }
}
