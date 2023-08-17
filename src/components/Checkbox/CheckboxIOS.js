import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useInternalTheme } from '../../core/theming';
import MaterialCommunityIcon from '../MaterialCommunityIcon';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import { getSelectionControlIOSColor } from './utils';
/**
 * Checkboxes allow the selection of multiple options from a set.
 * This component follows platform guidelines for iOS, but can be used
 * on any platform.
 */
const CheckboxIOS = ({ status, disabled, onPress, theme: themeOverrides, testID, ...rest }) => {
    const theme = useInternalTheme(themeOverrides);
    const checked = status === 'checked';
    const indeterminate = status === 'indeterminate';
    const { checkedColor, rippleColor } = getSelectionControlIOSColor({
        theme,
        disabled,
        customColor: rest.color,
    });
    const icon = indeterminate ? 'minus' : 'check';
    const opacity = indeterminate || checked ? 1 : 0;
    return (React.createElement(TouchableRipple, { ...rest, borderless: true, rippleColor: rippleColor, onPress: onPress, disabled: disabled, accessibilityRole: "checkbox", accessibilityState: { disabled, checked }, accessibilityLiveRegion: "polite", style: styles.container, testID: testID, theme: theme },
        React.createElement(View, { style: { opacity } },
            React.createElement(MaterialCommunityIcon, { allowFontScaling: false, name: icon, size: 24, color: checkedColor, direction: "ltr" }))));
};
CheckboxIOS.displayName = 'Checkbox.IOS';
const styles = StyleSheet.create({
    container: {
        borderRadius: 18,
        padding: 6,
    },
});
export default CheckboxIOS;
// @component-docs ignore-next-line
export { CheckboxIOS };
