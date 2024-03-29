import * as React from 'react';
import { GestureResponderEvent, StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import type { EllipsizeProp, InternalTheme } from '../../types';
import type { IconSource } from '../Icon';
import Surface from '../Surface';
export declare type Props = React.ComponentProps<typeof Surface> & {
    /**
     * Mode of the chip.
     * - `flat` - flat chip without outline.
     * - `outlined` - chip with an outline.
     */
    mode?: 'flat' | 'outlined';
    /**
     * Text content of the `Chip`.
     */
    children: React.ReactNode;
    /**
     * Icon to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    icon?: IconSource;
    /**
     * Avatar to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    avatar?: React.ReactNode;
    /**
     * Icon to display as the close button for the `Chip`. The icon appears only when the onClose prop is specified.
     */
    closeIcon?: IconSource;
    /**
     * Whether chip is selected.
     */
    selected?: boolean;
    /**
     * Whether to style the chip color as selected.
     */
    selectedColor?: string;
    /**
     * @supported Available in v5.x with theme version 3
     * Whether to display overlay on selected chip
     */
    showSelectedOverlay?: boolean;
    /**
     * Whether the chip is disabled. A disabled chip is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean;
    /**
     * Accessibility label for the chip. This is read by the screen reader when the user taps the chip.
     */
    accessibilityLabel?: string;
    /**
     * Accessibility label for the close icon. This is read by the screen reader when the user taps the close icon.
     */
    closeIconAccessibilityLabel?: string;
    /**
     * Function to execute on press.
     */
    onPress?: (e: GestureResponderEvent) => void;
    /**
     * @supported Available in v5.x with theme version 3
     * Sets smaller horizontal paddings `12dp` around label, when there is only label.
     */
    compact?: boolean;
    /**
     * @supported Available in v5.x with theme version 3
     * Whether chip should have the elevation.
     */
    elevated?: boolean;
    /**
     * Function to execute on long press.
     */
    onLongPress?: () => void;
    /**
     * The number of milliseconds a user must touch the element before executing `onLongPress`.
     */
    delayLongPress?: number;
    /**
     * Function to execute on close button press. The close button appears only when this prop is specified.
     */
    onClose?: () => void;
    /**
     * Style of chip's text
     */
    textStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * Pass down testID from chip props to touchable for Detox tests.
     */
    testID?: string;
    /**
     * Ellipsize Mode for the children text
     */
    ellipsizeMode?: EllipsizeProp;
};
declare const _default: React.ComponentType<Pick<Pick<import("../Surface").Props, "theme" | "elevation" | keyof import("react-native").ViewProps | "key"> & React.RefAttributes<View> & {
    /**
     * Mode of the chip.
     * - `flat` - flat chip without outline.
     * - `outlined` - chip with an outline.
     */
    mode?: "flat" | "outlined" | undefined;
    /**
     * Text content of the `Chip`.
     */
    children: React.ReactNode;
    /**
     * Icon to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    icon?: IconSource | undefined;
    /**
     * Avatar to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    avatar?: React.ReactNode;
    /**
     * Icon to display as the close button for the `Chip`. The icon appears only when the onClose prop is specified.
     */
    closeIcon?: IconSource | undefined;
    /**
     * Whether chip is selected.
     */
    selected?: boolean | undefined;
    /**
     * Whether to style the chip color as selected.
     */
    selectedColor?: string | undefined;
    /**
     * @supported Available in v5.x with theme version 3
     * Whether to display overlay on selected chip
     */
    showSelectedOverlay?: boolean | undefined;
    /**
     * Whether the chip is disabled. A disabled chip is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean | undefined;
    /**
     * Accessibility label for the chip. This is read by the screen reader when the user taps the chip.
     */
    accessibilityLabel?: string | undefined;
    /**
     * Accessibility label for the close icon. This is read by the screen reader when the user taps the close icon.
     */
    closeIconAccessibilityLabel?: string | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: ((e: GestureResponderEvent) => void) | undefined;
    /**
     * @supported Available in v5.x with theme version 3
     * Sets smaller horizontal paddings `12dp` around label, when there is only label.
     */
    compact?: boolean | undefined;
    /**
     * @supported Available in v5.x with theme version 3
     * Whether chip should have the elevation.
     */
    elevated?: boolean | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * The number of milliseconds a user must touch the element before executing `onLongPress`.
     */
    delayLongPress?: number | undefined;
    /**
     * Function to execute on close button press. The close button appears only when this prop is specified.
     */
    onClose?: (() => void) | undefined;
    /**
     * Style of chip's text
     */
    textStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * Pass down testID from chip props to touchable for Detox tests.
     */
    testID?: string | undefined;
    /**
     * Ellipsize Mode for the children text
     */
    ellipsizeMode?: EllipsizeProp | undefined;
}, "elevation" | keyof import("react-native").ViewProps | "ellipsizeMode" | "onPress" | "onLongPress" | "disabled" | "icon" | "mode" | "onClose" | "selected" | "delayLongPress" | keyof React.RefAttributes<View> | "selectedColor" | "showSelectedOverlay" | "avatar" | "closeIconAccessibilityLabel" | "closeIcon" | "textStyle" | "compact" | "elevated"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Pick<import("../Surface").Props, "theme" | "elevation" | keyof import("react-native").ViewProps | "key"> & React.RefAttributes<View> & {
    /**
     * Mode of the chip.
     * - `flat` - flat chip without outline.
     * - `outlined` - chip with an outline.
     */
    mode?: "flat" | "outlined" | undefined;
    /**
     * Text content of the `Chip`.
     */
    children: React.ReactNode;
    /**
     * Icon to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    icon?: IconSource | undefined;
    /**
     * Avatar to display for the `Chip`. Both icon and avatar cannot be specified.
     */
    avatar?: React.ReactNode;
    /**
     * Icon to display as the close button for the `Chip`. The icon appears only when the onClose prop is specified.
     */
    closeIcon?: IconSource | undefined;
    /**
     * Whether chip is selected.
     */
    selected?: boolean | undefined;
    /**
     * Whether to style the chip color as selected.
     */
    selectedColor?: string | undefined;
    /**
     * @supported Available in v5.x with theme version 3
     * Whether to display overlay on selected chip
     */
    showSelectedOverlay?: boolean | undefined;
    /**
     * Whether the chip is disabled. A disabled chip is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean | undefined;
    /**
     * Accessibility label for the chip. This is read by the screen reader when the user taps the chip.
     */
    accessibilityLabel?: string | undefined;
    /**
     * Accessibility label for the close icon. This is read by the screen reader when the user taps the close icon.
     */
    closeIconAccessibilityLabel?: string | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: ((e: GestureResponderEvent) => void) | undefined;
    /**
     * @supported Available in v5.x with theme version 3
     * Sets smaller horizontal paddings `12dp` around label, when there is only label.
     */
    compact?: boolean | undefined;
    /**
     * @supported Available in v5.x with theme version 3
     * Whether chip should have the elevation.
     */
    elevated?: boolean | undefined;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * The number of milliseconds a user must touch the element before executing `onLongPress`.
     */
    delayLongPress?: number | undefined;
    /**
     * Function to execute on close button press. The close button appears only when this prop is specified.
     */
    onClose?: (() => void) | undefined;
    /**
     * Style of chip's text
     */
    textStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * Pass down testID from chip props to touchable for Detox tests.
     */
    testID?: string | undefined;
    /**
     * Ellipsize Mode for the children text
     */
    ellipsizeMode?: EllipsizeProp | undefined;
}> & (({ mode, children, icon, avatar, selected, disabled, accessibilityLabel, closeIconAccessibilityLabel, onPress, onLongPress, delayLongPress, onClose, closeIcon, textStyle, style, theme, testID, selectedColor, showSelectedOverlay, ellipsizeMode, compact, elevated, ...rest }: Props) => JSX.Element), {}>;
export default _default;
