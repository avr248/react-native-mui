"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeTextTicker = _interopRequireDefault(require("react-native-text-ticker"));
var _theming = require("../../core/theming");
var _index = require("../../index");
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
    dateStyle,
    timeStyle,
    ...rest
  } = _ref;
  let marqueeRef = React.useRef(null);
  const directionContainerStyle = [_index.vis.w10, _index.vis.row, _index.vis.fc, _index.vis.ac];
  const amountContainerStyle = [_index.vis.talRl, amountStyle];
  return /*#__PURE__*/React.createElement(_TouchableRipple.default, _extends({}, rest, {
    style: [_index.vis.w100, _index.vis.row, _index.vis.fc, _index.vis.ac, _index.vis.mb4],
    onPress: onPress
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_index.vis.w90, _index.vis.rowRl, _index.vis.sb, _index.vis.ac, _index.vis.h5]
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: directionContainerStyle
  }, direction), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_index.vis.w50, _index.vis.col, _index.vis.h40p, _index.vis.sb]
  }, /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: amountContainerStyle
  }, amount), /*#__PURE__*/React.createElement(_reactNativeTextTicker.default, {
    style: [_index.vis.talRl, _index.vis.fsRl, _index.vis.w50, descriptionStyle],
    duration: 10000,
    isRTL: _index.vis.isRTL.direction == 'rtl',
    marqueeOnMount: false,
    ref: c => marqueeRef.current = c
  }, description)), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_index.vis.w20, _index.vis.col, _index.vis.h40p, _index.vis.sb, _index.vis.isRTL ? _index.vis.ae : _index.vis.as]
  }, /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: timeStyle
  }, time), /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: dateStyle
  }, date))));
};
ListLastTransaction.displayName = 'List.LastTransaction';
var _default = (0, _theming.withInternalTheme)(ListLastTransaction);
exports.default = _default;
//# sourceMappingURL=ListTransaction.js.map