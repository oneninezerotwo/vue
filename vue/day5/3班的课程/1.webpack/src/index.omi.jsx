import {
  // register component
  WeElement,
  // when you use component, you should define
  define,
  h
} from "omi";

export default class extends WeElement {
  render() {
    return h("div", null, "abc");
  }
}
