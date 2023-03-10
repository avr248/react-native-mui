import * as React from 'react';
import { GestureResponderEvent, StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import type { $RemoveChildren, InternalTheme } from '../../types';
export declare type Props = $RemoveChildren<typeof View> & {
    /**
     * Custom color for the text.
     */
    color?: string;
    /**
     * Text for the title.
     */
    title: React.ReactNode;
    /**
     * Style for the title.
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * Reference for the title.
     */
    titleRef?: React.RefObject<Text>;
    /**
     * @deprecated Deprecated in v5.x
     * Text for the subtitle.
     */
    subtitle?: React.ReactNode;
    /**
     * @deprecated Deprecated in v5.x
     * Style for the subtitle.
     */
    subtitleStyle?: StyleProp<TextStyle>;
    /**
     * Function to execute on press.
     */
    onPress?: (e: GestureResponderEvent) => void;
    /**
     * @internal
     */
    mode?: 'small' | 'medium' | 'large' | 'center-aligned';
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
};
declare const _default: React.ComponentType<Pick<$RemoveChildren<typeof View> & {
    /**
     * Custom color for the text.
     */
    color?: string | undefined;
    /**
     * Text for the title.
     */
    title: React.ReactNode;
    /**
     * Style for the title.
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * Reference for the title.
     */
    titleRef?: React.RefObject<Text> | undefined;
    /**
     * @deprecated Deprecated in v5.x
     * Text for the subtitle.
     */
    subtitle?: React.ReactNode;
    /**
     * @deprecated Deprecated in v5.x
     * Style for the subtitle.
     */
    subtitleStyle?: StyleProp<TextStyle>;
    /**
     * Function to execute on press.
     */
    onPress?: ((e: GestureResponderEvent) => void) | undefined;
    /**
     * @internal
     */
    mode?: "small" | "medium" | "large" | "center-aligned" | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
}, "style" | "title" | "testID" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLabelledBy" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityLanguage" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "color" | "onPress" | "mode" | "titleStyle" | "subtitle" | "subtitleStyle" | "titleRef"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<$RemoveChildren<typeof View> & {
    /**
     * Custom color for the text.
     */
    color?: string | undefined;
    /**
     * Text for the title.
     */
    title: React.ReactNode;
    /**
     * Style for the title.
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * Reference for the title.
     */
    titleRef?: React.RefObject<Text> | undefined;
    /**
     * @deprecated Deprecated in v5.x
     * Text for the subtitle.
     */
    subtitle?: React.ReactNode;
    /**
     * @deprecated Deprecated in v5.x
     * Style for the subtitle.
     */
    subtitleStyle?: StyleProp<TextStyle>;
    /**
     * Function to execute on press.
     */
    onPress?: ((e: GestureResponderEvent) => void) | undefined;
    /**
     * @internal
     */
    mode?: "small" | "medium" | "large" | "center-aligned" | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
}> & {
    ({ color: titleColor, subtitle, subtitleStyle, onPress, style, titleRef, titleStyle, theme, title, mode, ...rest }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
declare const AppbarContentWithTheme: React.ComponentType<Pick<$RemoveChildren<typeof View> & {
    /**
     * Custom color for the text.
     */
    color?: string | undefined;
    /**
     * Text for the title.
     */
    title: React.ReactNode;
    /**
     * Style for the title.
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * Reference for the title.
     */
    titleRef?: React.RefObject<Text> | undefined;
    /**
     * @deprecated Deprecated in v5.x
     * Text for the subtitle.
     */
    subtitle?: React.ReactNode;
    /**
     * @deprecated Deprecated in v5.x
     * Style for the subtitle.
     */
    subtitleStyle?: StyleProp<TextStyle>;
    /**
     * Function to execute on press.
     */
    onPress?: ((e: GestureResponderEvent) => void) | undefined;
    /**
     * @internal
     */
    mode?: "small" | "medium" | "large" | "center-aligned" | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
}, "style" | "title" | "testID" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLabelledBy" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityLanguage" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "color" | "onPress" | "mode" | "titleStyle" | "subtitle" | "subtitleStyle" | "titleRef"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<$RemoveChildren<typeof View> & {
    /**
     * Custom color for the text.
     */
    color?: string | undefined;
    /**
     * Text for the title.
     */
    title: React.ReactNode;
    /**
     * Style for the title.
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * Reference for the title.
     */
    titleRef?: React.RefObject<Text> | undefined;
    /**
     * @deprecated Deprecated in v5.x
     * Text for the subtitle.
     */
    subtitle?: React.ReactNode;
    /**
     * @deprecated Deprecated in v5.x
     * Style for the subtitle.
     */
    subtitleStyle?: StyleProp<TextStyle>;
    /**
     * Function to execute on press.
     */
    onPress?: ((e: GestureResponderEvent) => void) | undefined;
    /**
     * @internal
     */
    mode?: "small" | "medium" | "large" | "center-aligned" | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
}> & {
    ({ color: titleColor, subtitle, subtitleStyle, onPress, style, titleRef, titleStyle, theme, title, mode, ...rest }: Props): JSX.Element;
    displayName: string;
}, {}>;
export { AppbarContentWithTheme as AppbarContent };
