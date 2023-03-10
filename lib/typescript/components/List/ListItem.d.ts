import * as React from 'react';
import { FlexAlignType, GestureResponderEvent, StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import type { $RemoveChildren, EllipsizeProp, InternalTheme } from '../../types';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
declare type Title = React.ReactNode | ((props: {
    selectable: boolean;
    ellipsizeMode: EllipsizeProp | undefined;
    color: string;
    fontSize: number;
}) => React.ReactNode);
declare type Description = React.ReactNode | ((props: {
    selectable: boolean;
    ellipsizeMode: EllipsizeProp | undefined;
    color: string;
    fontSize: number;
}) => React.ReactNode);
interface Style {
    marginLeft?: number;
    marginRight?: number;
    marginVertical?: number;
    alignSelf?: FlexAlignType;
}
export declare type Props = $RemoveChildren<typeof TouchableRipple> & {
    /**
     * Title text for the list item.
     */
    title: Title;
    /**
     * Description text for the list item or callback which returns a React element to display the description.
     */
    description?: Description;
    /**
     * Callback which returns a React element to display on the left side.
     */
    left?: (props: {
        color: string;
        style: Style;
    }) => React.ReactNode;
    /**
     * Callback which returns a React element to display on the right side.
     */
    right?: (props: {
        color: string;
        style?: Style;
    }) => React.ReactNode;
    /**
     * Function to execute on press.
     */
    onPress?: (e: GestureResponderEvent) => void;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * Style that is passed to the wrapping TouchableRipple element.
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Style that is passed to Title element.
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * Style that is passed to Description element.
     */
    descriptionStyle?: StyleProp<TextStyle>;
    /**
     * Truncate Title text such that the total number of lines does not
     * exceed this number.
     */
    titleNumberOfLines?: number;
    /**
     * Truncate Description text such that the total number of lines does not
     * exceed this number.
     */
    descriptionNumberOfLines?: number;
    /**
     * Ellipsize Mode for the Title.  One of `'head'`, `'middle'`, `'tail'`, `'clip'`.
     *
     * See [`ellipsizeMode`](https://reactnative.dev/docs/text#ellipsizemode)
     */
    titleEllipsizeMode?: EllipsizeProp;
    /**
     * Ellipsize Mode for the Description.  One of `'head'`, `'middle'`, `'tail'`, `'clip'`.
     *
     * See [`ellipsizeMode`](https://reactnative.dev/docs/text#ellipsizemode)
     */
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
    /**
     * Title text for the list item.
     */
    title: Title;
    /**
     * Description text for the list item or callback which returns a React element to display the description.
     */
    description?: Description;
    /**
     * Callback which returns a React element to display on the left side.
     */
    left?: ((props: {
        color: string;
        style: Style;
    }) => React.ReactNode) | undefined;
    /**
     * Callback which returns a React element to display on the right side.
     */
    right?: ((props: {
        color: string;
        style?: Style | undefined;
    }) => React.ReactNode) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: ((e: GestureResponderEvent) => void) | undefined;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * Style that is passed to the wrapping TouchableRipple element.
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Style that is passed to Title element.
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * Style that is passed to Description element.
     */
    descriptionStyle?: StyleProp<TextStyle>;
    /**
     * Truncate Title text such that the total number of lines does not
     * exceed this number.
     */
    titleNumberOfLines?: number | undefined;
    /**
     * Truncate Description text such that the total number of lines does not
     * exceed this number.
     */
    descriptionNumberOfLines?: number | undefined;
    /**
     * Ellipsize Mode for the Title.  One of `'head'`, `'middle'`, `'tail'`, `'clip'`.
     *
     * See [`ellipsizeMode`](https://reactnative.dev/docs/text#ellipsizemode)
     */
    titleEllipsizeMode?: EllipsizeProp | undefined;
    /**
     * Ellipsize Mode for the Description.  One of `'head'`, `'middle'`, `'tail'`, `'clip'`.
     *
     * See [`ellipsizeMode`](https://reactnative.dev/docs/text#ellipsizemode)
     */
    descriptionEllipsizeMode?: EllipsizeProp | undefined;
}, "style" | "title" | "testID" | "left" | "right" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLabelledBy" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityLanguage" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "disabled" | "key" | "background" | "onFocus" | "onBlur" | "underlayColor" | "rippleColor" | "onHoverIn" | "onHoverOut" | "cancelable" | "delayHoverIn" | "delayHoverOut" | "delayLongPress" | "pressRetentionOffset" | "android_disableSound" | "android_ripple" | "testOnly_pressed" | "unstable_pressDelay" | "borderless" | "centered" | "description" | "titleStyle" | "descriptionStyle" | "titleNumberOfLines" | "descriptionNumberOfLines" | "titleEllipsizeMode" | "descriptionEllipsizeMode"> & {
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
    /**
     * Title text for the list item.
     */
    title: Title;
    /**
     * Description text for the list item or callback which returns a React element to display the description.
     */
    description?: Description;
    /**
     * Callback which returns a React element to display on the left side.
     */
    left?: ((props: {
        color: string;
        style: Style;
    }) => React.ReactNode) | undefined;
    /**
     * Callback which returns a React element to display on the right side.
     */
    right?: ((props: {
        color: string;
        style?: Style | undefined;
    }) => React.ReactNode) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: ((e: GestureResponderEvent) => void) | undefined;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * Style that is passed to the wrapping TouchableRipple element.
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Style that is passed to Title element.
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * Style that is passed to Description element.
     */
    descriptionStyle?: StyleProp<TextStyle>;
    /**
     * Truncate Title text such that the total number of lines does not
     * exceed this number.
     */
    titleNumberOfLines?: number | undefined;
    /**
     * Truncate Description text such that the total number of lines does not
     * exceed this number.
     */
    descriptionNumberOfLines?: number | undefined;
    /**
     * Ellipsize Mode for the Title.  One of `'head'`, `'middle'`, `'tail'`, `'clip'`.
     *
     * See [`ellipsizeMode`](https://reactnative.dev/docs/text#ellipsizemode)
     */
    titleEllipsizeMode?: EllipsizeProp | undefined;
    /**
     * Ellipsize Mode for the Description.  One of `'head'`, `'middle'`, `'tail'`, `'clip'`.
     *
     * See [`ellipsizeMode`](https://reactnative.dev/docs/text#ellipsizemode)
     */
    descriptionEllipsizeMode?: EllipsizeProp | undefined;
}> & {
    ({ left, right, title, description, onPress, theme, style, titleStyle, titleNumberOfLines, descriptionNumberOfLines, titleEllipsizeMode, descriptionEllipsizeMode, descriptionStyle, ...rest }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
