import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import type { InternalTheme } from '../../types';
export declare type Props = Partial<React.ComponentPropsWithRef<typeof View>> & {
    /**
     * Whether the background color is a dark color. A dark appbar will render light text and vice-versa.
     */
    dark?: boolean;
    /**
     * Content of the `Appbar`.
     */
    children: React.ReactNode;
    /**
     * @supported Available in v5.x with theme version 3
     *
     * Mode of the Appbar.
     * - `small` - Appbar with default height (64).
     * - `medium` - Appbar with medium height (112).
     * - `large` - Appbar with large height (152).
     * - `center-aligned` - Appbar with default height and center-aligned title.
     */
    mode?: 'small' | 'medium' | 'large' | 'center-aligned';
    /**
     * @supported Available in v5.x with theme version 3
     * Whether Appbar background should have the elevation along with primary color pigment.
     */
    elevated?: boolean;
    /**
     * Safe area insets for the Appbar. This can be used to avoid elements like the navigation bar on Android and bottom safe area on iOS.
     */
    safeAreaInsets?: {
        bottom?: number;
        top?: number;
        left?: number;
        right?: number;
    };
    /**
     * @optional
     */
    theme: InternalTheme;
    style?: StyleProp<ViewStyle>;
};
declare const _default: React.ComponentType<Pick<Partial<import("react-native").ViewProps & React.RefAttributes<View>> & {
    /**
     * Whether the background color is a dark color. A dark appbar will render light text and vice-versa.
     */
    dark?: boolean | undefined;
    /**
     * Content of the `Appbar`.
     */
    children: React.ReactNode;
    /**
     * @supported Available in v5.x with theme version 3
     *
     * Mode of the Appbar.
     * - `small` - Appbar with default height (64).
     * - `medium` - Appbar with medium height (112).
     * - `large` - Appbar with large height (152).
     * - `center-aligned` - Appbar with default height and center-aligned title.
     */
    mode?: "small" | "medium" | "large" | "center-aligned" | undefined;
    /**
     * @supported Available in v5.x with theme version 3
     * Whether Appbar background should have the elevation along with primary color pigment.
     */
    elevated?: boolean | undefined;
    /**
     * Safe area insets for the Appbar. This can be used to avoid elements like the navigation bar on Android and bottom safe area on iOS.
     */
    safeAreaInsets?: {
        bottom?: number | undefined;
        top?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | undefined;
    /**
     * @optional
     */
    theme: InternalTheme;
    style?: StyleProp<ViewStyle>;
}, "dark" | keyof import("react-native").ViewProps | "mode" | keyof React.RefAttributes<View> | "elevated" | "safeAreaInsets"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Partial<import("react-native").ViewProps & React.RefAttributes<View>> & {
    /**
     * Whether the background color is a dark color. A dark appbar will render light text and vice-versa.
     */
    dark?: boolean | undefined;
    /**
     * Content of the `Appbar`.
     */
    children: React.ReactNode;
    /**
     * @supported Available in v5.x with theme version 3
     *
     * Mode of the Appbar.
     * - `small` - Appbar with default height (64).
     * - `medium` - Appbar with medium height (112).
     * - `large` - Appbar with large height (152).
     * - `center-aligned` - Appbar with default height and center-aligned title.
     */
    mode?: "small" | "medium" | "large" | "center-aligned" | undefined;
    /**
     * @supported Available in v5.x with theme version 3
     * Whether Appbar background should have the elevation along with primary color pigment.
     */
    elevated?: boolean | undefined;
    /**
     * Safe area insets for the Appbar. This can be used to avoid elements like the navigation bar on Android and bottom safe area on iOS.
     */
    safeAreaInsets?: {
        bottom?: number | undefined;
        top?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | undefined;
    /**
     * @optional
     */
    theme: InternalTheme;
    style?: StyleProp<ViewStyle>;
}> & (({ children, dark, style, theme, mode, elevated, safeAreaInsets, ...rest }: Props) => JSX.Element), {}>;
export default _default;
declare const AppbarWithTheme: React.ComponentType<Pick<Partial<import("react-native").ViewProps & React.RefAttributes<View>> & {
    /**
     * Whether the background color is a dark color. A dark appbar will render light text and vice-versa.
     */
    dark?: boolean | undefined;
    /**
     * Content of the `Appbar`.
     */
    children: React.ReactNode;
    /**
     * @supported Available in v5.x with theme version 3
     *
     * Mode of the Appbar.
     * - `small` - Appbar with default height (64).
     * - `medium` - Appbar with medium height (112).
     * - `large` - Appbar with large height (152).
     * - `center-aligned` - Appbar with default height and center-aligned title.
     */
    mode?: "small" | "medium" | "large" | "center-aligned" | undefined;
    /**
     * @supported Available in v5.x with theme version 3
     * Whether Appbar background should have the elevation along with primary color pigment.
     */
    elevated?: boolean | undefined;
    /**
     * Safe area insets for the Appbar. This can be used to avoid elements like the navigation bar on Android and bottom safe area on iOS.
     */
    safeAreaInsets?: {
        bottom?: number | undefined;
        top?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | undefined;
    /**
     * @optional
     */
    theme: InternalTheme;
    style?: StyleProp<ViewStyle>;
}, "dark" | keyof import("react-native").ViewProps | "mode" | keyof React.RefAttributes<View> | "elevated" | "safeAreaInsets"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Partial<import("react-native").ViewProps & React.RefAttributes<View>> & {
    /**
     * Whether the background color is a dark color. A dark appbar will render light text and vice-versa.
     */
    dark?: boolean | undefined;
    /**
     * Content of the `Appbar`.
     */
    children: React.ReactNode;
    /**
     * @supported Available in v5.x with theme version 3
     *
     * Mode of the Appbar.
     * - `small` - Appbar with default height (64).
     * - `medium` - Appbar with medium height (112).
     * - `large` - Appbar with large height (152).
     * - `center-aligned` - Appbar with default height and center-aligned title.
     */
    mode?: "small" | "medium" | "large" | "center-aligned" | undefined;
    /**
     * @supported Available in v5.x with theme version 3
     * Whether Appbar background should have the elevation along with primary color pigment.
     */
    elevated?: boolean | undefined;
    /**
     * Safe area insets for the Appbar. This can be used to avoid elements like the navigation bar on Android and bottom safe area on iOS.
     */
    safeAreaInsets?: {
        bottom?: number | undefined;
        top?: number | undefined;
        left?: number | undefined;
        right?: number | undefined;
    } | undefined;
    /**
     * @optional
     */
    theme: InternalTheme;
    style?: StyleProp<ViewStyle>;
}> & (({ children, dark, style, theme, mode, elevated, safeAreaInsets, ...rest }: Props) => JSX.Element), {}>;
export { AppbarWithTheme as Appbar };
