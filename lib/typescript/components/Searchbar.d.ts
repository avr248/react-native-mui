import * as React from 'react';
import { Animated, GestureResponderEvent, StyleProp, TextInput, TextInputProps, TextStyle, ViewStyle } from 'react-native';
import type { IconSource } from './Icon';
import type { InternalTheme } from '../types';
export declare type Props = React.ComponentPropsWithRef<typeof TextInput> & {
    /**
     * Accessibility label for the button. This is read by the screen reader when the user taps the button.
     */
    clearAccessibilityLabel?: string;
    /**
     * Accessibility label for the button. This is read by the screen reader when the user taps the button.
     */
    searchAccessibilityLabel?: string;
    /**
     * Hint text shown when the input is empty.
     */
    placeholder?: string;
    /**
     * The value of the text input.
     */
    value: string;
    /**
     * Icon name for the left icon button (see `onIconPress`).
     */
    icon?: IconSource;
    /**
     * Callback that is called when the text input's text changes.
     */
    onChangeText?: (query: string) => void;
    /**
     * Callback to execute if we want the left icon to act as button.
     */
    onIconPress?: (e: GestureResponderEvent) => void;
    /**
     * @supported Available in v5.x with theme version 3
     * Changes Searchbar shadow and background on iOS and Android.
     */
    elevation?: 0 | 1 | 2 | 3 | 4 | 5 | Animated.Value;
    /**
     * Set style of the TextInput component inside the searchbar
     */
    inputStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
    /**
     * Custom color for icon, default will be derived from theme
     */
    iconColor?: string;
    /**
     * Custom icon for clear button, default will be icon close
     */
    clearIcon?: IconSource;
    /**
     * Custom flag for replacing clear button with activity indicator.
     */
    loading?: Boolean;
    /**
     * TestID used for testing purposes
     */
    testID?: string;
    /**
     * @optional
     */
    theme: InternalTheme;
};
declare type TextInputHandles = Pick<TextInput, 'setNativeProps' | 'isFocused' | 'clear' | 'blur' | 'focus'>;
declare const _default: React.ComponentType<Pick<Pick<Props, "theme" | "elevation" | "icon" | "key" | "loading" | "iconColor" | keyof TextInputProps | "clearAccessibilityLabel" | "clearIcon" | "inputStyle" | "onIconPress" | "searchAccessibilityLabel"> & React.RefAttributes<TextInputHandles>, "elevation" | "icon" | "loading" | "iconColor" | keyof TextInputProps | "clearAccessibilityLabel" | "clearIcon" | "inputStyle" | "onIconPress" | "searchAccessibilityLabel" | keyof React.RefAttributes<TextInputHandles>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Pick<Props, "theme" | "elevation" | "icon" | "key" | "loading" | "iconColor" | keyof TextInputProps | "clearAccessibilityLabel" | "clearIcon" | "inputStyle" | "onIconPress" | "searchAccessibilityLabel"> & React.RefAttributes<TextInputHandles>> & React.ForwardRefExoticComponent<Pick<Props, "theme" | "elevation" | "icon" | "key" | "loading" | "iconColor" | keyof TextInputProps | "clearAccessibilityLabel" | "clearIcon" | "inputStyle" | "onIconPress" | "searchAccessibilityLabel"> & React.RefAttributes<TextInputHandles>>, {}>;
export default _default;
