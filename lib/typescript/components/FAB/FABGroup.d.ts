import * as React from 'react';
import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from 'react-native';
import type { InternalTheme } from '../../types';
import type { IconSource } from '../Icon';
export declare type Props = {
    /**
     * Action items to display in the form of a speed dial.
     * An action item should contain the following properties:
     * - `icon`: icon to display (required)
     * - `label`: optional label text
     * - `color`: custom icon color of the action item
     * - `labelTextColor`: custom label text color of the action item
     * - `accessibilityLabel`: accessibility label for the action, uses label by default if specified
     * - `accessibilityHint`: accessibility hint for the action
     * - `style`: pass additional styles for the fab item, for example, `backgroundColor`
     * - `containerStyle`: pass additional styles for the fab item label container, for example, `backgroundColor` @supported Available in 5.x
     * - `labelStyle`: pass additional styles for the fab item label, for example, `fontSize`
     * - `onPress`: callback that is called when `FAB` is pressed (required)
     * - `size`: size of action item. Defaults to `small`. @supported Available in v5.x
     * - `testID`: testID to be used on tests
     */
    actions: Array<{
        icon: IconSource;
        label?: string;
        color?: string;
        labelTextColor?: string;
        accessibilityLabel?: string;
        accessibilityHint?: string;
        style?: StyleProp<ViewStyle>;
        containerStyle?: StyleProp<ViewStyle>;
        labelStyle?: StyleProp<TextStyle>;
        onPress: (e: GestureResponderEvent) => void;
        size?: 'small' | 'medium';
        testID?: string;
    }>;
    /**
     * Icon to display for the `FAB`.
     * You can toggle it based on whether the speed dial is open to display a different icon.
     */
    icon: IconSource;
    /**
     * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
     */
    accessibilityLabel?: string;
    /**
     * Custom color for the `FAB`.
     */
    color?: string;
    /**
     * Custom backdrop color for opened speed dial background.
     */
    backdropColor?: string;
    /**
     * Function to execute on pressing the `FAB`.
     */
    onPress?: (e: GestureResponderEvent) => void;
    /**
     * Whether the speed dial is open.
     */
    open: boolean;
    /**
     * Callback which is called on opening and closing the speed dial.
     * The open state needs to be updated when it's called, otherwise the change is dropped.
     */
    onStateChange: (state: {
        open: boolean;
    }) => void;
    /**
     * Whether `FAB` is currently visible.
     */
    visible: boolean;
    /**
     * Style for the group. You can use it to pass additional styles if you need.
     * For example, you can set an additional padding if you have a tab bar at the bottom.
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Style for the FAB. It allows to pass the FAB button styles, such as backgroundColor.
     */
    fabStyle?: StyleProp<ViewStyle>;
    /**
     * @supported Available in v5.x with theme version 3
     *
     * Color mappings variant for combinations of container and icon colors.
     */
    variant?: 'primary' | 'secondary' | 'tertiary' | 'surface';
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * Optional label for `FAB`.
     */
    label?: string;
    /**
     * Pass down testID from Group props to FAB.
     */
    testID?: string;
};
declare const _default: React.ComponentType<Pick<Props, "label" | "style" | "visible" | "testID" | "accessibilityLabel" | "color" | "onPress" | "icon" | "open" | "variant" | "actions" | "fabStyle" | "onStateChange" | "backdropColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & {
    ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, label, testID, onStateChange, color: colorProp, variant, backdropColor: customBackdropColor, }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
declare const FABGroupWithTheme: React.ComponentType<Pick<Props, "label" | "style" | "visible" | "testID" | "accessibilityLabel" | "color" | "onPress" | "icon" | "open" | "variant" | "actions" | "fabStyle" | "onStateChange" | "backdropColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & {
    ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, label, testID, onStateChange, color: colorProp, variant, backdropColor: customBackdropColor, }: Props): JSX.Element;
    displayName: string;
}, {}>;
export { FABGroupWithTheme as FABGroup };
