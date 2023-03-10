import * as React from 'react';
import { GestureResponderEvent, StyleProp, TextStyle, TouchableWithoutFeedback, ViewStyle } from 'react-native';
import type { InternalTheme } from '../../types';
export declare type Props = React.ComponentPropsWithRef<typeof TouchableWithoutFeedback> & {
    /**
     * Text content of the `DataTableTitle`.
     */
    children: React.ReactNode;
    /**
     * Align the text to the right. Generally monetary or number fields are aligned to right.
     */
    numeric?: boolean;
    /**
     * Direction of sorting. An arrow indicating the direction is displayed when this is given.
     */
    sortDirection?: 'ascending' | 'descending';
    /**
     * The number of lines to show.
     */
    numberOfLines?: number;
    /**
     * Function to execute on press.
     */
    onPress?: (e: GestureResponderEvent) => void;
    style?: StyleProp<ViewStyle>;
    /**
     * Text content style of the `DataTableTitle`.
     */
    textStyle?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
};
/**
 * A component to display title in table header.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/data-table-header.png" />
 *   </figure>
 * </div>
 *
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DataTable } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *       <DataTable>
 *         <DataTable.Header>
 *           <DataTable.Title
 *             sortDirection='descending'
 *           >
 *             Dessert
 *           </DataTable.Title>
 *           <DataTable.Title numeric>Calories</DataTable.Title>
 *           <DataTable.Title numeric>Fat (g)</DataTable.Title>
 *         </DataTable.Header>
 *       </DataTable>
 * );
 *
 * export default MyComponent;
 * ```
 */
declare const DataTableTitle: {
    ({ numeric, children, onPress, sortDirection, theme, textStyle, style, numberOfLines, ...rest }: Props): JSX.Element;
    displayName: string;
};
declare const _default: React.ComponentType<Pick<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<TouchableWithoutFeedback> & {
    /**
     * Text content of the `DataTableTitle`.
     */
    children: React.ReactNode;
    /**
     * Align the text to the right. Generally monetary or number fields are aligned to right.
     */
    numeric?: boolean | undefined;
    /**
     * Direction of sorting. An arrow indicating the direction is displayed when this is given.
     */
    sortDirection?: "ascending" | "descending" | undefined;
    /**
     * The number of lines to show.
     */
    numberOfLines?: number | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: ((e: GestureResponderEvent) => void) | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * Text content style of the `DataTableTitle`.
     */
    textStyle?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
}, "numberOfLines" | "numeric" | keyof import("react-native").TouchableWithoutFeedbackProps | "textStyle" | "sortDirection" | keyof React.RefAttributes<TouchableWithoutFeedback>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<TouchableWithoutFeedback> & {
    /**
     * Text content of the `DataTableTitle`.
     */
    children: React.ReactNode;
    /**
     * Align the text to the right. Generally monetary or number fields are aligned to right.
     */
    numeric?: boolean | undefined;
    /**
     * Direction of sorting. An arrow indicating the direction is displayed when this is given.
     */
    sortDirection?: "ascending" | "descending" | undefined;
    /**
     * The number of lines to show.
     */
    numberOfLines?: number | undefined;
    /**
     * Function to execute on press.
     */
    onPress?: ((e: GestureResponderEvent) => void) | undefined;
    style?: StyleProp<ViewStyle>;
    /**
     * Text content style of the `DataTableTitle`.
     */
    textStyle?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
}> & {
    ({ numeric, children, onPress, sortDirection, theme, textStyle, style, numberOfLines, ...rest }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
export { DataTableTitle };
