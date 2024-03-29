import * as React from 'react';
import { Animated, StyleProp, View, ViewStyle } from 'react-native';
import Button from './Button/Button';
import { IconSource } from './Icon';
import Surface from './Surface';
import type { $RemoveChildren, InternalTheme } from '../types';
export declare type Props = $RemoveChildren<typeof Surface> & {
    /**
     * Whether banner is currently visible.
     */
    visible: boolean;
    /**
     * Content that will be displayed inside banner.
     */
    children: React.ReactNode;
    /**
     * Icon to display for the `Banner`. Can be an image.
     */
    icon?: IconSource;
    /**
     * Action items to shown in the banner.
     * An action item should contain the following properties:
     *
     * - `label`: label of the action button (required)
     * - `onPress`: callback that is called when button is pressed (required)
     *
     * To customize button you can pass other props that button component takes.
     */
    actions?: Array<{
        label: string;
    } & Omit<React.ComponentProps<typeof Button>, 'children'>>;
    /**
     * Style of banner's inner content.
     * Use this prop to apply custom width for wide layouts.
     */
    contentStyle?: StyleProp<ViewStyle>;
    /**
     * @supported Available in v5.x with theme version 3
     * Changes Banner shadow and background on iOS and Android.
     */
    elevation?: 0 | 1 | 2 | 3 | 4 | 5 | Animated.Value;
    style?: StyleProp<ViewStyle>;
    ref?: React.RefObject<View>;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * @optional
     * Optional callback that will be called after the opening animation finished running normally
     */
    onShowAnimationFinished?: Animated.EndCallback;
    /**
     * @optional
     * Optional callback that will be called after the closing animation finished running normally
     */
    onHideAnimationFinished?: Animated.EndCallback;
};
declare const _default: React.ComponentType<Pick<$RemoveChildren<React.ForwardRefExoticComponent<Pick<import("./Surface").Props, "theme" | "elevation" | keyof import("react-native").ViewProps | "key"> & React.RefAttributes<View>>> & {
    /**
     * Whether banner is currently visible.
     */
    visible: boolean;
    /**
     * Content that will be displayed inside banner.
     */
    children: React.ReactNode;
    /**
     * Icon to display for the `Banner`. Can be an image.
     */
    icon?: IconSource | undefined;
    /**
     * Action items to shown in the banner.
     * An action item should contain the following properties:
     *
     * - `label`: label of the action button (required)
     * - `onPress`: callback that is called when button is pressed (required)
     *
     * To customize button you can pass other props that button component takes.
     */
    actions?: ({
        label: string;
    } & Omit<Pick<Pick<import("./Surface").Props, "theme" | "elevation" | keyof import("react-native").ViewProps | "key"> & React.RefAttributes<View> & {
        mode?: "text" | "outlined" | "elevated" | "contained" | "contained-tonal" | undefined;
        dark?: boolean | undefined;
        compact?: boolean | undefined;
        color?: string | undefined;
        buttonColor?: string | undefined;
        textColor?: string | undefined;
        loading?: boolean | undefined;
        icon?: IconSource | undefined;
        disabled?: boolean | undefined;
        children: React.ReactNode;
        uppercase?: boolean | undefined;
        accessibilityLabel?: string | undefined;
        accessibilityHint?: string | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onPressIn?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onPressOut?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        delayLongPress?: number | undefined;
        contentStyle?: StyleProp<ViewStyle>;
        style?: StyleProp<ViewStyle>;
        labelStyle?: StyleProp<import("react-native").TextStyle>;
        theme: InternalTheme;
        testID?: string | undefined;
    }, "dark" | "elevation" | keyof import("react-native").ViewProps | "color" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "disabled" | "icon" | "mode" | "loading" | "uppercase" | "labelStyle" | "delayLongPress" | keyof React.RefAttributes<View> | "compact" | "textColor" | "contentStyle" | "buttonColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
    }, "children">)[] | undefined;
    /**
     * Style of banner's inner content.
     * Use this prop to apply custom width for wide layouts.
     */
    contentStyle?: StyleProp<ViewStyle>;
    /**
     * @supported Available in v5.x with theme version 3
     * Changes Banner shadow and background on iOS and Android.
     */
    elevation?: 0 | 3 | 2 | 1 | 4 | 5 | Animated.Value | undefined;
    style?: StyleProp<ViewStyle>;
    ref?: React.RefObject<View> | undefined;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * @optional
     * Optional callback that will be called after the opening animation finished running normally
     */
    onShowAnimationFinished?: Animated.EndCallback | undefined;
    /**
     * @optional
     * Optional callback that will be called after the closing animation finished running normally
     */
    onHideAnimationFinished?: Animated.EndCallback | undefined;
}, "style" | "children" | "visible" | "testID" | "elevation" | "ref" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLabelledBy" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityLanguage" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "icon" | "key" | "contentStyle" | "actions" | "onShowAnimationFinished" | "onHideAnimationFinished"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<$RemoveChildren<React.ForwardRefExoticComponent<Pick<import("./Surface").Props, "theme" | "elevation" | keyof import("react-native").ViewProps | "key"> & React.RefAttributes<View>>> & {
    /**
     * Whether banner is currently visible.
     */
    visible: boolean;
    /**
     * Content that will be displayed inside banner.
     */
    children: React.ReactNode;
    /**
     * Icon to display for the `Banner`. Can be an image.
     */
    icon?: IconSource | undefined;
    /**
     * Action items to shown in the banner.
     * An action item should contain the following properties:
     *
     * - `label`: label of the action button (required)
     * - `onPress`: callback that is called when button is pressed (required)
     *
     * To customize button you can pass other props that button component takes.
     */
    actions?: ({
        label: string;
    } & Omit<Pick<Pick<import("./Surface").Props, "theme" | "elevation" | keyof import("react-native").ViewProps | "key"> & React.RefAttributes<View> & {
        mode?: "text" | "outlined" | "elevated" | "contained" | "contained-tonal" | undefined;
        dark?: boolean | undefined;
        compact?: boolean | undefined;
        color?: string | undefined;
        buttonColor?: string | undefined;
        textColor?: string | undefined;
        loading?: boolean | undefined;
        icon?: IconSource | undefined;
        disabled?: boolean | undefined;
        children: React.ReactNode;
        uppercase?: boolean | undefined;
        accessibilityLabel?: string | undefined;
        accessibilityHint?: string | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onPressIn?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onPressOut?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        delayLongPress?: number | undefined;
        contentStyle?: StyleProp<ViewStyle>;
        style?: StyleProp<ViewStyle>;
        labelStyle?: StyleProp<import("react-native").TextStyle>;
        theme: InternalTheme;
        testID?: string | undefined;
    }, "dark" | "elevation" | keyof import("react-native").ViewProps | "color" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "disabled" | "icon" | "mode" | "loading" | "uppercase" | "labelStyle" | "delayLongPress" | keyof React.RefAttributes<View> | "compact" | "textColor" | "contentStyle" | "buttonColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
    }, "children">)[] | undefined;
    /**
     * Style of banner's inner content.
     * Use this prop to apply custom width for wide layouts.
     */
    contentStyle?: StyleProp<ViewStyle>;
    /**
     * @supported Available in v5.x with theme version 3
     * Changes Banner shadow and background on iOS and Android.
     */
    elevation?: 0 | 3 | 2 | 1 | 4 | 5 | Animated.Value | undefined;
    style?: StyleProp<ViewStyle>;
    ref?: React.RefObject<View> | undefined;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * @optional
     * Optional callback that will be called after the opening animation finished running normally
     */
    onShowAnimationFinished?: Animated.EndCallback | undefined;
    /**
     * @optional
     * Optional callback that will be called after the closing animation finished running normally
     */
    onHideAnimationFinished?: Animated.EndCallback | undefined;
}> & (({ visible, icon, children, actions, contentStyle, elevation, style, theme, onShowAnimationFinished, onHideAnimationFinished, ...rest }: Props) => JSX.Element), {}>;
export default _default;
