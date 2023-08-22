import * as React from 'react';
import {
  FlexAlignType,
  StyleProp,
  TextStyle,
  View,
  Text,
  ViewStyle,
} from 'react-native';

import { withInternalTheme } from '../../core/theming';
import { vis } from '../../index';
import type {
  $RemoveChildren,
  EllipsizeProp,
  InternalTheme,
} from '../../types';
import TouchableRipple from '../TouchableRipple/TouchableRipple';

interface Style {
  marginLeft?: number;
  marginRight?: number;
  marginVertical?: number;
  alignSelf?: FlexAlignType;
}

export type Props = $RemoveChildren<typeof TouchableRipple> & {
  date: Array<string>;
  time: Array<string>;
  transactions: Array<string>;
  totalAmount: string;
  theme: InternalTheme;
  style?: StyleProp<ViewStyle>;
  tranAmountStyle?: StyleProp<TextStyle>;
  tranProductStyle?: StyleProp<TextStyle>;
};

const ListPaymentTransaction = ({
  date,
  time,
  transactions,
  totalAmount,
  theme,
  style,
  tranAmountStyle,
  tranProductStyle,
  ...rest
}: Props) => {
    return (
      <View style={[vis.w75, vis.col, vis.sb, vis.ac]}>
        {
          transactions.length && transactions.map(tran => 
          <View style={[vis.w75, vis.rowRl, vis.sb, vis.ac, { paddingBottom: 10 }]}>
              <View style={[vis.w30, vis.col, vis.h40p, vis.sb, vis.asRl]}>
                  <Text style={tranAmountStyle}>{tran.amount}</Text>
              </View>
              <View style={[vis.w45, vis.col, vis.h40p, vis.sb, vis.aeRl]}>
                  <Text style={tranProductStyle}>{tran.product}</Text>
              </View>
          </View>
        )}
      </View>
    );
};

ListPaymentTransaction.displayName = 'List.PaymentTransaction';
export default withInternalTheme(ListPaymentTransaction);
