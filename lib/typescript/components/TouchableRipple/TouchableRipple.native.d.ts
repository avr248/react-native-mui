import * as React from 'react';
import { PressableAndroidRippleConfig, StyleProp, ViewStyle, Pressable, GestureResponderEvent } from 'react-native';
import type { InternalTheme } from '../../types';
declare type Props = React.ComponentProps<typeof Pressable> & {
    borderless?: boolean;
    background?: PressableAndroidRippleConfig;
    disabled?: boolean;
    onPress?: (e: GestureResponderEvent) => void | null;
    rippleColor?: string;
    underlayColor?: string;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme: InternalTheme;
};
declare const _default: React.ComponentType<Pick<import("react-native").PressableProps & React.RefAttributes<import("react-native").View> & {
    borderless?: boolean | undefined;
    background?: PressableAndroidRippleConfig | undefined;
    disabled?: boolean | undefined;
    onPress?: ((e: GestureResponderEvent) => void | null) | undefined;
    rippleColor?: string | undefined;
    underlayColor?: string | undefined;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme: InternalTheme;
}, "background" | "underlayColor" | "rippleColor" | keyof import("react-native").PressableProps | keyof React.RefAttributes<import("react-native").View> | "borderless"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").PressableProps & React.RefAttributes<import("react-native").View> & {
    borderless?: boolean | undefined;
    background?: PressableAndroidRippleConfig | undefined;
    disabled?: boolean | undefined;
    onPress?: ((e: GestureResponderEvent) => void | null) | undefined;
    rippleColor?: string | undefined;
    underlayColor?: string | undefined;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme: InternalTheme;
}> & {
    ({ style, background, borderless, disabled: disabledProp, rippleColor, underlayColor, children, theme, ...rest }: Props): JSX.Element;
    supported: boolean;
}, {}>;
export default _default;
