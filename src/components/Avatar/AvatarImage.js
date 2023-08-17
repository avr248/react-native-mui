import * as React from 'react';
import { Image, StyleSheet, View, } from 'react-native';
import { useInternalTheme } from '../../core/theming';
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
 *   <Avatar.Image size={24} source={require('../assets/avatar.png')} />
 * );
 * export default MyComponent
 * ```
 */
const AvatarImage = ({ size = defaultSize, source, style, onError, onLayout, onLoad, onLoadEnd, onLoadStart, onProgress, theme: themeOverrides, testID, ...rest }) => {
    const { colors } = useInternalTheme(themeOverrides);
    const { backgroundColor = colors?.primary } = StyleSheet.flatten(style) || {};
    return (React.createElement(View, { style: [
            {
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor,
            },
            style,
        ], ...rest },
        typeof source === 'function' && source({ size }),
        typeof source !== 'function' && (React.createElement(Image, { testID: testID, source: source, style: { width: size, height: size, borderRadius: size / 2 }, onError: onError, onLayout: onLayout, onLoad: onLoad, onLoadEnd: onLoadEnd, onLoadStart: onLoadStart, onProgress: onProgress, accessibilityIgnoresInvertColors: true }))));
};
AvatarImage.displayName = 'Avatar.Image';
export default AvatarImage;
