import * as React from 'react';
import { Animated, GestureResponderEvent, StyleProp, View, ViewStyle } from 'react-native';
import type { InternalTheme } from '../../types';
import Surface from '../Surface';
declare type OutlinedCardProps = {
    mode: 'outlined';
    elevation?: never;
};
declare type ElevatedCardProps = {
    mode?: 'elevated';
    elevation?: number;
};
declare type ContainedCardProps = {
    mode?: 'contained';
    elevation?: never;
};
declare type Mode = 'elevated' | 'outlined' | 'contained';
export declare type Props = React.ComponentProps<typeof Surface> & {
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `contained` - Card without outline and elevation @supported Available in v5.x with theme version 3
     * - `outlined` - Card with an outline.
     */
    mode?: Mode;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    /**
     * Function to execute on long press.
     */
    onLongPress?: () => void;
    /**
     * Function to execute on press.
     */
    onPress?: (e: GestureResponderEvent) => void;
    /**
     * The number of milliseconds a user must touch the element before executing `onLongPress`.
     */
    delayLongPress?: number;
    /**
     * Changes Card shadow and background on iOS and Android.
     */
    elevation?: 0 | 1 | 2 | 3 | 4 | 5 | Animated.Value;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean;
};
declare const _default: React.ComponentType<(Pick<OutlinedCardProps & Pick<import("../Surface").Props, "theme" | "elevation" | keyof import("react-native").ViewProps | "key"> & React.RefAttributes<View> & {
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `contained` - Card without outline and elevation @supported Available in v5.x with theme version 3
     * - `outlined` - Card with an outline.
     */
    mode?: Mode | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: ((e: GestureResponderEvent) => void) | undefined;
    /**
     * The number of milliseconds a user must touch the element before executing `onLongPress`.
     */
    delayLongPress?: number | undefined;
    /**
     * Changes Card shadow and background on iOS and Android.
     */
    elevation?: 0 | 3 | 2 | 1 | 4 | 5 | Animated.Value | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}, keyof import("react-native").ViewProps | "onPress" | "onLongPress" | "delayLongPress" | keyof React.RefAttributes<View> | keyof OutlinedCardProps> | Pick<ElevatedCardProps & Pick<import("../Surface").Props, "theme" | "elevation" | keyof import("react-native").ViewProps | "key"> & React.RefAttributes<View> & {
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `contained` - Card without outline and elevation @supported Available in v5.x with theme version 3
     * - `outlined` - Card with an outline.
     */
    mode?: Mode | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: ((e: GestureResponderEvent) => void) | undefined;
    /**
     * The number of milliseconds a user must touch the element before executing `onLongPress`.
     */
    delayLongPress?: number | undefined;
    /**
     * Changes Card shadow and background on iOS and Android.
     */
    elevation?: 0 | 3 | 2 | 1 | 4 | 5 | Animated.Value | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}, keyof import("react-native").ViewProps | "onPress" | "onLongPress" | "delayLongPress" | keyof React.RefAttributes<View> | keyof ElevatedCardProps> | Pick<ContainedCardProps & Pick<import("../Surface").Props, "theme" | "elevation" | keyof import("react-native").ViewProps | "key"> & React.RefAttributes<View> & {
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `contained` - Card without outline and elevation @supported Available in v5.x with theme version 3
     * - `outlined` - Card with an outline.
     */
    mode?: Mode | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: ((e: GestureResponderEvent) => void) | undefined;
    /**
     * The number of milliseconds a user must touch the element before executing `onLongPress`.
     */
    delayLongPress?: number | undefined;
    /**
     * Changes Card shadow and background on iOS and Android.
     */
    elevation?: 0 | 3 | 2 | 1 | 4 | 5 | Animated.Value | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}, keyof import("react-native").ViewProps | "onPress" | "onLongPress" | "delayLongPress" | keyof React.RefAttributes<View> | keyof ContainedCardProps>) & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<(OutlinedCardProps | ElevatedCardProps | ContainedCardProps) & Pick<import("../Surface").Props, "theme" | "elevation" | keyof import("react-native").ViewProps | "key"> & React.RefAttributes<View> & {
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `contained` - Card without outline and elevation @supported Available in v5.x with theme version 3
     * - `outlined` - Card with an outline.
     */
    mode?: Mode | undefined;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (() => void) | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: ((e: GestureResponderEvent) => void) | undefined;
    /**
     * The number of milliseconds a user must touch the element before executing `onLongPress`.
     */
    delayLongPress?: number | undefined;
    /**
     * Changes Card shadow and background on iOS and Android.
     */
    elevation?: 0 | 3 | 2 | 1 | 4 | 5 | Animated.Value | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string | undefined;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean | undefined;
}> & {
    ({ elevation: cardElevation, onLongPress, delayLongPress, onPress, mode: cardMode, children, style, theme, testID, accessible, ...rest }: (OutlinedCardProps | ElevatedCardProps | ContainedCardProps) & Pick<import("../Surface").Props, "theme" | "elevation" | keyof import("react-native").ViewProps | "key"> & React.RefAttributes<View> & {
        /**
         * Mode of the Card.
         * - `elevated` - Card with elevation.
         * - `contained` - Card without outline and elevation @supported Available in v5.x with theme version 3
         * - `outlined` - Card with an outline.
         */
        mode?: Mode | undefined;
        /**
         * Content of the `Card`.
         */
        children: React.ReactNode;
        /**
         * Function to execute on long press.
         */
        onLongPress?: (() => void) | undefined;
        /**
         * Function to execute on press.
         */
        onPress?: ((e: GestureResponderEvent) => void) | undefined;
        /**
         * The number of milliseconds a user must touch the element before executing `onLongPress`.
         */
        delayLongPress?: number | undefined;
        /**
         * Changes Card shadow and background on iOS and Android.
         */
        elevation?: 0 | 3 | 2 | 1 | 4 | 5 | Animated.Value | undefined;
        style?: StyleProp<ViewStyle>;
        /**
         * @optional
         */
        theme: InternalTheme;
        /**
         * Pass down testID from card props to touchable
         */
        testID?: string | undefined;
        /**
         * Pass down accessible from card props to touchable
         */
        accessible?: boolean | undefined;
    }): JSX.Element;
    Content: {
        ({ index, total, siblings, style, ...rest }: import("./CardContent").Props): JSX.Element;
        displayName: string;
    };
    Actions: {
        (props: import("./CardActions").Props): JSX.Element;
        displayName: string;
    };
    Cover: React.ComponentType<Pick<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: InternalTheme;
    }, keyof import("react-native").ImageProps | "index" | "total" | keyof React.RefAttributes<import("react-native").Image>> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").ImageProps & React.RefAttributes<import("react-native").Image> & {
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: InternalTheme;
    }> & {
        ({ index, total, style, theme, ...rest }: import("./CardCover").Props): JSX.Element;
        displayName: string;
    }, {}>;
    Title: React.ComponentType<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        titleVariant?: "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "titleLarge" | "titleMedium" | "titleSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "bodyLarge" | "bodyMedium" | "bodySmall" | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        subtitleVariant?: "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "titleLarge" | "titleMedium" | "titleSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "bodyLarge" | "bodyMedium" | "bodySmall" | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: InternalTheme;
    }, "title" | "left" | "right" | keyof import("react-native").ViewProps | keyof React.RefAttributes<View> | "titleStyle" | "titleNumberOfLines" | "index" | "total" | "titleVariant" | "subtitle" | "subtitleStyle" | "subtitleNumberOfLines" | "subtitleVariant" | "leftStyle" | "rightStyle"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").ViewProps & React.RefAttributes<View> & {
        title: React.ReactNode;
        titleStyle?: StyleProp<import("react-native").TextStyle>;
        titleNumberOfLines?: number | undefined;
        titleVariant?: "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "titleLarge" | "titleMedium" | "titleSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "bodyLarge" | "bodyMedium" | "bodySmall" | undefined;
        subtitle?: React.ReactNode;
        subtitleStyle?: StyleProp<import("react-native").TextStyle>;
        subtitleNumberOfLines?: number | undefined;
        subtitleVariant?: "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "titleLarge" | "titleMedium" | "titleSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "bodyLarge" | "bodyMedium" | "bodySmall" | undefined;
        left?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        leftStyle?: StyleProp<ViewStyle>;
        right?: ((props: {
            size: number;
        }) => React.ReactNode) | undefined;
        rightStyle?: StyleProp<ViewStyle>;
        index?: number | undefined;
        total?: number | undefined;
        style?: StyleProp<ViewStyle>;
        theme: InternalTheme;
    }> & {
        ({ title, titleStyle, titleNumberOfLines, titleVariant, subtitle, subtitleStyle, subtitleNumberOfLines, subtitleVariant, left, leftStyle, right, rightStyle, style, theme, }: import("./CardTitle").Props): JSX.Element;
        displayName: string;
    }, {}>;
}, {}>;
export default _default;
