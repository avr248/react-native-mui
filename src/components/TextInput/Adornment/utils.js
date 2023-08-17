import color from 'color';
export function getTextColor({ theme, disabled }) {
    if (theme.isV3) {
        if (disabled) {
            return theme.colors.onSurfaceDisabled;
        }
        return theme.colors.onSurfaceVariant;
    }
    return color(theme.colors?.text)
        .alpha(theme.dark ? 0.7 : 0.54)
        .rgb()
        .string();
}
export function getIconColor({ theme, isTextInputFocused, disabled, customColor, }) {
    if (typeof customColor === 'function') {
        return customColor(isTextInputFocused);
    }
    if (customColor) {
        return customColor;
    }
    if (!theme.isV3) {
        return theme.colors.text;
    }
    if (disabled) {
        return theme.colors.onSurfaceDisabled;
    }
    return theme.colors.onSurfaceVariant;
}
