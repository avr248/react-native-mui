import * as React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import type { $RemoveChildren, InternalTheme } from '../../types';
import type TouchableRipple from '../TouchableRipple/TouchableRipple';
export declare type Props = $RemoveChildren<typeof TouchableRipple> & {
    date?: Array<string>;
    time?: Array<string>;
    transactions?: any;
    totalAmount?: string;
    theme?: InternalTheme;
    style?: StyleProp<ViewStyle>;
    tranAmountStyle?: StyleProp<TextStyle>;
    tranProductStyle?: StyleProp<TextStyle>;
};
declare const _default: React.ComponentType<Pick<{
    theme: InternalTheme;
}, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<{
    theme: InternalTheme;
}> & {
    ({ transactions, tranAmountStyle, tranProductStyle, }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
