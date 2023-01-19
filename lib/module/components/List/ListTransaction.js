function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { View } from 'react-native';
import { withInternalTheme } from '../../core/theming';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import Text from '../Typography/Text';
import { vis } from '../../index';
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
  return /*#__PURE__*/React.createElement(TouchableRipple, _extends({}, rest, {
    style: [vis.w100p, vis.row, vis.ac, vis.mb3],
    onPress: onPress
  }), /*#__PURE__*/React.createElement(View, {
    style: [vis.w100pe, vis.rowRl, vis.sb, vis.as, vis.h40p]
  }, /*#__PURE__*/React.createElement(View, {
    style: [vis.rowRl, vis.fsRl, vis.ac, vis.w60pe, vis.h50p]
  }, direction, /*#__PURE__*/React.createElement(View, {
    style: [!vis.isRTL ? vis.ml3 : [vis.fs, vis.ae, vis.mr3, vis.w80pe]]
  }, /*#__PURE__*/React.createElement(Text, {
    style: [vis.w100p, vis.talRl]
  }, amount), /*#__PURE__*/React.createElement(Text, {
    style: [vis.w100p, vis.talRl]
  }, description))), /*#__PURE__*/React.createElement(View, {
    style: [vis.colRl, vis.fc, vis.h50p, !vis.isRTL ? vis.ae : vis.as]
  }, /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Text, null, time)), /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Text, null, date)))));
};
ListLastCardTransaction.displayName = 'List.LastCardTransaction';
export default withInternalTheme(ListLastCardTransaction);
//# sourceMappingURL=ListTransaction.js.map