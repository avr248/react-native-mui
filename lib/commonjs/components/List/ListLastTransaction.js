"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _theming = require("../../core/theming");
var _vis = _interopRequireDefault(require("../../styles/vis"));
var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple/TouchableRipple"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ListLastTransaction = _ref => {
  let {
    date,
    time,
    direction,
    right,
    amount,
    balance,
    balanceTitle,
    description,
    onPress,
    theme,
    style,
    amountNumberOfLines = 1,
    descriptionNumberOfLines = 2,
    amountEllipsizeMode,
    descriptionEllipsizeMode,
    descriptionStyle,
    amountStyle,
    balanceStyle,
    dateStyle,
    timeStyle,
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(_TouchableRipple.default, _extends({}, rest, {
    style: [_vis.default.w100, _vis.default.rowRl, _vis.default.fc, _vis.default.ac, _vis.default.mb5],
    onPress: onPress
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_vis.default.w90, _vis.default.col, _vis.default.sb, _vis.default.ac, {
      borderBottomWidth: 0.2,
      borderBottomColor: 'gray'
    }]
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_vis.default.w90, _vis.default.rowRl, _vis.default.sb, _vis.default.ac]
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_vis.default.w30, _vis.default.col, _vis.default.sb, _vis.default.asRl]
  }, /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: timeStyle
  }, balance), /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: balanceStyle
  }, balanceTitle)), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_vis.default.w20, _vis.default.col, _vis.default.sb, _vis.default.aeRl]
  }, /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: timeStyle
  }, time), /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: dateStyle
  }, date))), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_vis.default.w75, _vis.default.col, _vis.default.feRl, _vis.default.ac, _vis.default.pb2]
  }, /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: [amountStyle, _vis.default.fos4, _vis.default.mb1]
  }, amount), /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: descriptionStyle
  }, description))));
};
ListLastTransaction.displayName = 'List.LastTransaction';
var _default = (0, _theming.withInternalTheme)(ListLastTransaction);
exports.default = _default;
//# sourceMappingURL=ListLastTransaction.js.map