import * as React from 'react';
import { Animated, StyleProp, View, ViewStyle } from 'react-native';
import Button from './Button/Button';
import type { IconSource } from './Icon';
import Surface from './Surface';
import type { InternalTheme } from '../types';
export declare type Props = React.ComponentProps<typeof Surface> & {
    /**
     * Whether the Snackbar is currently visible.
     */
    visible: boolean;
    /**
     * Label and press callback for the action button. It should contain the following properties:
     * - `label` - Label of the action button
     * - `onPress` - Callback that is called when action button is pressed.
     */
    action?: Omit<React.ComponentProps<typeof Button>, 'children'> & {
        label: string;
    };
    /**
     * @supported Available in v5.x with theme version 3
     * Icon to display when `onIconPress` is defined. Default will be `close` icon.
     */
    icon?: IconSource;
    /**
     * @supported Available in v5.x with theme version 3
     * Function to execute on icon button press. The icon button appears only when this prop is specified.
     */
    onIconPress?: () => void;
    /**
     * @supported Available in v5.x with theme version 3
     * Accessibility label for the icon button. This is read by the screen reader when the user taps the button.
     */
    iconAccessibilityLabel?: string;
    /**
     * The duration for which the Snackbar is shown.
     */
    duration?: number;
    /**
     * Callback called when Snackbar is dismissed. The `visible` prop needs to be updated when this is called.
     */
    onDismiss: () => void;
    /**
     * Text content of the Snackbar.
     */
    children: React.ReactNode;
    /**
     * Style for the wrapper of the snackbar
     */
    /**
     * @supported Available in v5.x with theme version 3
     * Changes Snackbar shadow and background on iOS and Android.
     */
    elevation?: 0 | 1 | 2 | 3 | 4 | 5 | Animated.Value;
    wrapperStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    ref?: React.RefObject<View>;
    /**
     * @optional
     */
    theme: InternalTheme;
};
declare const _default: React.ComponentType<Pick<Pick<import("./Surface").Props, "theme" | "elevation" | keyof import("react-native").ViewProps | "key"> & React.RefAttributes<View> & {
    /**
     * Whether the Snackbar is currently visible.
     */
    visible: boolean;
    /**
     * Label and press callback for the action button. It should contain the following properties:
     * - `label` - Label of the action button
     * - `onPress` - Callback that is called when action button is pressed.
     */
    action?: (Omit<Pick<Pick<import("./Surface").Props, "theme" | "elevation" | keyof import("react-native").ViewProps | "key"> & React.RefAttributes<View> & {
        mode?: "text" | "outlined" | "elevated" | "contained" | "contained-tonal" | undefined;
        /**
         * The duration for which the Snackbar is shown.
         */
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
    }, "children"> & {
        label: string;
    }) | undefined;
    /**
     * @supported Available in v5.x with theme version 3
     * Icon to display when `onIconPress` is defined. Default will be `close` icon.
     */
    icon?: IconSource | undefined;
    /**
     * @supported Available in v5.x with theme version 3
     * Function to execute on icon button press. The icon button appears only when this prop is specified.
     */
    onIconPress?: (() => void) | undefined;
    /**
     * @supported Available in v5.x with theme version 3
     * Accessibility label for the icon button. This is read by the screen reader when the user taps the button.
     */
    iconAccessibilityLabel?: string | undefined;
    /**
     * The duration for which the Snackbar is shown.
     */
    duration?: number | undefined;
    /**
     * Callback called when Snackbar is dismissed. The `visible` prop needs to be updated when this is called.
     */
    onDismiss: () => void;
    /**
     * Text content of the Snackbar.
     */
    children: React.ReactNode;
    /**
     * Style for the wrapper of the snackbar
     */
    /**
     * @supported Available in v5.x with theme version 3
     * Changes Snackbar shadow and background on iOS and Android.
     */
    elevation?: 0 | 3 | 2 | 1 | 4 | 5 | Animated.Value | undefined;
    wrapperStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    ref?: React.RefObject<View> | undefined;
    /**
     * @optional
     */
    theme: InternalTheme;
}, "visible" | "elevation" | keyof import("react-native").ViewProps | "icon" | "action" | keyof React.RefAttributes<View> | "onDismiss" | "onIconPress" | "iconAccessibilityLabel" | "duration" | "wrapperStyle"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Pick<import("./Surface").Props, "theme" | "elevation" | keyof import("react-native").ViewProps | "key"> & React.RefAttributes<View> & {
    /**
     * Whether the Snackbar is currently visible.
     */
    visible: boolean;
    /**
     * Label and press callback for the action button. It should contain the following properties:
     * - `label` - Label of the action button
     * - `onPress` - Callback that is called when action button is pressed.
     */
    action?: (Omit<Pick<Pick<import("./Surface").Props, "theme" | "elevation" | keyof import("react-native").ViewProps | "key"> & React.RefAttributes<View> & {
        mode?: "text" | "outlined" | "elevated" | "contained" | "contained-tonal" | undefined;
        /**
         * The duration for which the Snackbar is shown.
         */
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
    }, "children"> & {
        label: string;
    }) | undefined;
    /**
     * @supported Available in v5.x with theme version 3
     * Icon to display when `onIconPress` is defined. Default will be `close` icon.
     */
    icon?: IconSource | undefined;
    /**
     * @supported Available in v5.x with theme version 3
     * Function to execute on icon button press. The icon button appears only when this prop is specified.
     */
    onIconPress?: (() => void) | undefined;
    /**
     * @supported Available in v5.x with theme version 3
     * Accessibility label for the icon button. This is read by the screen reader when the user taps the button.
     */
    iconAccessibilityLabel?: string | undefined;
    /**
     * The duration for which the Snackbar is shown.
     */
    duration?: number | undefined;
    /**
     * Callback called when Snackbar is dismissed. The `visible` prop needs to be updated when this is called.
     */
    onDismiss: () => void;
    /**
     * Text content of the Snackbar.
     */
    children: React.ReactNode;
    /**
     * Style for the wrapper of the snackbar
     */
    /**
     * @supported Available in v5.x with theme version 3
     * Changes Snackbar shadow and background on iOS and Android.
     */
    elevation?: 0 | 3 | 2 | 1 | 4 | 5 | Animated.Value | undefined;
    wrapperStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    ref?: React.RefObject<View> | undefined;
    /**
     * @optional
     */
    theme: InternalTheme;
}> & {
    ({ visible, action, icon, onIconPress, iconAccessibilityLabel, duration, onDismiss, children, elevation, wrapperStyle, style, theme, ...rest }: Props): JSX.Element | null;
    /**
     * Show the Snackbar for a short duration.
     */
    DURATION_SHORT: number;
    /**
     * Show the Snackbar for a medium duration.
     */
    DURATION_MEDIUM: number;
    /**
     * Show the Snackbar for a long duration.
     */
    DURATION_LONG: number;
}, {}>;
export default _default;
