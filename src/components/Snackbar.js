import * as React from 'react';
import { Animated, Easing, I18nManager, StyleSheet, View, } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useLatestCallback from 'use-latest-callback';
import { useInternalTheme } from '../core/theming';
import Button from './Button/Button';
import IconButton from './IconButton/IconButton';
import MaterialCommunityIcon from './MaterialCommunityIcon';
import Surface from './Surface';
import Text from './Typography/Text';
const DURATION_SHORT = 4000;
const DURATION_MEDIUM = 7000;
const DURATION_LONG = 10000;
/**
 * Snackbars provide brief feedback about an operation through a message rendered at the bottom of the container in which it's wrapped.
 *
 * Note: To display it as a popup, regardless of the parent's position, wrap it with a `Portal` component – refer to the example in the "More Examples` section.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View, StyleSheet } from 'react-native';
 * import { Button, Snackbar } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(false);
 *
 *   const onToggleSnackBar = () => setVisible(!visible);
 *
 *   const onDismissSnackBar = () => setVisible(false);
 *
 *   return (
 *     <View style={styles.container}>
 *       <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
 *       <Snackbar
 *         visible={visible}
 *         onDismiss={onDismissSnackBar}
 *         action={{
 *           label: 'Undo',
 *           onPress: () => {
 *             // Do something
 *           },
 *         }}>
 *         Hey there! I'm a Snackbar.
 *       </Snackbar>
 *     </View>
 *   );
 * };
 *
 * const styles = StyleSheet.create({
 *   container: {
 *     flex: 1,
 *     justifyContent: 'space-between',
 *   },
 * });
 *
 * export default MyComponent;
 * ```
 */
const Snackbar = ({ visible, action, icon, onIconPress, iconAccessibilityLabel = 'Close icon', duration = DURATION_MEDIUM, onDismiss, children, elevation = 2, wrapperStyle, style, theme: themeOverrides, rippleColor, testID, ...rest }) => {
    const theme = useInternalTheme(themeOverrides);
    const { bottom, right, left } = useSafeAreaInsets();
    const { current: opacity } = React.useRef(new Animated.Value(0.0));
    const hideTimeout = React.useRef(undefined);
    const [hidden, setHidden] = React.useState(!visible);
    const { scale } = theme.animation;
    const handleOnVisible = useLatestCallback(() => {
        // show
        if (hideTimeout.current)
            clearTimeout(hideTimeout.current);
        setHidden(false);
        Animated.timing(opacity, {
            toValue: 1,
            duration: 200 * scale,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
        }).start(({ finished }) => {
            if (finished) {
                const isInfinity = duration === Number.POSITIVE_INFINITY ||
                    duration === Number.NEGATIVE_INFINITY;
                if (!isInfinity) {
                    hideTimeout.current = setTimeout(onDismiss, duration);
                }
            }
        });
    });
    const handleOnHidden = useLatestCallback(() => {
        // hide
        if (hideTimeout.current) {
            clearTimeout(hideTimeout.current);
        }
        Animated.timing(opacity, {
            toValue: 0,
            duration: 100 * scale,
            useNativeDriver: true,
        }).start(({ finished }) => {
            if (finished) {
                setHidden(true);
            }
        });
    });
    React.useEffect(() => {
        return () => {
            if (hideTimeout.current)
                clearTimeout(hideTimeout.current);
        };
    }, []);
    React.useLayoutEffect(() => {
        if (visible) {
            handleOnVisible();
        }
        else {
            handleOnHidden();
        }
    }, [visible, handleOnVisible, handleOnHidden]);
    const { colors, roundness, isV3 } = theme;
    if (hidden) {
        return null;
    }
    const { style: actionStyle, label: actionLabel, onPress: onPressAction, rippleColor: actionRippleColor, ...actionProps } = action || {};
    const buttonTextColor = isV3 ? colors.inversePrimary : colors.accent;
    const textColor = isV3 ? colors.inverseOnSurface : colors?.surface;
    const backgroundColor = isV3 ? colors.inverseSurface : colors?.onSurface;
    const isIconButton = isV3 && onIconPress;
    const marginLeft = action ? -12 : -16;
    const wrapperPaddings = {
        paddingBottom: bottom,
        paddingHorizontal: Math.max(left, right),
    };
    const renderChildrenWithWrapper = () => {
        if (typeof children === 'string') {
            return (React.createElement(Text, { variant: "bodyMedium", style: [styles.content, { color: textColor }] }, children));
        }
        return (React.createElement(View, { style: styles.content },
            React.createElement(View, null, children)));
    };
    return (React.createElement(View, { pointerEvents: "box-none", style: [styles.wrapper, wrapperPaddings, wrapperStyle] },
        React.createElement(Surface, { pointerEvents: "box-none", accessibilityLiveRegion: "polite", theme: theme, style: [
                !isV3 && styles.elevation,
                styles.container,
                {
                    backgroundColor,
                    borderRadius: roundness,
                    opacity: opacity,
                    transform: [
                        {
                            scale: visible
                                ? opacity.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0.9, 1],
                                })
                                : 1,
                        },
                    ],
                },
                style,
            ], testID: testID, ...(isV3 && { elevation }), ...rest },
            renderChildrenWithWrapper(),
            (action || isIconButton) && (React.createElement(View, { style: [styles.actionsContainer, { marginLeft }] },
                action ? (React.createElement(Button, { onPress: (event) => {
                        onPressAction?.(event);
                        onDismiss();
                    }, style: [styles.button, actionStyle], textColor: buttonTextColor, compact: !isV3, mode: "text", theme: theme, rippleColor: actionRippleColor, ...actionProps }, actionLabel)) : null,
                isIconButton ? (React.createElement(IconButton, { accessibilityRole: "button", borderless: true, onPress: onIconPress, iconColor: theme.colors.inverseOnSurface, rippleColor: rippleColor, theme: theme, icon: icon ||
                        (({ size, color }) => {
                            return (React.createElement(MaterialCommunityIcon, { name: "close", color: color, size: size, direction: I18nManager.getConstants().isRTL ? 'rtl' : 'ltr' }));
                        }), accessibilityLabel: iconAccessibilityLabel, style: styles.icon, testID: `${testID}-icon` })) : null)))));
};
/**
 * Show the Snackbar for a short duration.
 */
Snackbar.DURATION_SHORT = DURATION_SHORT;
/**
 * Show the Snackbar for a medium duration.
 */
Snackbar.DURATION_MEDIUM = DURATION_MEDIUM;
/**
 * Show the Snackbar for a long duration.
 */
Snackbar.DURATION_LONG = DURATION_LONG;
const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 8,
        borderRadius: 4,
        minHeight: 48,
    },
    content: {
        marginHorizontal: 16,
        marginVertical: 14,
        flex: 1,
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        minHeight: 48,
    },
    button: {
        marginRight: 8,
        marginLeft: 4,
    },
    elevation: {
        elevation: 6,
    },
    icon: {
        width: 40,
        height: 40,
        margin: 0,
    },
});
export default Snackbar;