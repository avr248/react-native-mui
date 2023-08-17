import * as React from 'react';
import { StyleSheet, View, } from 'react-native';
import color from 'color';
import { useInternalTheme } from '../../core/theming';
import { black, white } from '../../styles/themes/v2/colors';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
/**
 * A component to show a single row inside of a table.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DataTable } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *      <DataTable.Row>
 *        <DataTable.Cell numeric>1</DataTable.Cell>
 *        <DataTable.Cell numeric>2</DataTable.Cell>
 *        <DataTable.Cell numeric>3</DataTable.Cell>
 *        <DataTable.Cell numeric>4</DataTable.Cell>
 *      </DataTable.Row>
 * );
 *
 * export default MyComponent;
 * ```
 *
 * @extends TouchableRipple props https://callstack.github.io/react-native-paper/docs/components/TouchableRipple
 */
const DataTableRow = ({ onPress, style, children, pointerEvents, theme: themeOverrides, ...rest }) => {
    const theme = useInternalTheme(themeOverrides);
    const borderBottomColor = theme.isV3
        ? theme.colors.surfaceVariant
        : color(theme.dark ? white : black)
            .alpha(0.12)
            .rgb()
            .string();
    return (React.createElement(TouchableRipple, { ...rest, onPress: onPress, style: [styles.container, { borderBottomColor }, style] },
        React.createElement(View, { style: styles.content, pointerEvents: pointerEvents }, children)));
};
DataTableRow.displayName = 'DataTable.Row';
const styles = StyleSheet.create({
    container: {
        borderStyle: 'solid',
        borderBottomWidth: StyleSheet.hairlineWidth,
        minHeight: 48,
        paddingHorizontal: 16,
    },
    content: {
        flex: 1,
        flexDirection: 'row',
    },
});
export default DataTableRow;
// @component-docs ignore-next-line
export { DataTableRow };