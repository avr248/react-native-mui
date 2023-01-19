import * as React from 'react';
import { FlexAlignType, GestureResponderEvent, StyleProp, View, ViewStyle, TextStyle } from 'react-native';
import type { $RemoveChildren, EllipsizeProp, InternalTheme } from '../../types';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
interface Style {
    marginLeft?: number;
    marginRight?: number;
    marginVertical?: number;
    alignSelf?: FlexAlignType;
}
export declare type Props = $RemoveChildren<typeof TouchableRipple> & {
    amount: string;
    date: Array<string>;
    time: Array<string>;
    dateStyle?: StyleProp<TextStyle>;
    timeStyle?: StyleProp<TextStyle>;
    onPress?: (e: GestureResponderEvent) => void;
    right?: (props: {
        color: string;
        style?: Style;
    }) => React.ReactNode;
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
declare const _default: React.ComponentType<Pick<$RemoveChildren<React.ComponentType<Pick<import("react-native").PressableProps & React.RefAttributes<View> & {
    borderless?: boolean | undefined;
    background?: Object | undefined;
    centered?: boolean | undefined;
    disabled?: boolean | undefined;
    onPress?: ((e: GestureResponderEvent) => void) | undefined;
    onLongPress?: ((e: GestureResponderEvent) => void) | undefined;
    rippleColor?: string | undefined;
    underlayColor?: string | undefined;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme: InternalTheme;
}, "background" | "underlayColor" | "rippleColor" | keyof import("react-native").PressableProps | keyof React.RefAttributes<View> | "borderless" | "centered"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").PressableProps & React.RefAttributes<View> & {
    borderless?: boolean | undefined;
    background?: Object | undefined;
    centered?: boolean | undefined;
    disabled?: boolean | undefined;
    onPress?: ((e: GestureResponderEvent) => void) | undefined;
    onLongPress?: ((e: GestureResponderEvent) => void) | undefined;
    rippleColor?: string | undefined;
    underlayColor?: string | undefined;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme: InternalTheme;
}> & {
    ({ style, background: _background, borderless, disabled: disabledProp, rippleColor, underlayColor: _underlayColor, children, theme, ...rest }: import("../TouchableRipple/TouchableRipple").Props): JSX.Element;
    supported: boolean;
}, {}>> & {
    amount: string;
    date: string[];
    time: string[];
    dateStyle?: StyleProp<TextStyle>;
    timeStyle?: StyleProp<TextStyle>;
    onPress?: ((e: GestureResponderEvent) => void) | undefined;
    right?: ((props: {
        color: string;
        style?: Style | undefined;
    }) => React.ReactNode) | undefined;
    direction?: any;
    description?: any;
    theme: InternalTheme;
    style?: StyleProp<ViewStyle>;
    amountStyle?: StyleProp<TextStyle>;
    descriptionStyle?: StyleProp<TextStyle>;
    amountNumberOfLines?: number | undefined;
    descriptionNumberOfLines?: number | undefined;
    amountEllipsizeMode?: EllipsizeProp | undefined;
    descriptionEllipsizeMode?: EllipsizeProp | undefined;
}, "style" | "time" | "pointerEvents" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "nativeID" | "disabled" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLabelledBy" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityLanguage" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "direction" | "right" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "background" | "onFocus" | "onBlur" | "date" | "underlayColor" | "rippleColor" | "onHoverIn" | "onHoverOut" | "cancelable" | "delayHoverIn" | "delayHoverOut" | "delayLongPress" | "pressRetentionOffset" | "android_disableSound" | "android_ripple" | "testOnly_pressed" | "unstable_pressDelay" | "borderless" | "centered" | "description" | "descriptionStyle" | "descriptionNumberOfLines" | "descriptionEllipsizeMode" | "amount" | "amountStyle" | "amountNumberOfLines" | "amountEllipsizeMode" | "dateStyle" | "timeStyle"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<$RemoveChildren<React.ComponentType<Pick<import("react-native").PressableProps & React.RefAttributes<View> & {
    borderless?: boolean | undefined;
    background?: Object | undefined;
    centered?: boolean | undefined;
    disabled?: boolean | undefined;
    onPress?: ((e: GestureResponderEvent) => void) | undefined;
    onLongPress?: ((e: GestureResponderEvent) => void) | undefined;
    rippleColor?: string | undefined;
    underlayColor?: string | undefined;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme: InternalTheme;
}, "background" | "underlayColor" | "rippleColor" | keyof import("react-native").PressableProps | keyof React.RefAttributes<View> | "borderless" | "centered"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").PressableProps & React.RefAttributes<View> & {
    borderless?: boolean | undefined;
    background?: Object | undefined;
    centered?: boolean | undefined;
    disabled?: boolean | undefined;
    onPress?: ((e: GestureResponderEvent) => void) | undefined;
    onLongPress?: ((e: GestureResponderEvent) => void) | undefined;
    rippleColor?: string | undefined;
    underlayColor?: string | undefined;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme: InternalTheme;
}> & {
    ({ style, background: _background, borderless, disabled: disabledProp, rippleColor, underlayColor: _underlayColor, children, theme, ...rest }: import("../TouchableRipple/TouchableRipple").Props): JSX.Element;
    supported: boolean;
}, {}>> & {
    amount: string;
    date: string[];
    time: string[];
    dateStyle?: StyleProp<TextStyle>;
    timeStyle?: StyleProp<TextStyle>;
    onPress?: ((e: GestureResponderEvent) => void) | undefined;
    right?: ((props: {
        color: string;
        style?: Style | undefined;
    }) => React.ReactNode) | undefined;
    direction?: any;
    description?: any;
    theme: InternalTheme;
    style?: StyleProp<ViewStyle>;
    amountStyle?: StyleProp<TextStyle>;
    descriptionStyle?: StyleProp<TextStyle>;
    amountNumberOfLines?: number | undefined;
    descriptionNumberOfLines?: number | undefined;
    amountEllipsizeMode?: EllipsizeProp | undefined;
    descriptionEllipsizeMode?: EllipsizeProp | undefined;
}> & {
    ({ date, time, direction, right, amount, description, onPress, theme, style, amountStyle, amountNumberOfLines, descriptionNumberOfLines, amountEllipsizeMode, descriptionEllipsizeMode, descriptionStyle, ...rest }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
