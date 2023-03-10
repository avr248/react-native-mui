import * as React from 'react';
import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from 'react-native';
import type { InternalTheme } from '../../types';
import { IconSource } from '../Icon';
export declare type Props = {
    /**
     * Title text for the `MenuItem`.
     */
    title: React.ReactNode;
    /**
     * @renamed Renamed from 'icon' to 'leadingIcon' in v5.x
     *
     * Leading icon to display for the `MenuItem`.
     */
    leadingIcon?: IconSource;
    /**
     * @supported Available in v5.x with theme version 3
     *
     * Trailing icon to display for the `MenuItem`.
     */
    trailingIcon?: IconSource;
    /**
     * Whether the 'item' is disabled. A disabled 'item' is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean;
    /**
     * @supported Available in v5.x with theme version 3
     *
     * Sets min height with densed layout.
     */
    dense?: boolean;
    /**
     * Function to execute on press.
     */
    onPress?: (e: GestureResponderEvent) => void;
    /**
     * @optional
     */
    style?: StyleProp<ViewStyle>;
    contentStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * TestID used for testing purposes
     */
    testID?: string;
    /**
     * Accessibility label for the Touchable. This is read by the screen reader when the user taps the component.
     */
    accessibilityLabel?: string;
};
declare const _default: React.ComponentType<Pick<Props, "style" | "title" | "testID" | "accessibilityLabel" | "onPress" | "disabled" | "titleStyle" | "contentStyle" | "leadingIcon" | "trailingIcon" | "dense"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & {
    ({ leadingIcon, trailingIcon, dense, title, disabled, onPress, style, contentStyle, testID, titleStyle, accessibilityLabel, theme, }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
