import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import color from 'color';
import { useInternalTheme } from '../../core/theming';
import { black, white } from '../../styles/themes/v2/colors';
/**
 * A component to display title in table header.
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
const DataTableHeader = ({ children, style, theme: themeOverrides, ...rest }) => {
    const theme = useInternalTheme(themeOverrides);
    const borderBottomColor = theme.isV3
        ? theme.colors.surfaceVariant
        : color(theme.dark ? white : black)
            .alpha(0.12)
            .rgb()
            .string();
    return (React.createElement(View, { ...rest, style: [styles.header, { borderBottomColor }, style] }, children));
};
DataTableHeader.displayName = 'DataTable.Header';
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        borderBottomWidth: StyleSheet.hairlineWidth * 2,
    },
});
export default DataTableHeader;
// @component-docs ignore-next-line
export { DataTableHeader };
