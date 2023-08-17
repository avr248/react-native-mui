import * as React from 'react';
import { StyleSheet, useWindowDimensions, View, } from 'react-native';
import { useInternalTheme } from '../../core/theming';
import { white } from '../../styles/themes/v2/colors';
import getContrastingColor from '../../utils/getContrastingColor';
import Text from '../Typography/Text';
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
 *   <Avatar.Text size={24} label="XD" />
 * );
 * ```
 */
const AvatarText = ({ label, size = defaultSize, style, labelStyle, color: customColor, theme: themeOverrides, ...rest }) => {
    const theme = useInternalTheme(themeOverrides);
    const { backgroundColor = theme.colors?.primary, ...restStyle } = StyleSheet.flatten(style) || {};
    const textColor = customColor ??
        getContrastingColor(backgroundColor, white, 'rgba(0, 0, 0, .54)');
    const { fontScale } = useWindowDimensions();
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
        React.createElement(Text, { style: [
                styles.text,
                {
                    color: textColor,
                    fontSize: size / 2,
                    lineHeight: size / fontScale,
                },
                labelStyle,
            ], numberOfLines: 1 }, label)));
};
AvatarText.displayName = 'Avatar.Text';
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        textAlignVertical: 'center',
    },
});
export default AvatarText;
