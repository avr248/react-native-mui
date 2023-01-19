import * as React from 'react';
import {
  FlexAlignType,
  GestureResponderEvent,
  StyleProp,
  View,
  ViewStyle,
  TextStyle
} from 'react-native';
import { withInternalTheme } from '../../core/theming';
import type {
  $RemoveChildren,
  EllipsizeProp,
  InternalTheme,
} from '../../types';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import Text from '../Typography/Text';
import { vis } from '../../index';
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
const ListLastCardTransaction = ({
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
}: Props) => {
    return (
        <TouchableRipple {...rest} style={[vis.w100p, vis.row, vis.ac, vis.mb3]} onPress={onPress}>
            <View style={[vis.w100pe, vis.rowRl, vis.sb, vis.as, vis.h40p]}>
                <View style={[vis.rowRl, vis.fsRl, vis.ac, vis.w60pe, vis.h50p]}>
                    {direction}
                    <View style={[!vis.isRTL ? vis.ml3 : [ vis.fs, vis.ae, vis.mr3, vis.w80pe]]}>
                        <Text style={[vis.w100p, vis.talRl]}>{amount}</Text>
                        <Text style={[vis.w100p, vis.talRl]}>{description}</Text>
                    </View>
                </View>
                <View style={[vis.colRl, vis.fc, vis.h50p, !vis.isRTL ? vis.ae : vis.as]}>
                    <View>
                        <Text>{time}</Text>
                    </View>
                    <View>
                        <Text>{date}</Text>
                    </View> 
                </View>       
            </View>
        </TouchableRipple>
    );
};

ListLastCardTransaction.displayName = 'List.LastCardTransaction';
export default withInternalTheme(ListLastCardTransaction);
