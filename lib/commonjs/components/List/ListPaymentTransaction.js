"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _theming = require("../../core/theming");
var _index = require("../../index");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const ListPaymentTransaction = _ref => {
  let {
    // date,
    // time,
    transactions,
    // totalAmount,
    // theme,
    // style,
    tranAmountStyle,
    tranProductStyle
  } = _ref;
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_index.vis.w75, _index.vis.col, _index.vis.sb, _index.vis.ac]
  }, transactions.length && transactions.map(tran => /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_index.vis.w75, _index.vis.rowRl, _index.vis.sb, _index.vis.ac, {
      paddingBottom: 10
    }]
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_index.vis.w30, _index.vis.col, _index.vis.h40p, _index.vis.sb, _index.vis.asRl]
  }, /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: tranAmountStyle
  }, tran === null || tran === void 0 ? void 0 : tran.amount)), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_index.vis.w45, _index.vis.col, _index.vis.h40p, _index.vis.sb, _index.vis.aeRl]
  }, /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: tranProductStyle
  }, tran === null || tran === void 0 ? void 0 : tran.product)))));
};
ListPaymentTransaction.displayName = 'List.PaymentTransaction';
var _default = (0, _theming.withInternalTheme)(ListPaymentTransaction);
exports.default = _default;
//# sourceMappingURL=ListPaymentTransaction.js.map