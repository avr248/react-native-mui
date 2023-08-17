import * as React from 'react';
import { Platform, StyleSheet, Pressable, View, } from 'react-native';
import { SettingsContext } from '../../core/settings';
import { useInternalTheme } from '../../core/theming';
import hasTouchHandler from '../../utils/hasTouchHandler';
import { getTouchableRippleColors } from './utils';
const ANDROID_VERSION_LOLLIPOP = 21;
const ANDROID_VERSION_PIE = 28;
const TouchableRipple = ({ style, background, borderless = false, disabled: disabledProp, rippleColor, underlayColor, children, theme: themeOverrides, ...rest }) => {
    const theme = useInternalTheme(themeOverrides);
    const { rippleEffectEnabled } = React.useContext(SettingsContext);
    const { onPress, onLongPress, onPressIn, onPressOut } = rest;
    const hasPassedTouchHandler = hasTouchHandler({
        onPress,
        onLongPress,
        onPressIn,
        onPressOut,
    });
    const disabled = disabledProp || !hasPassedTouchHandler;
    const { calculatedRippleColor, calculatedUnderlayColor } = getTouchableRippleColors({
        theme,
        rippleColor,
        underlayColor,
    });
    // A workaround for ripple on Android P is to use useForeground + overflow: 'hidden'
    // https://github.com/facebook/react-native/issues/6480
    const useForeground = Platform.OS === 'android' &&
        Platform.Version >= ANDROID_VERSION_PIE &&
        borderless;
    if (TouchableRipple.supported) {
        const androidRipple = rippleEffectEnabled
            ? background ?? {
                color: calculatedRippleColor,
                borderless,
                foreground: useForeground,
            }
            : undefined;
        return (React.createElement(Pressable, { ...rest, disabled: disabled, style: [borderless && styles.overflowHidden, style], android_ripple: androidRipple }, React.Children.only(children)));
    }
    return (React.createElement(Pressable, { ...rest, disabled: disabled, style: [borderless && styles.overflowHidden, style] }, ({ pressed }) => (React.createElement(React.Fragment, null,
        pressed && rippleEffectEnabled && (React.createElement(View, { testID: "touchable-ripple-underlay", style: [
                styles.underlay,
                { backgroundColor: calculatedUnderlayColor },
            ] })),
        React.Children.only(children)))));
};
TouchableRipple.supported =
    Platform.OS === 'android' && Platform.Version >= ANDROID_VERSION_LOLLIPOP;
const styles = StyleSheet.create({
    overflowHidden: {
        overflow: 'hidden',
    },
    underlay: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 2,
    },
});
export default TouchableRipple;
