/// <reference types="react" />
declare const Appbar: (import("react").ComponentType<Pick<Partial<import("react-native").ViewProps & import("react").RefAttributes<import("react-native").View>> & {
    dark?: boolean | undefined;
    children: import("react").ReactNode;
    mode?: "small" | "medium" | "large" | "center-aligned" | undefined;
    elevated?: boolean | undefined;
    safeAreaInsets?: {
        bottom?: number | undefined;
        top?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | undefined;
    theme: import("../../types").InternalTheme;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
}, "dark" | keyof import("react-native").ViewProps | "mode" | keyof import("react").RefAttributes<import("react-native").View> | "elevated" | "safeAreaInsets"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<import("react").ComponentType<Partial<import("react-native").ViewProps & import("react").RefAttributes<import("react-native").View>> & {
    dark?: boolean | undefined;
    children: import("react").ReactNode;
    mode?: "small" | "medium" | "large" | "center-aligned" | undefined;
    elevated?: boolean | undefined;
    safeAreaInsets?: {
        bottom?: number | undefined;
        top?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | undefined;
    theme: import("../../types").InternalTheme;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
}> & (({ children, dark, style, theme, mode, elevated, safeAreaInsets, ...rest }: import("./Appbar").Props) => JSX.Element), {}>) & {
    Content: import("react").ComponentType<Pick<import("../../types").$RemoveChildren<typeof import("react-native").View> & {
        color?: string | undefined;
        title: import("react").ReactNode;
        titleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        titleRef?: import("react").RefObject<Text> | undefined;
        subtitle?: import("react").ReactNode;
        subtitleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        mode?: "small" | "medium" | "large" | "center-aligned" | undefined;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: import("../../types").InternalTheme;
    }, "style" | "title" | "testID" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLabelledBy" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityLanguage" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "color" | "onPress" | "mode" | "titleStyle" | "subtitle" | "subtitleStyle" | "titleRef"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<import("react").ComponentType<import("../../types").$RemoveChildren<typeof import("react-native").View> & {
        color?: string | undefined;
        title: import("react").ReactNode;
        titleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        titleRef?: import("react").RefObject<Text> | undefined;
        subtitle?: import("react").ReactNode;
        subtitleStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        mode?: "small" | "medium" | "large" | "center-aligned" | undefined;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: import("../../types").InternalTheme;
    }> & {
        ({ color: titleColor, subtitle, subtitleStyle, onPress, style, titleRef, titleStyle, theme, title, mode, ...rest }: import("./AppbarContent").Props): JSX.Element;
        displayName: string;
    }, {}>;
    Action: import("react").ForwardRefExoticComponent<Pick<import("./AppbarAction").Props, "style" | "theme" | "testID" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLabelledBy" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityLanguage" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "color" | "size" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "disabled" | "icon" | "key" | "mode" | "background" | "onFocus" | "onBlur" | "selected" | "underlayColor" | "rippleColor" | "onHoverIn" | "onHoverOut" | "cancelable" | "delayHoverIn" | "delayHoverOut" | "delayLongPress" | "pressRetentionOffset" | "android_disableSound" | "android_ripple" | "testOnly_pressed" | "unstable_pressDelay" | "borderless" | "centered" | "iconColor" | "containerColor" | "animated" | "isLeading"> & import("react").RefAttributes<import("react-native").View>>;
    BackAction: import("react").ForwardRefExoticComponent<Pick<import("./AppbarBackAction").Props, "style" | "theme" | "testID" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLabelledBy" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityLanguage" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "color" | "size" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "disabled" | "key" | "mode" | "background" | "onFocus" | "onBlur" | "selected" | "underlayColor" | "rippleColor" | "onHoverIn" | "onHoverOut" | "cancelable" | "delayHoverIn" | "delayHoverOut" | "delayLongPress" | "pressRetentionOffset" | "android_disableSound" | "android_ripple" | "testOnly_pressed" | "unstable_pressDelay" | "borderless" | "centered" | "iconColor" | "containerColor" | "animated" | "isLeading"> & import("react").RefAttributes<import("react-native").View>>;
    Header: import("react").ComponentType<Pick<Pick<Partial<import("react-native").ViewProps & import("react").RefAttributes<import("react-native").View>> & {
        dark?: boolean | undefined;
        children: import("react").ReactNode;
        mode?: "small" | "medium" | "large" | "center-aligned" | undefined;
        elevated?: boolean | undefined;
        safeAreaInsets?: {
            bottom?: number | undefined;
            top?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        theme: import("../../types").InternalTheme;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    }, "dark" | keyof import("react-native").ViewProps | "mode" | keyof import("react").RefAttributes<import("react-native").View> | "elevated" | "safeAreaInsets"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
    } & {
        dark?: boolean | undefined;
        statusBarHeight?: number | undefined;
        children: import("react").ReactNode;
        mode?: "small" | "medium" | "large" | "center-aligned" | undefined;
        elevated?: boolean | undefined;
        theme: import("../../types").InternalTheme;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    }, "dark" | keyof import("react-native").ViewProps | "mode" | keyof import("react").RefAttributes<import("react-native").View> | "elevated" | "safeAreaInsets" | "statusBarHeight"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<import("react").ComponentType<Pick<Partial<import("react-native").ViewProps & import("react").RefAttributes<import("react-native").View>> & {
        dark?: boolean | undefined;
        children: import("react").ReactNode;
        mode?: "small" | "medium" | "large" | "center-aligned" | undefined;
        elevated?: boolean | undefined;
        safeAreaInsets?: {
            bottom?: number | undefined;
            top?: number | undefined;
            left?: number | undefined;
            right?: number | undefined;
        } | undefined;
        theme: import("../../types").InternalTheme;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    }, "dark" | keyof import("react-native").ViewProps | "mode" | keyof import("react").RefAttributes<import("react-native").View> | "elevated" | "safeAreaInsets"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
    } & {
        dark?: boolean | undefined;
        statusBarHeight?: number | undefined;
        children: import("react").ReactNode;
        mode?: "small" | "medium" | "large" | "center-aligned" | undefined;
        elevated?: boolean | undefined;
        theme: import("../../types").InternalTheme;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    }> & {
        ({ statusBarHeight, style, dark, mode, elevated, ...rest }: import("./AppbarHeader").Props): JSX.Element;
        displayName: string;
    }, {}>;
};
export default Appbar;
