import * as React from 'react';
import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from 'react-native';
import type { InternalTheme, MD3TypescaleKey } from '../../types';
export declare type Props = {
    /**
     * Value of the radio button.
     */
    value: string;
    /**
     * Label to be displayed on the item.
     */
    label: string;
    /**
     * Whether radio is disabled.
     */
    disabled?: boolean;
    /**
     * Function to execute on press.
     */
    onPress?: (e: GestureResponderEvent) => void;
    /**
     * Accessibility label for the touchable. This is read by the screen reader when the user taps the touchable.
     */
    accessibilityLabel?: string;
    /**
     * Custom color for unchecked radio.
     */
    uncheckedColor?: string;
    /**
     * Custom color for radio.
     */
    color?: string;
    /**
     * Status of radio button.
     */
    status?: 'checked' | 'unchecked';
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
     * Whether `<RadioButton.Android />` or `<RadioButton.IOS />` should be used.
     * Left undefined `<RadioButton />` will be used.
     */
    mode?: 'android' | 'ios';
    /**
     * Radio button control position.
     */
    position?: 'leading' | 'trailing';
};
declare const _default: React.ComponentType<Pick<Props, "label" | "style" | "testID" | "position" | "accessibilityLabel" | "color" | "onPress" | "disabled" | "value" | "mode" | "status" | "labelStyle" | "uncheckedColor" | "labelVariant"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & {
    ({ value, label, style, labelStyle, onPress, disabled, color, uncheckedColor, status, theme, accessibilityLabel, testID, mode, position, labelVariant, }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
declare const RadioButtonItemWithTheme: React.ComponentType<Pick<Props, "label" | "style" | "testID" | "position" | "accessibilityLabel" | "color" | "onPress" | "disabled" | "value" | "mode" | "status" | "labelStyle" | "uncheckedColor" | "labelVariant"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & {
    ({ value, label, style, labelStyle, onPress, disabled, color, uncheckedColor, status, theme, accessibilityLabel, testID, mode, position, labelVariant, }: Props): JSX.Element;
    displayName: string;
}, {}>;
export { RadioButtonItemWithTheme as RadioButtonItem };
