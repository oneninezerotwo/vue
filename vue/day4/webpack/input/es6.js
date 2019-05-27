let a = (a, b) => { return a + b; }

const b = {
    a() {
        return 'mmm'
    }
}

const c = {
    ...b,
    skill: ['ps', 'css', 'js']
}

// function _objectSpread(target) {
//     for (var i = 1; i < arguments.length; i++) {
//         var source = arguments[i] != null ? arguments[i] : {};
//         var ownKeys = Object.keys(source);
//         if (typeof Object.getOwnPropertySymbols === 'function') {
//             ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
//                 return Object.getOwnPropertyDescriptor(source, sym).enumerable;
//             }));
//         }
//         ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); });
//     } return target;
// }


// function _defineProperty(obj, key, value) {
//     if (key in obj) {
//         Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
//     }
//     else { obj[key] = value; } return obj;
// }
// var a = function a(_a, b) { return _a + b; };
// var b = { a: function a() { return 'mmm'; } };
// var c = _objectSpread({}, b, { skill: ['ps', 'css', 'js'] });