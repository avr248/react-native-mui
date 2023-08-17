import * as React from 'react';
import { Platform } from 'react-native';
import { useInternalTheme } from '../../core/theming';
import RadioButtonAndroid from './RadioButtonAndroid';
import RadioButtonIOS from './RadioButtonIOS';
/**
 * Radio buttons allow the selection a single option from a set.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { RadioButton } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [checked, setChecked] = React.useState('first');
 *
 *   return (
 *     <View>
 *       <RadioButton
 *         value="first"
 *         status={ checked === 'first' ? 'checked' : 'unchecked' }
 *         onPress={() => setChecked('first')}
 *       />
 *       <RadioButton
 *         value="second"
 *         status={ checked === 'second' ? 'checked' : 'unchecked' }
 *         onPress={() => setChecked('second')}
 *       />
 *     </View>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const RadioButton = ({ theme: themeOverrides, ...props }) => {
    const theme = useInternalTheme(themeOverrides);
    const Button = Platform.select({
        default: RadioButtonAndroid,
        ios: RadioButtonIOS,
    });
    return React.createElement(Button, { ...props, theme: theme });
};
export default RadioButton;
