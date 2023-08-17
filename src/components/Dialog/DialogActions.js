import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useInternalTheme } from '../../core/theming';
/**
 * A component to show a list of actions in a Dialog.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Button, Dialog, Portal } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(false);
 *
 *   const hideDialog = () => setVisible(false);
 *
 *   return (
 *     <Portal>
 *       <Dialog visible={visible} onDismiss={hideDialog}>
 *         <Dialog.Actions>
 *           <Button onPress={() => console.log('Cancel')}>Cancel</Button>
 *           <Button onPress={() => console.log('Ok')}>Ok</Button>
 *         </Dialog.Actions>
 *       </Dialog>
 *     </Portal>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const DialogActions = (props) => {
    const { isV3 } = useInternalTheme(props.theme);
    const actionsLength = React.Children.toArray(props.children).length;
    return (React.createElement(View, { ...props, style: [isV3 ? styles.v3Container : styles.container, props.style] }, React.Children.map(props.children, (child, i) => React.isValidElement(child)
        ? React.cloneElement(child, {
            compact: true,
            uppercase: !isV3,
            style: [
                isV3 && {
                    marginRight: i + 1 === actionsLength ? 0 : 8,
                },
                child.props.style,
            ],
        })
        : child)));
};
DialogActions.displayName = 'Dialog.Actions';
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 8,
    },
    v3Container: {
        flexDirection: 'row',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 24,
        paddingHorizontal: 24,
    },
});
export default DialogActions;
