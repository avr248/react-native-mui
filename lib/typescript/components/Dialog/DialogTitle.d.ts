import * as React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import type { InternalTheme } from '../../types';
import Title from '../Typography/v2/Title';
export declare type Props = React.ComponentPropsWithRef<typeof Title> & {
    /**
     * Title text for the `DialogTitle`.
     */
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
};
/**
 * A component to show a title in a Dialog.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="small" src="screenshots/dialog-title.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Dialog, Portal, Text } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(false);
 *
 *   const hideDialog = () => setVisible(false);
 *
 *   return (
 *     <Portal>
 *       <Dialog visible={visible} onDismiss={hideDialog}>
 *         <Dialog.Title>This is a title</Dialog.Title>
 *         <Dialog.Content>
 *           <Text variant="bodyMedium">This is simple dialog</Text>
 *         </Dialog.Content>
 *       </Dialog>
 *     </Portal>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
declare const DialogTitle: {
    ({ children, theme, style, ...rest }: Props): JSX.Element;
    displayName: string;
};
declare const _default: React.ComponentType<Pick<import("react-native").TextProps & {
    children: React.ReactNode;
} & {
    /**
     * Title text for the `DialogTitle`.
     */
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
}, keyof import("react-native").TextProps> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").TextProps & {
    children: React.ReactNode;
} & {
    /**
     * Title text for the `DialogTitle`.
     */
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
}> & {
    ({ children, theme, style, ...rest }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
export { DialogTitle };
