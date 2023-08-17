import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useInternalTheme } from '../../core/theming';
import { white } from '../../styles/themes/v2/colors';
import getContrastingColor from '../../utils/getContrastingColor';
import Icon from '../Icon';
const defaultSize = 64;
/**
 * Avatars can be used to represent people in a graphical way.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Avatar.Icon size={24} icon="folder" />
 * );
 * ```
 */
const Avatar = ({ icon, size = defaultSize, style, theme: themeOverrides, ...rest }) => {
    const theme = useInternalTheme(themeOverrides);
    const { backgroundColor = theme.colors?.primary, ...restStyle } = StyleSheet.flatten(style) || {};
    const textColor = rest.color ??
        getContrastingColor(backgroundColor, white, 'rgba(0, 0, 0, .54)');
    return (React.createElement(View, { style: [
            {
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor,
            },
            styles.container,
            restStyle,
        ], ...rest },
        React.createElement(Icon, { source: icon, color: textColor, size: size * 0.6 })));
};
Avatar.displayName = 'Avatar.Icon';
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default Avatar;