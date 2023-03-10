import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import type { InternalTheme } from '../../types';
export declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Title to show as the header for the section.
     */
    title?: string;
    /**
     * Content of the `Drawer.Section`.
     */
    children: React.ReactNode;
    /**
     * Whether to show `Divider` at the end of the section. True by default.
     */
    showDivider?: boolean;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
};
declare const _default: React.ComponentType<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
    /**
     * Title to show as the header for the section.
     */
    title?: string | undefined;
    /**
     * Content of the `Drawer.Section`.
     */
    children: React.ReactNode;
    /**
     * Whether to show `Divider` at the end of the section. True by default.
     */
    showDivider?: boolean | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
}, "title" | keyof import("react-native").ViewProps | keyof React.RefAttributes<View> | "showDivider"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").ViewProps & React.RefAttributes<View> & {
    /**
     * Title to show as the header for the section.
     */
    title?: string | undefined;
    /**
     * Content of the `Drawer.Section`.
     */
    children: React.ReactNode;
    /**
     * Whether to show `Divider` at the end of the section. True by default.
     */
    showDivider?: boolean | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
}> & {
    ({ children, title, theme, style, showDivider, ...rest }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
