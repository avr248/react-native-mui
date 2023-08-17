import * as React from 'react';
import { FlexAlignType, GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from 'react-native';
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
    balance?: any;
    balanceTitle?: string;
    description?: any;
    theme: InternalTheme;
    style?: StyleProp<ViewStyle>;
    balanceStyle?: StyleProp<ViewStyle>;
    amountStyle?: StyleProp<TextStyle>;
    descriptionStyle?: StyleProp<TextStyle>;
    amountNumberOfLines?: number;
    descriptionNumberOfLines?: number;
    amountEllipsizeMode?: EllipsizeProp;
    descriptionEllipsizeMode?: EllipsizeProp;
};
declare const _default: React.ComponentType<Pick<$RemoveChildren<{
    ({ style, background, borderless, disabled: disabledProp, rippleColor, underlayColor, children, theme: themeOverrides, ...rest }: import("../TouchableRipple/TouchableRipple").Props): JSX.Element;
    supported: boolean;
}> & {
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
    balance?: any;
    balanceTitle?: string | undefined;
    description?: any;
    theme: InternalTheme;
    style?: StyleProp<ViewStyle>;
    balanceStyle?: StyleProp<ViewStyle>;
    amountStyle?: StyleProp<TextStyle>;
    descriptionStyle?: StyleProp<TextStyle>;
    amountNumberOfLines?: number | undefined;
    descriptionNumberOfLines?: number | undefined;
    amountEllipsizeMode?: EllipsizeProp | undefined;
    descriptionEllipsizeMode?: EllipsizeProp | undefined;
}, "style" | "time" | "onLayout" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "testID" | "nativeID" | "disabled" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLabelledBy" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityLanguage" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "direction" | "right" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "background" | "onFocus" | "onBlur" | "date" | "underlayColor" | "rippleColor" | "borderless" | "onHoverIn" | "onHoverOut" | "cancelable" | "delayHoverIn" | "delayHoverOut" | "delayLongPress" | "pressRetentionOffset" | "android_disableSound" | "android_ripple" | "testOnly_pressed" | "unstable_pressDelay" | "centered" | "description" | "descriptionStyle" | "descriptionNumberOfLines" | "descriptionEllipsizeMode" | "amount" | "balance" | "balanceTitle" | "amountNumberOfLines" | "amountEllipsizeMode" | "amountStyle" | "balanceStyle" | "dateStyle" | "timeStyle"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<$RemoveChildren<{
    ({ style, background, borderless, disabled: disabledProp, rippleColor, underlayColor, children, theme: themeOverrides, ...rest }: import("../TouchableRipple/TouchableRipple").Props): JSX.Element;
    supported: boolean;
}> & {
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
    balance?: any;
    balanceTitle?: string | undefined;
    description?: any;
    theme: InternalTheme;
    style?: StyleProp<ViewStyle>;
    balanceStyle?: StyleProp<ViewStyle>;
    amountStyle?: StyleProp<TextStyle>;
    descriptionStyle?: StyleProp<TextStyle>;
    amountNumberOfLines?: number | undefined;
    descriptionNumberOfLines?: number | undefined;
    amountEllipsizeMode?: EllipsizeProp | undefined;
    descriptionEllipsizeMode?: EllipsizeProp | undefined;
}> & {
    ({ date, time, direction, right, amount, balance, balanceTitle, description, onPress, theme, style, amountNumberOfLines, descriptionNumberOfLines, amountEllipsizeMode, descriptionEllipsizeMode, descriptionStyle, amountStyle, balanceStyle, dateStyle, timeStyle, ...rest }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
//# sourceMappingURL=ListTransaction.d.ts.map