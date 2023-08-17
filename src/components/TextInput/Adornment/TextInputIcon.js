import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { useInternalTheme } from '../../../core/theming';
import IconButton from '../../IconButton/IconButton';
import { ICON_SIZE } from '../constants';
import { getConstants } from '../helpers';
import { getIconColor } from './utils';
const StyleContext = React.createContext({
    style: {},
    isTextInputFocused: false,
    forceFocus: () => { },
    testID: '',
});
const IconAdornment = ({ icon, topPosition, side, isTextInputFocused, forceFocus, testID, theme: themeOverrides, disabled, }) => {
    const { isV3 } = useInternalTheme(themeOverrides);
    const { ICON_OFFSET } = getConstants(isV3);
    const style = {
        top: topPosition,
        [side]: ICON_OFFSET,
    };
    const contextState = {
        style,
        isTextInputFocused,
        forceFocus,
        testID,
        disabled,
    };
    return (React.createElement(StyleContext.Provider, { value: contextState }, icon));
};
/**
 * A component to render a leading / trailing icon in the TextInput
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { TextInput } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [text, setText] = React.useState('');
 *
 *   return (
 *     <TextInput
 *       label="Password"
 *       secureTextEntry
 *       right={<TextInput.Icon icon="eye" />}
 *     />
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const TextInputIcon = ({ icon, onPress, forceTextInputFocus, color: customColor, theme: themeOverrides, rippleColor, ...rest }) => {
    const { style, isTextInputFocused, forceFocus, testID, disabled } = React.useContext(StyleContext);
    const onPressWithFocusControl = React.useCallback((e) => {
        if (forceTextInputFocus && !isTextInputFocused) {
            forceFocus();
        }
        onPress?.(e);
    }, [forceTextInputFocus, forceFocus, isTextInputFocused, onPress]);
    const theme = useInternalTheme(themeOverrides);
    const iconColor = getIconColor({
        theme,
        disabled,
        isTextInputFocused,
        customColor,
    });
    return (React.createElement(View, { style: [styles.container, style] },
        React.createElement(IconButton, { icon: icon, style: styles.iconButton, size: ICON_SIZE, onPress: onPressWithFocusControl, iconColor: iconColor, testID: testID, theme: themeOverrides, rippleColor: rippleColor, ...rest })));
};
TextInputIcon.displayName = 'TextInput.Icon';
TextInputIcon.defaultProps = {
    forceTextInputFocus: true,
};
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: ICON_SIZE,
        height: ICON_SIZE,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButton: {
        margin: 0,
    },
});
export default TextInputIcon;
// @component-docs ignore-next-line
export { IconAdornment };
