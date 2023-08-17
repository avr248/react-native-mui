import * as React from 'react';
import { View, StyleSheet } from 'react-native';
/**
 * A component to show content in a Dialog.
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
const DialogContent = (props) => (React.createElement(View, { ...props, style: [styles.container, props.style] }, props.children));
DialogContent.displayName = 'Dialog.Content';
const styles = StyleSheet.create({
    container: {
        paddingBottom: 24,
        paddingHorizontal: 24,
    },
});
export default DialogContent;
