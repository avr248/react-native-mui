import * as React from 'react';
import { GestureResponderEvent, StyleProp, ViewStyle, View } from 'react-native';
import type { InternalTheme } from '../../types';
import type { IconSource } from '../Icon';
export declare type Props = {
    /**
     * Icon to display for the `ToggleButton`.
     */
    icon: IconSource;
    /**
     * Size of the icon.
     */
    size?: number;
    /**
     * Custom text color for button.
     */
    color?: string;
    /**
     * Whether the button is disabled.
     */
    disabled?: boolean;
    /**
     * Accessibility label for the `ToggleButton`. This is read by the screen reader when the user taps the button.
     */
    accessibilityLabel?: string;
    /**
     * Function to execute on press.
     */
    onPress?: (value?: GestureResponderEvent | string) => void;
    /**
     * Value of button.
     */
    value?: string;
    /**
     * Status of button.
     */
    status?: 'checked' | 'unchecked';
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
    ref?: React.RefObject<View>;
};
declare const _default: React.ComponentType<Pick<Pick<Props, "style" | "theme" | "accessibilityLabel" | "color" | "size" | "onPress" | "disabled" | "icon" | "value" | "status"> & React.RefAttributes<View>, "style" | "accessibilityLabel" | "color" | "size" | "onPress" | "disabled" | "icon" | "value" | "status" | keyof React.RefAttributes<View>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Pick<Props, "style" | "theme" | "accessibilityLabel" | "color" | "size" | "onPress" | "disabled" | "icon" | "value" | "status"> & React.RefAttributes<View>> & React.ForwardRefExoticComponent<Pick<Props, "style" | "theme" | "accessibilityLabel" | "color" | "size" | "onPress" | "disabled" | "icon" | "value" | "status"> & React.RefAttributes<View>>, {}>;
export default _default;
declare const ToggleButtonWithTheme: React.ComponentType<Pick<Pick<Props, "style" | "theme" | "accessibilityLabel" | "color" | "size" | "onPress" | "disabled" | "icon" | "value" | "status"> & React.RefAttributes<View>, "style" | "accessibilityLabel" | "color" | "size" | "onPress" | "disabled" | "icon" | "value" | "status" | keyof React.RefAttributes<View>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Pick<Props, "style" | "theme" | "accessibilityLabel" | "color" | "size" | "onPress" | "disabled" | "icon" | "value" | "status"> & React.RefAttributes<View>> & React.ForwardRefExoticComponent<Pick<Props, "style" | "theme" | "accessibilityLabel" | "color" | "size" | "onPress" | "disabled" | "icon" | "value" | "status"> & React.RefAttributes<View>>, {}>;
export { ToggleButtonWithTheme as ToggleButton };
