import * as React from 'react';
import { Animated, Platform, StyleSheet, View, } from 'react-native';
import useLatestCallback from 'use-latest-callback';
import { useInternalTheme } from '../../core/theming';
import useAnimatedValueArray from '../../utils/useAnimatedValueArray';
import BottomNavigationBar from './BottomNavigationBar';
import BottomNavigationRouteScreen from './BottomNavigationRouteScreen';
const FAR_FAR_AWAY = Platform.OS === 'web' ? 0 : 9999;
const SceneComponent = React.memo(({ component, ...rest }) => React.createElement(component, rest));
/**
 * BottomNavigation provides quick navigation between top-level views of an app with a bottom navigation bar.
 * It is primarily designed for use on mobile. If you want to use the navigation bar only see [`BottomNavigation.Bar`](BottomNavigationBar).
 *
 * By default BottomNavigation uses primary color as a background, in dark theme with `adaptive` mode it will use surface colour instead.
 * See [Dark Theme](https://callstack.github.io/react-native-paper/docs/guides/theming#dark-theme) for more information.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { BottomNavigation, Text } from 'react-native-paper';
 *
 * const MusicRoute = () => <Text>Music</Text>;
 *
 * const AlbumsRoute = () => <Text>Albums</Text>;
 *
 * const RecentsRoute = () => <Text>Recents</Text>;
 *
 * const NotificationsRoute = () => <Text>Notifications</Text>;
 *
 * const MyComponent = () => {
 *   const [index, setIndex] = React.useState(0);
 *   const [routes] = React.useState([
 *     { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
 *     { key: 'albums', title: 'Albums', focusedIcon: 'album' },
 *     { key: 'recents', title: 'Recents', focusedIcon: 'history' },
 *     { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
 *   ]);
 *
 *   const renderScene = BottomNavigation.SceneMap({
 *     music: MusicRoute,
 *     albums: AlbumsRoute,
 *     recents: RecentsRoute,
 *     notifications: NotificationsRoute,
 *   });
 *
 *   return (
 *     <BottomNavigation
 *       navigationState={{ index, routes }}
 *       onIndexChange={setIndex}
 *       renderScene={renderScene}
 *     />
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const BottomNavigation = ({ navigationState, renderScene, renderIcon, renderLabel, renderTouchable, getLabelText, getBadge, getColor, getAccessibilityLabel, getTestID, activeColor, inactiveColor, keyboardHidesNavigationBar = Platform.OS === 'android', barStyle, labeled = true, style, sceneAnimationEnabled = false, sceneAnimationType = 'opacity', sceneAnimationEasing, onTabPress, onTabLongPress, onIndexChange, shifting: shiftingProp, safeAreaInsets, labelMaxFontSizeMultiplier = 1, compact: compactProp, testID = 'bottom-navigation', theme: themeOverrides, getLazy = ({ route }) => route.lazy, }) => {
    const theme = useInternalTheme(themeOverrides);
    const { scale } = theme.animation;
    const compact = compactProp ?? !theme.isV3;
    let shifting = shiftingProp ?? (theme.isV3 ? false : navigationState.routes.length > 3);
    if (shifting && navigationState.routes.length < 2) {
        shifting = false;
        console.warn('BottomNavigation needs at least 2 tabs to run shifting animation');
    }
    const focusedKey = navigationState.routes[navigationState.index].key;
    /**
     * Active state of individual tab item positions:
     * -1 if they're before the active tab, 0 if they're active, 1 if they're after the active tab
     */
    const tabsPositionAnims = useAnimatedValueArray(navigationState.routes.map((_, i) => i === navigationState.index ? 0 : i >= navigationState.index ? 1 : -1));
    /**
     * The top offset for each tab item to position it offscreen.
     * Placing items offscreen helps to save memory usage for inactive screens with removeClippedSubviews.
     * We use animated values for this to prevent unnecessary re-renders.
     */
    const offsetsAnims = useAnimatedValueArray(navigationState.routes.map(
    // offscreen === 1, normal === 0
    (_, i) => (i === navigationState.index ? 0 : 1)));
    /**
     * List of loaded tabs, tabs will be loaded when navigated to.
     */
    const [loaded, setLoaded] = React.useState([focusedKey]);
    if (!loaded.includes(focusedKey)) {
        // Set the current tab to be loaded if it was not loaded before
        setLoaded((loaded) => [...loaded, focusedKey]);
    }
    const animateToIndex = React.useCallback((index) => {
        Animated.parallel([
            ...navigationState.routes.map((_, i) => Animated.timing(tabsPositionAnims[i], {
                toValue: i === index ? 0 : i >= index ? 1 : -1,
                duration: theme.isV3 || shifting ? 150 * scale : 0,
                useNativeDriver: true,
                easing: sceneAnimationEasing,
            })),
        ]).start(({ finished }) => {
            if (finished) {
                // Position all inactive screens offscreen to save memory usage
                // Only do it when animation has finished to avoid glitches mid-transition if switching fast
                offsetsAnims.forEach((offset, i) => {
                    if (i === index) {
                        offset.setValue(0);
                    }
                    else {
                        offset.setValue(1);
                    }
                });
            }
        });
    }, [
        shifting,
        navigationState.routes,
        offsetsAnims,
        scale,
        tabsPositionAnims,
        sceneAnimationEasing,
        theme,
    ]);
    React.useEffect(() => {
        // Workaround for native animated bug in react-native@^0.57
        // Context: https://github.com/callstack/react-native-paper/pull/637
        animateToIndex(navigationState.index);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const prevNavigationState = React.useRef();
    React.useEffect(() => {
        // Reset offsets of previous and current tabs before animation
        offsetsAnims.forEach((offset, i) => {
            if (i === navigationState.index ||
                i === prevNavigationState.current?.index) {
                offset.setValue(0);
            }
        });
        animateToIndex(navigationState.index);
    }, [navigationState.index, animateToIndex, offsetsAnims]);
    const handleTabPress = useLatestCallback((event) => {
        onTabPress?.(event);
        if (event.defaultPrevented) {
            return;
        }
        const index = navigationState.routes.findIndex((route) => event.route.key === route.key);
        if (index !== navigationState.index) {
            prevNavigationState.current = navigationState;
            onIndexChange(index);
        }
    });
    const jumpTo = useLatestCallback((key) => {
        const index = navigationState.routes.findIndex((route) => route.key === key);
        prevNavigationState.current = navigationState;
        onIndexChange(index);
    });
    const { routes } = navigationState;
    const { colors } = theme;
    return (React.createElement(View, { style: [styles.container, style], testID: testID },
        React.createElement(View, { style: [styles.content, { backgroundColor: colors?.background }] }, routes.map((route, index) => {
            if (getLazy({ route }) !== false && !loaded.includes(route.key)) {
                // Don't render a screen if we've never navigated to it
                return null;
            }
            const focused = navigationState.index === index;
            const previouslyFocused = prevNavigationState.current?.index === index;
            const countAlphaOffscreen = sceneAnimationEnabled && (focused || previouslyFocused);
            const renderToHardwareTextureAndroid = sceneAnimationEnabled && focused;
            const opacity = sceneAnimationEnabled
                ? tabsPositionAnims[index].interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [0, 1, 0],
                })
                : focused
                    ? 1
                    : 0;
            const offsetTarget = focused ? 0 : FAR_FAR_AWAY;
            const top = sceneAnimationEnabled
                ? offsetsAnims[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, offsetTarget],
                })
                : offsetTarget;
            const left = sceneAnimationType === 'shifting'
                ? tabsPositionAnims[index].interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [-50, 0, 50],
                })
                : 0;
            const zIndex = focused ? 1 : 0;
            return (React.createElement(BottomNavigationRouteScreen, { key: route.key, pointerEvents: focused ? 'auto' : 'none', accessibilityElementsHidden: !focused, importantForAccessibility: focused ? 'auto' : 'no-hide-descendants', index: index, visibility: opacity, style: [StyleSheet.absoluteFill, { zIndex }], collapsable: false, removeClippedSubviews: 
                // On iOS, set removeClippedSubviews to true only when not focused
                // This is an workaround for a bug where the clipped view never re-appears
                Platform.OS === 'ios' ? navigationState.index !== index : true },
                React.createElement(Animated.View, { ...(Platform.OS === 'android' && {
                        needsOffscreenAlphaCompositing: countAlphaOffscreen,
                    }), renderToHardwareTextureAndroid: renderToHardwareTextureAndroid, style: [
                        styles.content,
                        {
                            opacity,
                            transform: [{ translateX: left }, { translateY: top }],
                        },
                    ] }, renderScene({ route, jumpTo }))));
        })),
        React.createElement(BottomNavigationBar, { navigationState: navigationState, renderIcon: renderIcon, renderLabel: renderLabel, renderTouchable: renderTouchable, getLabelText: getLabelText, getBadge: getBadge, getColor: getColor, getAccessibilityLabel: getAccessibilityLabel, getTestID: getTestID, activeColor: activeColor, inactiveColor: inactiveColor, keyboardHidesNavigationBar: keyboardHidesNavigationBar, style: barStyle, labeled: labeled, animationEasing: sceneAnimationEasing, onTabPress: handleTabPress, onTabLongPress: onTabLongPress, shifting: shifting, safeAreaInsets: safeAreaInsets, labelMaxFontSizeMultiplier: labelMaxFontSizeMultiplier, compact: compact, testID: `${testID}-bar`, theme: theme })));
};
/**
 * Function which takes a map of route keys to components.
 * Pure components are used to minimize re-rendering of the pages.
 * This drastically improves the animation performance.
 */
BottomNavigation.SceneMap = (scenes) => {
    return ({ route, jumpTo, }) => (React.createElement(SceneComponent, { key: route.key, component: scenes[route.key ? route.key : ''], route: route, jumpTo: jumpTo }));
};
// @component ./BottomNavigationBar.tsx
BottomNavigation.Bar = BottomNavigationBar;
export default BottomNavigation;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
    },
    content: {
        flex: 1,
    },
});
