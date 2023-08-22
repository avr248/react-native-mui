import * as React from 'react';
import {
  FlexAlignType,
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  View,
  Text,
  ViewStyle,
} from 'react-native';

import TextTicker from 'react-native-text-ticker';

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
  amount: string;
  date: Array<string>;
  time: Array<string>;
  dateStyle?: StyleProp<TextStyle>;
  timeStyle?: StyleProp<TextStyle>;
  onPress?: (e: GestureResponderEvent) => void;
  right?: (props: { color: string; style?: Style }) => React.ReactNode;
  direction?: any;
  description?: any;
  theme: InternalTheme;
  style?: StyleProp<ViewStyle>;
  amountStyle?: StyleProp<TextStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  amountNumberOfLines?: number;
  descriptionNumberOfLines?: number;
  amountEllipsizeMode?: EllipsizeProp;
  descriptionEllipsizeMode?: EllipsizeProp;
};

const ListLastTransaction = ({
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
}: Props) => {
  let marqueeRef = React.useRef<TextTicker | null>(null);
  const directionContainerStyle = [vis.w10, vis.row, vis.fc, vis.ac];
  const amountContainerStyle = [vis.talRl, amountStyle];
  return (
    <TouchableRipple
      {...rest}
      style={[vis.w100, vis.row, vis.fc, vis.ac, vis.mb4]}
      onPress={onPress}
    >
      <View style={[vis.w90, vis.rowRl, vis.sb, vis.ac, vis.h5]}>
        <View style={directionContainerStyle}>{direction}</View>
        <View style={[vis.w50, vis.col, vis.h40p, vis.sb]}>
          <Text style={amountContainerStyle}>{amount}</Text>
          <TextTicker
            style={[vis.talRl, vis.fsRl, vis.w50, descriptionStyle]}
            duration={10000}
            isRTL={vis.isRTL.direction == 'rtl'}
            marqueeOnMount={false}
            ref={(c) => (marqueeRef.current = c)}
          >
            {description}
          </TextTicker>
        </View>
        <View
          style={[
            vis.w20,
            vis.col,
            vis.h40p,
            vis.sb,
            vis.isRTL ? vis.ae : vis.as,
          ]}
        >
          <Text style={timeStyle}>{time}</Text>
          <Text style={dateStyle}>{date}</Text>
        </View>
      </View>
    </TouchableRipple>
  );
};

ListLastTransaction.displayName = 'List.LastTransaction';

export default withInternalTheme(ListLastTransaction);
