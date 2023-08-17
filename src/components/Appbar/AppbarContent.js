import * as React from 'react';
import { Platform, StyleSheet, TouchableWithoutFeedback, View, } from 'react-native';
import color from 'color';
import { useInternalTheme } from '../../core/theming';
import { white } from '../../styles/themes/v2/colors';
import Text from '../Typography/Text';
import { modeTextVariant } from './utils';
/**
 * A component used to display a title and optional subtitle in an appbar.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *     <Appbar.Header>
 *        <Appbar.Content title="Title" />
 *     </Appbar.Header>
 * );
 *
 * export default MyComponent;
 * ```
 */
const AppbarContent = ({ color: titleColor, subtitle, subtitleStyle, onPress, disabled, style, titleRef, titleStyle, title, mode = 'small', theme: themeOverrides, testID = 'appbar-content', ...rest }) => {
    const theme = useInternalTheme(themeOverrides);
    const { isV3, colors } = theme;
    const titleTextColor = titleColor
        ? titleColor
        : isV3
            ? colors.onSurface
            : white;
    const subtitleColor = color(titleTextColor).alpha(0.7).rgb().string();
    const modeContainerStyles = {
        small: styles.v3DefaultContainer,
        medium: styles.v3MediumContainer,
        large: styles.v3LargeContainer,
        'center-aligned': styles.v3DefaultContainer,
    };
    const variant = modeTextVariant[mode];
    const content = (React.createElement(View, { pointerEvents: "box-none", style: [styles.container, isV3 && modeContainerStyles[mode], style], testID: testID, ...rest },
        typeof title === 'string' ? (React.createElement(Text, { ...(isV3 && { variant }), ref: titleRef, style: [
                {
                    color: titleTextColor,
                    ...(isV3
                        ? theme.fonts[variant]
                        : Platform.OS === 'ios'
                            ? theme.fonts.regular
                            : theme.fonts.medium),
                },
                !isV3 && styles.title,
                titleStyle,
            ], numberOfLines: 1, accessible: true, accessibilityRole: onPress
                ? 'none'
                : Platform.OS === 'web'
                    ? 'heading'
                    : 'header', 
            // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
            accessibilityTraits: "header", testID: `${testID}-title-text` }, title)) : (title),
        !isV3 && subtitle ? (React.createElement(Text, { style: [styles.subtitle, { color: subtitleColor }, subtitleStyle], numberOfLines: 1 }, subtitle)) : null));
    if (onPress) {
        return (
        // eslint-disable-next-line react-native-a11y/has-accessibility-props
        React.createElement(TouchableWithoutFeedback, { accessibilityRole: touchableRole, 
            // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
            accessibilityTraits: touchableRole, accessibilityComponentType: "button", onPress: onPress, disabled: disabled }, content));
    }
    return content;
};
AppbarContent.displayName = 'Appbar.Content';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
    },
    v3DefaultContainer: {
        paddingHorizontal: 0,
    },
    v3MediumContainer: {
        paddingHorizontal: 0,
        justifyContent: 'flex-end',
        paddingBottom: 24,
    },
    v3LargeContainer: {
        paddingHorizontal: 0,
        paddingTop: 36,
        justifyContent: 'flex-end',
        paddingBottom: 28,
    },
    title: {
        fontSize: Platform.OS === 'ios' ? 17 : 20,
    },
    subtitle: {
        fontSize: Platform.OS === 'ios' ? 11 : 14,
    },
});
const iosTouchableRole = ['button', 'header'];
const touchableRole = Platform.select({
    ios: iosTouchableRole,
    default: iosTouchableRole[0],
});
export default AppbarContent;
// @component-docs ignore-next-line
export { AppbarContent };
