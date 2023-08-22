import * as React from 'react';
import { View, Text } from 'react-native';
import { withInternalTheme } from '../../core/theming';
import { vis } from '../../index';
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
  return /*#__PURE__*/React.createElement(View, {
    style: [vis.w75, vis.col, vis.sb, vis.ac]
  }, transactions.length && transactions.map(tran => /*#__PURE__*/React.createElement(View, {
    style: [vis.w75, vis.rowRl, vis.sb, vis.ac, {
      paddingBottom: 10
    }]
  }, /*#__PURE__*/React.createElement(View, {
    style: [vis.w30, vis.col, vis.h40p, vis.sb, vis.asRl]
  }, /*#__PURE__*/React.createElement(Text, {
    style: tranAmountStyle
  }, tran === null || tran === void 0 ? void 0 : tran.amount)), /*#__PURE__*/React.createElement(View, {
    style: [vis.w45, vis.col, vis.h40p, vis.sb, vis.aeRl]
  }, /*#__PURE__*/React.createElement(Text, {
    style: tranProductStyle
  }, tran === null || tran === void 0 ? void 0 : tran.product)))));
};
ListPaymentTransaction.displayName = 'List.PaymentTransaction';
export default withInternalTheme(ListPaymentTransaction);
//# sourceMappingURL=ListPaymentTransaction.js.map