import * as React from 'react';
import { Platform } from 'react-native';
import { useInternalTheme } from '../../core/theming';
import CheckboxAndroid from './CheckboxAndroid';
import CheckboxIOS from './CheckboxIOS';
/**
 * Checkboxes allow the selection of multiple options from a set.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Checkbox } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [checked, setChecked] = React.useState(false);
 *
 *   return (
 *     <Checkbox
 *       status={checked ? 'checked' : 'unchecked'}
 *       onPress={() => {
 *         setChecked(!checked);
 *       }}
 *     />
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const Checkbox = ({ theme: themeOverrides, ...props }) => {
    const theme = useInternalTheme(themeOverrides);
    return Platform.OS === 'ios' ? (React.createElement(CheckboxIOS, { ...props, theme: theme })) : (React.createElement(CheckboxAndroid, { ...props, theme: theme }));
};
export default Checkbox;
// @component-docs ignore-next-line
const CheckboxWithTheme = Checkbox;
// @component-docs ignore-next-line
export { CheckboxWithTheme as Checkbox };
