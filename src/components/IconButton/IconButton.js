import * as React from 'react';
import { StyleSheet, } from 'react-native';
import { useInternalTheme } from '../../core/theming';
import { forwardRef } from '../../utils/forwardRef';
import CrossFadeIcon from '../CrossFadeIcon';
import Icon from '../Icon';
import Surface from '../Surface';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import { getIconButtonColor } from './utils';
const PADDING = 8;
/**
 * An icon button is a button which displays only an icon without a label.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { IconButton, MD3Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <IconButton
 *     icon="camera"
 *     iconColor={MD3Colors.error50}
 *     size={20}
 *     onPress={() => console.log('Pressed')}
 *   />
 * );
 *
 * export default MyComponent;
 * ```
 *
 * @extends TouchableRipple props https://callstack.github.io/react-native-paper/docs/components/TouchableRipple
 */
const IconButton = forwardRef(({ icon, iconColor: customIconColor, containerColor: customContainerColor, rippleColor: customRippleColor, size = 24, accessibilityLabel, disabled, onPress, selected = false, animated = false, mode, style, theme: themeOverrides, testID = 'icon-button', ...rest }, ref) => {
    const theme = useInternalTheme(themeOverrides);
    const { isV3 } = theme;
    const IconComponent = animated ? CrossFadeIcon : Icon;
    const { iconColor, rippleColor, backgroundColor, borderColor } = getIconButtonColor({
        theme,
        disabled,
        selected,
        mode,
        customIconColor,
        customContainerColor,
        customRippleColor,
    });
    const buttonSize = isV3 ? size + 2 * PADDING : size * 1.5;
    const { borderWidth = isV3 && mode === 'outlined' && !selected ? 1 : 0, borderRadius = buttonSize / 2, } = (StyleSheet.flatten(style) || {});
    const borderStyles = {
        borderWidth,
        borderRadius,
        borderColor,
    };
    return (React.createElement(Surface, { ref: ref, testID: `${testID}-container`, style: [
            {
                backgroundColor,
                width: buttonSize,
                height: buttonSize,
            },
            styles.container,
            borderStyles,
            !isV3 && disabled && styles.disabled,
            style,
        ], ...(isV3 && { elevation: 0 }) },
        React.createElement(TouchableRipple, { borderless: true, centered: true, onPress: onPress, rippleColor: rippleColor, accessibilityLabel: accessibilityLabel, style: [styles.touchable, { borderRadius }], 
            // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
            accessibilityTraits: disabled ? ['button', 'disabled'] : 'button', accessibilityComponentType: "button", accessibilityRole: "button", accessibilityState: { disabled }, disabled: disabled, hitSlop: TouchableRipple.supported
                ? { top: 10, left: 10, bottom: 10, right: 10 }
                : { top: 6, left: 6, bottom: 6, right: 6 }, testID: testID, ...rest },
            React.createElement(IconComponent, { color: iconColor, source: icon, size: size }))));
});
const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        margin: 6,
        elevation: 0,
    },
    touchable: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    disabled: {
        opacity: 0.32,
    },
});
export default IconButton;