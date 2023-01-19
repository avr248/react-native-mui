"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _theming = require("../../core/theming");
var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple/TouchableRipple"));
var _Text = _interopRequireDefault(require("../Typography/Text"));
var _index = require("../../index");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ListLastCardTransaction = _ref => {
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
    amountStyle,
    amountNumberOfLines = 1,
    descriptionNumberOfLines = 2,
    amountEllipsizeMode,
    descriptionEllipsizeMode,
    descriptionStyle,
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(_TouchableRipple.default, _extends({}, rest, {
    style: [_index.vis.w100p, _index.vis.row, _index.vis.ac, _index.vis.mb3],
    onPress: onPress
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_index.vis.w100pe, _index.vis.rowRl, _index.vis.sb, _index.vis.as, _index.vis.h40p]
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_index.vis.rowRl, _index.vis.fsRl, _index.vis.ac, _index.vis.w60pe, _index.vis.h50p]
  }, direction, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [!_index.vis.isRTL ? _index.vis.ml3 : [_index.vis.fs, _index.vis.ae, _index.vis.mr3, _index.vis.w80pe]]
  }, /*#__PURE__*/React.createElement(_Text.default, {
    style: [_index.vis.w100p, _index.vis.talRl]
  }, amount), /*#__PURE__*/React.createElement(_Text.default, {
    style: [_index.vis.w100p, _index.vis.talRl]
  }, description))), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [_index.vis.colRl, _index.vis.fc, _index.vis.h50p, !_index.vis.isRTL ? _index.vis.ae : _index.vis.as]
  }, /*#__PURE__*/React.createElement(_reactNative.View, null, /*#__PURE__*/React.createElement(_Text.default, null, time)), /*#__PURE__*/React.createElement(_reactNative.View, null, /*#__PURE__*/React.createElement(_Text.default, null, date)))));
};
ListLastCardTransaction.displayName = 'List.LastCardTransaction';
var _default = (0, _theming.withInternalTheme)(ListLastCardTransaction);
exports.default = _default;
//# sourceMappingURL=ListTransaction.js.map