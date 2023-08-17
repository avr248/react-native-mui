import * as React from 'react';
import { I18nManager, StyleSheet } from 'react-native';
import color from 'color';
import { useInternalTheme } from '../../../core/theming';
import Text from './Text';
const StyledText = ({ alpha = 1, family, style, theme: themeOverrides, ...rest }) => {
    const theme = useInternalTheme(themeOverrides);
    const textColor = color(theme.isV3 ? theme.colors.onSurface : theme.colors?.text)
        .alpha(alpha)
        .rgb()
        .string();
    const writingDirection = I18nManager.getConstants().isRTL ? 'rtl' : 'ltr';
    return (React.createElement(Text, { ...rest, style: [
            styles.text,
            {
                color: textColor,
                ...(!theme.isV3 && theme.fonts?.[family]),
                writingDirection,
            },
            style,
        ] }));
};
const styles = StyleSheet.create({
    text: {
        textAlign: 'left',
    },
});
export default StyledText;
