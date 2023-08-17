import color from 'color';
export function getTextColor({ theme, disabled, type }) {
    const { colors, dark } = theme;
    if (type === 'error') {
        return colors?.error;
    }
    if (theme.isV3) {
        if (disabled) {
            return theme.colors.onSurfaceDisabled;
        }
        else {
            return theme.colors.onSurfaceVariant;
        }
    }
    return color(theme?.colors?.text)
        .alpha(dark ? 0.7 : 0.54)
        .rgb()
        .string();
}
