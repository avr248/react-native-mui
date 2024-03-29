import * as React from 'react';
import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from 'react-native';
import type { InternalTheme, MD3TypescaleKey } from '../../types';
export declare type Props = {
    /**
     * Status of checkbox.
     */
    status: 'checked' | 'unchecked' | 'indeterminate';
    /**
     * Whether checkbox is disabled.
     */
    disabled?: boolean;
    /**
     * Label to be displayed on the item.
     */
    label: string;
    /**
     * Function to execute on press.
     */
    onPress?: (e: GestureResponderEvent) => void;
    /**
     * Accessibility label for the touchable. This is read by the screen reader when the user taps the touchable.
     */
    accessibilityLabel?: string;
    /**
     * Custom color for unchecked checkbox.
     */
    uncheckedColor?: string;
    /**
     * Custom color for checkbox.
     */
    color?: string;
    /**
     * Additional styles for container View.
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Style that is passed to Label element.
     */
    labelStyle?: StyleProp<TextStyle>;
    /**
     * @supported Available in v5.x with theme version 3
     *
     * Label text variant defines appropriate text styles for type role and its size.
     * Available variants:
     *
     *  Display: `displayLarge`, `displayMedium`, `displaySmall`
     *
     *  Headline: `headlineLarge`, `headlineMedium`, `headlineSmall`
     *
     *  Title: `titleLarge`, `titleMedium`, `titleSmall`
     *
     *  Label:  `labelLarge`, `labelMedium`, `labelSmall`
     *
     *  Body: `bodyLarge`, `bodyMedium`, `bodySmall`
     */
    labelVariant?: keyof typeof MD3TypescaleKey;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * testID to be used on tests.
     */
    testID?: string;
    /**
     * Checkbox control position.
     */
    position?: 'leading' | 'trailing';
    /**
     * Whether `<Checkbox.Android />` or `<Checkbox.IOS />` should be used.
     * Left undefined `<Checkbox />` will be used.
     */
    mode?: 'android' | 'ios';
};
declare const _default: React.ComponentType<Pick<Props, "label" | "style" | "testID" | "position" | "accessibilityLabel" | "color" | "onPress" | "disabled" | "mode" | "status" | "labelStyle" | "uncheckedColor" | "labelVariant"> & {
    /**
     * Whether checkbox is disabled.
     */
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & {
    ({ style, status, label, onPress, labelStyle, theme, testID, mode, position, accessibilityLabel, disabled, labelVariant, ...props }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
declare const CheckboxItemWithTheme: React.ComponentType<Pick<Props, "label" | "style" | "testID" | "position" | "accessibilityLabel" | "color" | "onPress" | "disabled" | "mode" | "status" | "labelStyle" | "uncheckedColor" | "labelVariant"> & {
    /**
     * Whether checkbox is disabled.
     */
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & {
    ({ style, status, label, onPress, labelStyle, theme, testID, mode, position, accessibilityLabel, disabled, labelVariant, ...props }: Props): JSX.Element;
    displayName: string;
}, {}>;
export { CheckboxItemWithTheme as CheckboxItem };
