/// <reference types="react" />
declare const RadioButton: (import("react").ComponentType<Pick<import("./RadioButton").Props, "testID" | "color" | "onPress" | "disabled" | "value" | "status" | "uncheckedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<import("react").ComponentType<import("./RadioButton").Props> & ((props: import("./RadioButton").Props) => JSX.Element), {}>) & {
    Group: {
        ({ value, onValueChange, children }: import("./RadioButtonGroup").Props): JSX.Element;
        displayName: string;
    };
    Android: import("react").ComponentType<Pick<import("../../types").$RemoveChildren<import("react").ComponentType<Pick<import("react-native").PressableProps & import("react").RefAttributes<import("react-native").View> & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: import("react").ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: import("../../types").InternalTheme;
    }, "background" | "underlayColor" | "rippleColor" | keyof import("react-native").PressableProps | keyof import("react").RefAttributes<import("react-native").View> | "borderless" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<import("react").ComponentType<import("react-native").PressableProps & import("react").RefAttributes<import("react-native").View> & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: import("react").ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: import("../../types").InternalTheme;
    }> & {
        ({ style, background: _background, borderless, disabled: disabledProp, rippleColor, underlayColor: _underlayColor, children, theme, ...rest }: import("../..").TouchableRippleProps): JSX.Element;
        supported: boolean;
    }, {}>> & {
        value: string;
        status?: "checked" | "unchecked" | undefined;
        disabled?: boolean | undefined;
        onPress?: ((param?: any) => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        theme: import("../../types").InternalTheme;
        testID?: string | undefined;
    }, "style" | "testID" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLabelledBy" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityLanguage" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "color" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "disabled" | "key" | "value" | "background" | "onFocus" | "onBlur" | "status" | "underlayColor" | "rippleColor" | "onHoverIn" | "onHoverOut" | "cancelable" | "delayHoverIn" | "delayHoverOut" | "delayLongPress" | "pressRetentionOffset" | "android_disableSound" | "android_ripple" | "testOnly_pressed" | "unstable_pressDelay" | "borderless" | "centered" | "uncheckedColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<import("react").ComponentType<import("../../types").$RemoveChildren<import("react").ComponentType<Pick<import("react-native").PressableProps & import("react").RefAttributes<import("react-native").View> & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: import("react").ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: import("../../types").InternalTheme;
    }, "background" | "underlayColor" | "rippleColor" | keyof import("react-native").PressableProps | keyof import("react").RefAttributes<import("react-native").View> | "borderless" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<import("react").ComponentType<import("react-native").PressableProps & import("react").RefAttributes<import("react-native").View> & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: import("react").ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: import("../../types").InternalTheme;
    }> & {
        ({ style, background: _background, borderless, disabled: disabledProp, rippleColor, underlayColor: _underlayColor, children, theme, ...rest }: import("../..").TouchableRippleProps): JSX.Element;
        supported: boolean;
    }, {}>> & {
        value: string;
        status?: "checked" | "unchecked" | undefined;
        disabled?: boolean | undefined;
        onPress?: ((param?: any) => void) | undefined;
        uncheckedColor?: string | undefined;
        color?: string | undefined;
        theme: import("../../types").InternalTheme;
        testID?: string | undefined;
    }> & {
        ({ disabled, onPress, theme, value, status, testID, ...rest }: import("./RadioButtonAndroid").Props): JSX.Element;
        displayName: string;
    }, {}>;
    IOS: import("react").ComponentType<Pick<import("../../types").$RemoveChildren<import("react").ComponentType<Pick<import("react-native").PressableProps & import("react").RefAttributes<import("react-native").View> & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: import("react").ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: import("../../types").InternalTheme;
    }, "background" | "underlayColor" | "rippleColor" | keyof import("react-native").PressableProps | keyof import("react").RefAttributes<import("react-native").View> | "borderless" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<import("react").ComponentType<import("react-native").PressableProps & import("react").RefAttributes<import("react-native").View> & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: import("react").ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: import("../../types").InternalTheme;
    }> & {
        ({ style, background: _background, borderless, disabled: disabledProp, rippleColor, underlayColor: _underlayColor, children, theme, ...rest }: import("../..").TouchableRippleProps): JSX.Element;
        supported: boolean;
    }, {}>> & {
        value: string;
        status?: "checked" | "unchecked" | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        color?: string | undefined;
        theme: import("../../types").InternalTheme;
        testID?: string | undefined;
    }, "style" | "testID" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLabelledBy" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityLanguage" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "color" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "disabled" | "key" | "value" | "background" | "onFocus" | "onBlur" | "status" | "underlayColor" | "rippleColor" | "onHoverIn" | "onHoverOut" | "cancelable" | "delayHoverIn" | "delayHoverOut" | "delayLongPress" | "pressRetentionOffset" | "android_disableSound" | "android_ripple" | "testOnly_pressed" | "unstable_pressDelay" | "borderless" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<import("react").ComponentType<import("../../types").$RemoveChildren<import("react").ComponentType<Pick<import("react-native").PressableProps & import("react").RefAttributes<import("react-native").View> & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: import("react").ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: import("../../types").InternalTheme;
    }, "background" | "underlayColor" | "rippleColor" | keyof import("react-native").PressableProps | keyof import("react").RefAttributes<import("react-native").View> | "borderless" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<import("react").ComponentType<import("react-native").PressableProps & import("react").RefAttributes<import("react-native").View> & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: import("react").ReactNode;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        theme: import("../../types").InternalTheme;
    }> & {
        ({ style, background: _background, borderless, disabled: disabledProp, rippleColor, underlayColor: _underlayColor, children, theme, ...rest }: import("../..").TouchableRippleProps): JSX.Element;
        supported: boolean;
    }, {}>> & {
        value: string;
        status?: "checked" | "unchecked" | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        color?: string | undefined;
        theme: import("../../types").InternalTheme;
        testID?: string | undefined;
    }> & {
        ({ disabled, onPress, theme, status, value, testID, ...rest }: import("./RadioButtonIOS").Props): JSX.Element;
        displayName: string;
    }, {}>;
    Item: import("react").ComponentType<Pick<import("./RadioButtonItem").Props, "label" | "style" | "testID" | "position" | "accessibilityLabel" | "color" | "onPress" | "disabled" | "value" | "mode" | "status" | "labelStyle" | "uncheckedColor" | "labelVariant"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<import("react").ComponentType<import("./RadioButtonItem").Props> & {
        ({ value, label, style, labelStyle, onPress, disabled, color, uncheckedColor, status, theme, accessibilityLabel, testID, mode, position, labelVariant, }: import("./RadioButtonItem").Props): JSX.Element;
        displayName: string;
    }, {}>;
};
export default RadioButton;
