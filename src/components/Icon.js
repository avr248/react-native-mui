import * as React from 'react';
import { I18nManager, Image, Platform, } from 'react-native';
import { Consumer as SettingsConsumer } from '../core/settings';
import { useInternalTheme } from '../core/theming';
import { accessibilityProps } from './MaterialCommunityIcon';
const isImageSource = (source) => 
// source is an object with uri
(typeof source === 'object' &&
    source !== null &&
    Object.prototype.hasOwnProperty.call(source, 'uri') &&
    typeof source.uri === 'string') ||
    // source is a module, e.g. - require('image')
    typeof source === 'number' ||
    // image url on web
    (Platform.OS === 'web' &&
        typeof source === 'string' &&
        (source.startsWith('data:image') ||
            /\.(bmp|jpg|jpeg|png|gif|svg)$/.test(source)));
const getIconId = (source) => {
    if (typeof source === 'object' &&
        source !== null &&
        Object.prototype.hasOwnProperty.call(source, 'uri') &&
        typeof source.uri === 'string') {
        return source.uri;
    }
    return source;
};
export const isValidIcon = (source) => typeof source === 'string' ||
    typeof source === 'function' ||
    isImageSource(source);
export const isEqualIcon = (a, b) => a === b || getIconId(a) === getIconId(b);
const Icon = ({ source, color, size, theme: themeOverrides, ...rest }) => {
    const theme = useInternalTheme(themeOverrides);
    const direction = typeof source === 'object' && source.direction && source.source
        ? source.direction === 'auto'
            ? I18nManager.getConstants().isRTL
                ? 'rtl'
                : 'ltr'
            : source.direction
        : null;
    const s = typeof source === 'object' && source.direction && source.source
        ? source.source
        : source;
    const iconColor = color || (theme.isV3 ? theme.colors.onSurface : theme.colors.text);
    if (isImageSource(s)) {
        return (React.createElement(Image, { ...rest, source: s, style: [
                {
                    transform: [{ scaleX: direction === 'rtl' ? -1 : 1 }],
                },
                {
                    width: size,
                    height: size,
                    tintColor: color,
                    resizeMode: `contain`,
                },
            ], ...accessibilityProps, accessibilityIgnoresInvertColors: true }));
    }
    else if (typeof s === 'string') {
        return (React.createElement(SettingsConsumer, null, ({ icon }) => {
            return icon?.({
                name: s,
                color: iconColor,
                size,
                direction,
            });
        }));
    }
    else if (typeof s === 'function') {
        return s({ color: iconColor, size, direction });
    }
    return null;
};
export default Icon;
