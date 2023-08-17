import * as React from 'react';
import { StyleSheet, View, } from 'react-native';
import { useInternalTheme } from '../../core/theming';
import ListSubheader from './ListSubheader';
/**
 * A component used to group list items.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List, MD3Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <List.Section>
 *     <List.Subheader>Some title</List.Subheader>
 *     <List.Item title="First Item" left={() => <List.Icon icon="folder" />} />
 *     <List.Item
 *       title="Second Item"
 *       left={() => <List.Icon color={MD3Colors.tertiary70} icon="folder" />}
 *     />
 *   </List.Section>
 * );
 *
 * export default MyComponent;
 * ```
 */
const ListSection = ({ children, title, titleStyle, style, theme: themeOverrides, ...rest }) => {
    const theme = useInternalTheme(themeOverrides);
    const viewProps = { ...rest, theme };
    return (React.createElement(View, { ...viewProps, style: [styles.container, style] },
        title ? (React.createElement(ListSubheader, { style: titleStyle, theme: theme }, title)) : null,
        children));
};
ListSection.displayName = 'List.Section';
const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
    },
});
export default ListSection;
