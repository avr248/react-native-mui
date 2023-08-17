import * as React from 'react';
import { Animated, StyleSheet, View, } from 'react-native';
import { useInternalTheme } from '../../core/theming';
import MaterialCommunityIcon from '../MaterialCommunityIcon';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import { getAndroidSelectionControlColor } from './utils';
// From https://material.io/design/motion/speed.html#duration
const ANIMATION_DURATION = 100;
/**
 * Checkboxes allow the selection of multiple options from a set.
 * This component follows platform guidelines for Android, but can be used
 * on any platform.
 */
const CheckboxAndroid = ({ status, theme: themeOverrides, disabled, onPress, testID, ...rest }) => {
    const theme = useInternalTheme(themeOverrides);
    const { current: scaleAnim } = React.useRef(new Animated.Value(1));
    const isFirstRendering = React.useRef(true);
    const { animation: { scale }, } = theme;
    React.useEffect(() => {
        // Do not run animation on very first rendering
        if (isFirstRendering.current) {
            isFirstRendering.current = false;
            return;
        }
        const checked = status === 'checked';
        Animated.sequence([
            Animated.timing(scaleAnim, {
                toValue: 0.85,
                duration: checked ? ANIMATION_DURATION * scale : 0,
                useNativeDriver: false,
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: checked
                    ? ANIMATION_DURATION * scale
                    : ANIMATION_DURATION * scale * 1.75,
                useNativeDriver: false,
            }),
        ]).start();
    }, [status, scaleAnim, scale]);
    const checked = status === 'checked';
    const indeterminate = status === 'indeterminate';
    const { rippleColor, selectionControlColor } = getAndroidSelectionControlColor({
        theme,
        disabled,
        checked,
        customColor: rest.color,
        customUncheckedColor: rest.uncheckedColor,
    });
    const borderWidth = scaleAnim.interpolate({
        inputRange: [0.8, 1],
        outputRange: [7, 0],
    });
    const icon = indeterminate
        ? 'minus-box'
        : checked
            ? 'checkbox-marked'
            : 'checkbox-blank-outline';
    return (React.createElement(TouchableRipple, { ...rest, borderless: true, rippleColor: rippleColor, onPress: onPress, disabled: disabled, accessibilityRole: "checkbox", accessibilityState: { disabled, checked }, accessibilityLiveRegion: "polite", style: styles.container, testID: testID, theme: theme },
        React.createElement(Animated.View, { style: { transform: [{ scale: scaleAnim }] } },
            React.createElement(MaterialCommunityIcon, { allowFontScaling: false, name: icon, size: 24, color: selectionControlColor, direction: "ltr" }),
            React.createElement(View, { style: [StyleSheet.absoluteFill, styles.fillContainer] },
                React.createElement(Animated.View, { style: [
                        styles.fill,
                        { borderColor: selectionControlColor },
                        { borderWidth },
                    ] })))));
};
CheckboxAndroid.displayName = 'Checkbox.Android';
const styles = StyleSheet.create({
    container: {
        borderRadius: 18,
        width: 36,
        height: 36,
        padding: 6,
    },
    fillContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    fill: {
        height: 14,
        width: 14,
    },
});
export default CheckboxAndroid;
// @component-docs ignore-next-line
export { CheckboxAndroid };
