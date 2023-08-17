import * as React from 'react';
import { StyleSheet, View, } from 'react-native';
import { useInternalTheme } from '../../core/theming';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import Text from '../Typography/Text';
import RadioButton from './RadioButton';
import RadioButtonAndroid from './RadioButtonAndroid';
import { RadioButtonContext } from './RadioButtonGroup';
import RadioButtonIOS from './RadioButtonIOS';
import { handlePress, isChecked } from './utils';
/**
 * RadioButton.Item allows you to press the whole row (item) instead of only the RadioButton.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { RadioButton } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [value, setValue] = React.useState('first');
 *
 *   return (
 *     <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
 *       <RadioButton.Item label="First item" value="first" />
 *       <RadioButton.Item label="Second item" value="second" />
 *     </RadioButton.Group>
 *   );
 * };
 *
 * export default MyComponent;
 *```
 */
const RadioButtonItem = ({ value, label, style, labelStyle, onPress, disabled, color, uncheckedColor, status, theme: themeOverrides, accessibilityLabel = label, testID, mode, position = 'trailing', labelVariant = 'bodyLarge', }) => {
    const theme = useInternalTheme(themeOverrides);
    const radioButtonProps = { value, disabled, status, color, uncheckedColor };
    const isLeading = position === 'leading';
    let radioButton;
    if (mode === 'android') {
        radioButton = React.createElement(RadioButtonAndroid, { ...radioButtonProps });
    }
    else if (mode === 'ios') {
        radioButton = React.createElement(RadioButtonIOS, { ...radioButtonProps });
    }
    else {
        radioButton = React.createElement(RadioButton, { ...radioButtonProps });
    }
    const textColor = theme.isV3 ? theme.colors.onSurface : theme.colors.text;
    const disabledTextColor = theme.isV3
        ? theme.colors.onSurfaceDisabled
        : theme.colors.disabled;
    const textAlign = isLeading ? 'right' : 'left';
    const computedStyle = {
        color: disabled ? disabledTextColor : textColor,
        textAlign,
    };
    return (React.createElement(RadioButtonContext.Consumer, null, (context) => {
        const checked = isChecked({
            contextValue: context?.value,
            status,
            value,
        }) === 'checked';
        return (React.createElement(TouchableRipple, { onPress: (event) => handlePress({
                onPress: onPress,
                onValueChange: context?.onValueChange,
                value,
                event,
            }), accessibilityLabel: accessibilityLabel, accessibilityRole: "radio", accessibilityState: {
                checked,
                disabled,
            }, testID: testID, disabled: disabled, theme: theme },
            React.createElement(View, { style: [styles.container, style], pointerEvents: "none" },
                isLeading && radioButton,
                React.createElement(Text, { variant: labelVariant, style: [
                        styles.label,
                        !theme.isV3 && styles.font,
                        computedStyle,
                        labelStyle,
                    ] }, label),
                !isLeading && radioButton)));
    }));
};
RadioButtonItem.displayName = 'RadioButton.Item';
export default RadioButtonItem;
// @component-docs ignore-next-line
export { RadioButtonItem };
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    label: {
        flexShrink: 1,
        flexGrow: 1,
    },
    font: {
        fontSize: 16,
    },
});
