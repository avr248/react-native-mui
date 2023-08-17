import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useInternalTheme } from '../../core/theming';
import { getSelectionControlIOSColor } from '../Checkbox/utils';
import MaterialCommunityIcon from '../MaterialCommunityIcon';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import { RadioButtonContext } from './RadioButtonGroup';
import { handlePress, isChecked } from './utils';
/**
 * Radio buttons allow the selection a single option from a set.
 * This component follows platform guidelines for iOS, but can be used
 * on any platform.
 */
const RadioButtonIOS = ({ disabled, onPress, theme: themeOverrides, status, value, testID, ...rest }) => {
    const theme = useInternalTheme(themeOverrides);
    return (React.createElement(RadioButtonContext.Consumer, null, (context) => {
        const checked = isChecked({
            contextValue: context?.value,
            status,
            value,
        }) === 'checked';
        const { checkedColor, rippleColor } = getSelectionControlIOSColor({
            theme,
            disabled,
            customColor: rest.color,
        });
        const opacity = checked ? 1 : 0;
        return (React.createElement(TouchableRipple, { ...rest, borderless: true, rippleColor: rippleColor, onPress: disabled
                ? undefined
                : (event) => {
                    handlePress({
                        onPress,
                        value,
                        onValueChange: context?.onValueChange,
                        event,
                    });
                }, accessibilityRole: "radio", accessibilityState: { disabled, checked }, accessibilityLiveRegion: "polite", style: styles.container, testID: testID, theme: theme },
            React.createElement(View, { style: { opacity } },
                React.createElement(MaterialCommunityIcon, { allowFontScaling: false, name: "check", size: 24, color: checkedColor, direction: "ltr" }))));
    }));
};
RadioButtonIOS.displayName = 'RadioButton.IOS';
const styles = StyleSheet.create({
    container: {
        borderRadius: 18,
        padding: 6,
    },
});
export default RadioButtonIOS;
// @component-docs ignore-next-line
export { RadioButtonIOS };
