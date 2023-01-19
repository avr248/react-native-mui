function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { View, Text } from 'react-native';
import { withInternalTheme } from '../../core/theming';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import { vis } from '../../index';
import TextTicker from 'react-native-text-ticker';
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
  const directionContainerStyle = [vis.w10, vis.row, vis.fc, vis.ac];
  const amountContainerStyle = [vis.talRl, amountStyle];
  return /*#__PURE__*/React.createElement(TouchableRipple, _extends({}, rest, {
    style: [vis.w100, vis.row, vis.fc, vis.ac, vis.mb4],
    onPress: onPress
  }), /*#__PURE__*/React.createElement(View, {
    style: [vis.w90, vis.rowRl, vis.sb, vis.ac, vis.h5]
  }, /*#__PURE__*/React.createElement(View, {
    style: directionContainerStyle
  }, direction), /*#__PURE__*/React.createElement(View, {
    style: [vis.w50, vis.col, vis.h40p, vis.sb]
  }, /*#__PURE__*/React.createElement(Text, {
    style: amountContainerStyle
  }, amount), /*#__PURE__*/React.createElement(TextTicker, {
    style: [vis.talRl, vis.fsRl, vis.w50, descriptionStyle],
    duration: 10000,
    isRTL: vis.isRTL.direction == 'rtl',
    marqueeOnMount: false,
    ref: c => marqueeRef.current = c
  }, description)), /*#__PURE__*/React.createElement(View, {
    style: [vis.w20, vis.col, vis.h40p, vis.sb, vis.isRTL ? vis.ae : vis.as]
  }, /*#__PURE__*/React.createElement(Text, {
    style: timeStyle
  }, time), /*#__PURE__*/React.createElement(Text, {
    style: dateStyle
  }, date))));
};
ListLastTransaction.displayName = 'List.LastTransaction';
export default withInternalTheme(ListLastTransaction);
//# sourceMappingURL=ListLastTransaction.js.map