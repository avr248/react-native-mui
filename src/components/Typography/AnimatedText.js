import * as React from 'react';
import { Animated, I18nManager, StyleSheet } from 'react-native';
import { useInternalTheme } from '../../core/theming';
/**
 * Animated text component which follows styles from the theme.
 *
 * @extends Text props https://reactnative.dev/docs/text#props
 */
function AnimatedText({ style, theme: themeOverrides, variant, ...rest }) {
    const theme = useInternalTheme(themeOverrides);
    const writingDirection = I18nManager.getConstants().isRTL ? 'rtl' : 'ltr';
    if (theme.isV3 && variant) {
        const font = theme.fonts[variant];
        if (typeof font !== 'object') {
            throw new Error(`Variant ${variant} was not provided properly. Valid variants are ${Object.keys(theme.fonts).join(', ')}.`);
        }
        return (React.createElement(Animated.Text, { ...rest, style: [
                font,
                styles.text,
                { writingDirection, color: theme.colors.onSurface },
                style,
            ] }));
    }
    else {
        const font = !theme.isV3 ? theme.fonts.regular : theme.fonts.bodyMedium;
        const textStyle = {
            ...font,
            color: theme.isV3 ? theme.colors.onSurface : theme.colors.text,
        };
        return (React.createElement(Animated.Text, { ...rest, style: [
                styles.text,
                textStyle,
                {
                    writingDirection,
                },
                style,
            ] }));
    }
}
const styles = StyleSheet.create({
    text: {
        textAlign: 'left',
    },
});
export const customAnimatedText = () => AnimatedText;
export default AnimatedText;
