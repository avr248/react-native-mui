"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _color = _interopRequireDefault(require("color"));
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _BottomNavigationRouteScreen = _interopRequireDefault(require("./BottomNavigationRouteScreen"));
var _theming = require("../../core/theming");
var _overlay = _interopRequireDefault(require("../../styles/overlay"));
var _colors = require("../../styles/themes/v2/colors");
var _useAnimatedValue = _interopRequireDefault(require("../../utils/useAnimatedValue"));
var _useAnimatedValueArray = _interopRequireDefault(require("../../utils/useAnimatedValueArray"));
var _useIsKeyboardShown = _interopRequireDefault(require("../../utils/useIsKeyboardShown"));
var _useLayout = _interopRequireDefault(require("../../utils/useLayout"));
var _Badge = _interopRequireDefault(require("../Badge"));
var _Icon = _interopRequireDefault(require("../Icon"));
var _Surface = _interopRequireDefault(require("../Surface"));
var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple/TouchableRipple"));
var _Text = _interopRequireDefault(require("../Typography/Text"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const MIN_RIPPLE_SCALE = 0.001; // Minimum scale is not 0 due to bug with animation
const MIN_TAB_WIDTH = 96;
const MAX_TAB_WIDTH = 168;
const BAR_HEIGHT = 56;
const FAR_FAR_AWAY = _reactNative.Platform.OS === 'web' ? 0 : 9999;
const OUTLINE_WIDTH = 64;
const Touchable = _ref => {
  let {
    route: _0,
    style,
    children,
    borderless,
    centered,
    rippleColor,
    ...rest
  } = _ref;
  return _TouchableRipple.default.supported ? /*#__PURE__*/React.createElement(_TouchableRipple.default, _extends({}, rest, {
    disabled: rest.disabled || undefined,
    borderless: borderless,
    centered: centered,
    rippleColor: rippleColor,
    style: style
  }), children) : /*#__PURE__*/React.createElement(_reactNative.TouchableWithoutFeedback, rest, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: style
  }, children));
};
const SceneComponent = /*#__PURE__*/React.memo(_ref2 => {
  let {
    component,
    ...rest
  } = _ref2;
  return /*#__PURE__*/React.createElement(component, rest);
});

/**
 * Bottom navigation provides quick navigation between top-level views of an app with a bottom navigation bar.
 * It is primarily designed for use on mobile.
 *
 * For integration with React Navigation, you can use [react-navigation-material-bottom-tabs](https://github.com/react-navigation/react-navigation/tree/main/packages/material-bottom-tabs) and consult [createMaterialBottomTabNavigator](https://reactnavigation.org/docs/material-bottom-tab-navigator/) documentation.
 *
 * By default Bottom navigation uses primary color as a background, in dark theme with `adaptive` mode it will use surface colour instead.
 * See [Dark InternalTheme](https://callstack.github.io/react-native-paper/theming.html#dark-theme) for more information.
 *
 * <div class="screenshots">
 *   <img class="small" src="screenshots/bottom-navigation.gif" />
 * </div>
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
const BottomNavigation = _ref3 => {
  var _safeAreaInsets$left, _safeAreaInsets$right, _safeAreaInsets$botto;
  let {
    navigationState,
    renderScene,
    renderIcon,
    renderLabel,
    renderTouchable = props => /*#__PURE__*/React.createElement(Touchable, props),
    getLabelText = _ref4 => {
      let {
        route
      } = _ref4;
      return route.title;
    },
    getBadge = _ref5 => {
      let {
        route
      } = _ref5;
      return route.badge;
    },
    getColor = _ref6 => {
      let {
        route
      } = _ref6;
      return route.color;
    },
    getAccessibilityLabel = _ref7 => {
      let {
        route
      } = _ref7;
      return route.accessibilityLabel;
    },
    getTestID = _ref8 => {
      let {
        route
      } = _ref8;
      return route.testID;
    },
    activeColor,
    inactiveColor,
    keyboardHidesNavigationBar = _reactNative.Platform.OS === 'android',
    barStyle,
    labeled = true,
    style,
    theme,
    sceneAnimationEnabled = false,
    sceneAnimationType = 'opacity',
    sceneAnimationEasing,
    onTabPress,
    onIndexChange,
    shifting = theme.isV3 ? false : navigationState.routes.length > 3,
    safeAreaInsets,
    labelMaxFontSizeMultiplier = 1,
    compact = !theme.isV3,
    testID = 'bottom-navigation',
    getLazy = _ref9 => {
      let {
        route
      } = _ref9;
      return route.lazy;
    }
  } = _ref3;
  const {
    bottom,
    left,
    right
  } = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const {
    scale
  } = theme.animation;
  if (shifting && navigationState.routes.length < 2) {
    shifting = false;
    console.warn('BottomNavigation needs at least 2 tabs to run shifting animation');
  }
  const focusedKey = navigationState.routes[navigationState.index].key;

  /**
   * Visibility of the navigation bar, visible state is 1 and invisible is 0.
   */
  const visibleAnim = (0, _useAnimatedValue.default)(1);

  /**
   * Active state of individual tab items, active state is 1 and inactive state is 0.
   */
  const tabsAnims = (0, _useAnimatedValueArray.default)(navigationState.routes.map(
  // focused === 1, unfocused === 0
  (_, i) => i === navigationState.index ? 1 : 0));

  /**
   * Active state of individual tab item positions:
   * -1 if they're before the active tab, 0 if they're active, 1 if they're after the active tab
   */
  const tabsPositionAnims = (0, _useAnimatedValueArray.default)(navigationState.routes.map((_, i) => i === navigationState.index ? 0 : i >= navigationState.index ? 1 : -1));

  /**
   * The top offset for each tab item to position it offscreen.
   * Placing items offscreen helps to save memory usage for inactive screens with removeClippedSubviews.
   * We use animated values for this to prevent unnecessary re-renders.
   */
  const offsetsAnims = (0, _useAnimatedValueArray.default)(navigationState.routes.map(
  // offscreen === 1, normal === 0
  (_, i) => i === navigationState.index ? 0 : 1));

  /**
   * Index of the currently active tab. Used for setting the background color.
   * We don't use the color as an animated value directly, because `setValue` seems to be buggy with colors?.
   */
  const indexAnim = (0, _useAnimatedValue.default)(navigationState.index);

  /**
   * Animation for the background color ripple, used to determine it's scale and opacity.
   */
  const rippleAnim = (0, _useAnimatedValue.default)(MIN_RIPPLE_SCALE);

  /**
   * Layout of the navigation bar. The width is used to determine the size and position of the ripple.
   */
  const [layout, onLayout] = (0, _useLayout.default)();

  /**
   * List of loaded tabs, tabs will be loaded when navigated to.
   */
  const [loaded, setLoaded] = React.useState([focusedKey]);
  if (!loaded.includes(focusedKey)) {
    // Set the current tab to be loaded if it was not loaded before
    setLoaded(loaded => [...loaded, focusedKey]);
  }

  /**
   * Track whether the keyboard is visible to show and hide the navigation bar.
   */
  const [keyboardVisible, setKeyboardVisible] = React.useState(false);
  const handleKeyboardShow = React.useCallback(() => {
    setKeyboardVisible(true);
    _reactNative.Animated.timing(visibleAnim, {
      toValue: 0,
      duration: 150 * scale,
      useNativeDriver: true
    }).start();
  }, [scale, visibleAnim]);
  const handleKeyboardHide = React.useCallback(() => {
    _reactNative.Animated.timing(visibleAnim, {
      toValue: 1,
      duration: 100 * scale,
      useNativeDriver: true
    }).start(() => {
      setKeyboardVisible(false);
    });
  }, [scale, visibleAnim]);
  const animateToIndex = React.useCallback(index => {
    // Reset the ripple to avoid glitch if it's currently animating
    rippleAnim.setValue(MIN_RIPPLE_SCALE);
    _reactNative.Animated.parallel([_reactNative.Animated.timing(rippleAnim, {
      toValue: 1,
      duration: theme.isV3 || shifting ? 400 * scale : 0,
      useNativeDriver: true
    }), ...navigationState.routes.map((_, i) => _reactNative.Animated.timing(tabsAnims[i], {
      toValue: i === index ? 1 : 0,
      duration: theme.isV3 || shifting ? 150 * scale : 0,
      useNativeDriver: true,
      easing: sceneAnimationEasing
    })), ...navigationState.routes.map((_, i) => _reactNative.Animated.timing(tabsPositionAnims[i], {
      toValue: i === index ? 0 : i >= index ? 1 : -1,
      duration: theme.isV3 || shifting ? 150 * scale : 0,
      useNativeDriver: true,
      easing: sceneAnimationEasing
    }))]).start(_ref10 => {
      let {
        finished
      } = _ref10;
      // Workaround a bug in native animations where this is reset after first animation
      tabsAnims.map((tab, i) => tab.setValue(i === index ? 1 : 0));

      // Update the index to change bar's background color and then hide the ripple
      indexAnim.setValue(index);
      rippleAnim.setValue(MIN_RIPPLE_SCALE);
      if (finished) {
        // Position all inactive screens offscreen to save memory usage
        // Only do it when animation has finished to avoid glitches mid-transition if switching fast
        offsetsAnims.forEach((offset, i) => {
          if (i === index) {
            offset.setValue(0);
          } else {
            offset.setValue(1);
          }
        });
      }
    });
  }, [indexAnim, shifting, navigationState.routes, offsetsAnims, rippleAnim, scale, tabsAnims, tabsPositionAnims, sceneAnimationEasing, theme]);
  React.useEffect(() => {
    // Workaround for native animated bug in react-native@^0.57
    // Context: https://github.com/callstack/react-native-paper/pull/637
    animateToIndex(navigationState.index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  (0, _useIsKeyboardShown.default)({
    onShow: handleKeyboardShow,
    onHide: handleKeyboardHide
  });
  const prevNavigationState = React.useRef();
  React.useEffect(() => {
    // Reset offsets of previous and current tabs before animation
    offsetsAnims.forEach((offset, i) => {
      var _prevNavigationState$;
      if (i === navigationState.index || i === ((_prevNavigationState$ = prevNavigationState.current) === null || _prevNavigationState$ === void 0 ? void 0 : _prevNavigationState$.index)) {
        offset.setValue(0);
      }
    });
    animateToIndex(navigationState.index);
  }, [navigationState.index, animateToIndex, offsetsAnims]);
  const handleTabPress = index => {
    const event = {
      route: navigationState.routes[index],
      defaultPrevented: false,
      preventDefault: () => {
        event.defaultPrevented = true;
      }
    };
    onTabPress === null || onTabPress === void 0 ? void 0 : onTabPress(event);
    if (event.defaultPrevented) {
      return;
    }
    if (index !== navigationState.index) {
      onIndexChange(index);
    }
  };
  const jumpTo = React.useCallback(key => {
    const index = navigationState.routes.findIndex(route => route.key === key);
    onIndexChange(index);
  }, [navigationState.routes, onIndexChange]);
  const {
    routes
  } = navigationState;
  const {
    colors,
    dark: isDarkTheme,
    mode,
    isV3
  } = theme;
  const {
    backgroundColor: customBackground,
    elevation = 4
  } = _reactNative.StyleSheet.flatten(barStyle) || {};
  const approxBackgroundColor = customBackground ? customBackground : isDarkTheme && mode === 'adaptive' ? (0, _overlay.default)(elevation, colors === null || colors === void 0 ? void 0 : colors.surface) : colors === null || colors === void 0 ? void 0 : colors.primary;
  const v2BackgroundColorInterpolation = shifting ? indexAnim.interpolate({
    inputRange: routes.map((_, i) => i),
    /* @ts-ignore */
    outputRange: routes.map(route => getColor({
      route
    }) || approxBackgroundColor)
  }) : approxBackgroundColor;
  const backgroundColor = isV3 ? customBackground || theme.colors.elevation.level2 : shifting ? v2BackgroundColorInterpolation : approxBackgroundColor;
  const isDark = typeof approxBackgroundColor === 'string' ? !(0, _color.default)(approxBackgroundColor).isLight() : true;
  const textColor = isDark ? _colors.white : _colors.black;
  const activeTintColor = typeof activeColor !== 'undefined' ? activeColor : isV3 ? theme.colors.onSecondaryContainer : textColor;
  const inactiveTintColor = typeof inactiveColor !== 'undefined' ? inactiveColor : isV3 ? theme.colors.onSurfaceVariant : (0, _color.default)(textColor).alpha(0.5).rgb().string();
  const touchColor = (0, _color.default)(activeColor || activeTintColor).alpha(0.12).rgb().string();
  const maxTabWidth = routes.length > 3 ? MIN_TAB_WIDTH : MAX_TAB_WIDTH;
  const maxTabBarWidth = maxTabWidth * routes.length;
  const tabBarWidth = Math.min(layout.width, maxTabBarWidth);
  const tabWidth = tabBarWidth / routes.length;
  const rippleSize = layout.width / 4;
  const insets = {
    left: (_safeAreaInsets$left = safeAreaInsets === null || safeAreaInsets === void 0 ? void 0 : safeAreaInsets.left) !== null && _safeAreaInsets$left !== void 0 ? _safeAreaInsets$left : left,
    right: (_safeAreaInsets$right = safeAreaInsets === null || safeAreaInsets === void 0 ? void 0 : safeAreaInsets.right) !== null && _safeAreaInsets$right !== void 0 ? _safeAreaInsets$right : right,
    bottom: (_safeAreaInsets$botto = safeAreaInsets === null || safeAreaInsets === void 0 ? void 0 : safeAreaInsets.bottom) !== null && _safeAreaInsets$botto !== void 0 ? _safeAreaInsets$botto : bottom
  };
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.container, style],
    testID: testID
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.content, {
      backgroundColor: colors === null || colors === void 0 ? void 0 : colors.background
    }]
  }, routes.map((route, index) => {
    if (getLazy({
      route
    }) !== false && !loaded.includes(route.key)) {
      // Don't render a screen if we've never navigated to it
      return null;
    }
    const focused = navigationState.index === index;
    const opacity = sceneAnimationEnabled ? tabsPositionAnims[index].interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [0, 1, 0]
    }) : focused ? 1 : 0;
    const top = sceneAnimationEnabled ? offsetsAnims[index].interpolate({
      inputRange: [0, 1],
      outputRange: [0, FAR_FAR_AWAY]
    }) : focused ? 0 : FAR_FAR_AWAY;
    const left = sceneAnimationType === 'shifting' ? tabsPositionAnims[index].interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [-50, 0, 50]
    }) : 0;
    const zIndex = focused ? 1 : 0;
    return /*#__PURE__*/React.createElement(_BottomNavigationRouteScreen.default, {
      key: route.key,
      pointerEvents: focused ? 'auto' : 'none',
      accessibilityElementsHidden: !focused,
      importantForAccessibility: focused ? 'auto' : 'no-hide-descendants',
      index: index,
      visibility: opacity,
      style: [_reactNative.StyleSheet.absoluteFill, {
        zIndex
      }],
      collapsable: false,
      removeClippedSubviews:
      // On iOS, set removeClippedSubviews to true only when not focused
      // This is an workaround for a bug where the clipped view never re-appears
      _reactNative.Platform.OS === 'ios' ? navigationState.index !== index : true
    }, /*#__PURE__*/React.createElement(_reactNative.Animated.View, _extends({}, _reactNative.Platform.OS === 'android' && {
      needsOffscreenAlphaCompositing: sceneAnimationEnabled
    }, {
      renderToHardwareTextureAndroid: sceneAnimationEnabled,
      style: [styles.content, {
        opacity: opacity,
        transform: [{
          translateX: left
        }, {
          translateY: top
        }]
      }]
    }), renderScene({
      route,
      jumpTo
    })));
  })), /*#__PURE__*/React.createElement(_Surface.default, _extends({}, theme.isV3 && {
    elevation: 0
  }, {
    style: [!theme.isV3 && {
      elevation: 4
    }, styles.bar, keyboardHidesNavigationBar ? {
      // When the keyboard is shown, slide down the navigation bar
      transform: [{
        translateY: visibleAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [layout.height, 0]
        })
      }],
      // Absolutely position the navigation bar so that the content is below it
      // This is needed to avoid gap at bottom when the navigation bar is hidden
      position: keyboardVisible ? 'absolute' : null
    } : null, barStyle],
    pointerEvents: layout.measured ? keyboardHidesNavigationBar && keyboardVisible ? 'none' : 'auto' : 'none',
    onLayout: onLayout
  }), /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    style: [styles.barContent, {
      backgroundColor
    }],
    testID: `${testID}-bar-content`
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.items, {
      marginBottom: insets.bottom,
      marginHorizontal: Math.max(insets.left, insets.right)
    }, compact && {
      maxWidth: maxTabBarWidth
    }],
    accessibilityRole: 'tablist'
  }, shifting ? /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    pointerEvents: "none",
    style: [styles.ripple, {
      // Since we have a single ripple, we have to reposition it so that it appears to expand from active tab.
      // We need to move it from the top to center of the navigation bar and from the left to the active tab.
      top: (BAR_HEIGHT - rippleSize) / 2,
      left: tabWidth * (navigationState.index + 0.5) - rippleSize / 2,
      height: rippleSize,
      width: rippleSize,
      borderRadius: rippleSize / 2,
      backgroundColor: getColor({
        route: routes[navigationState.index]
      }),
      transform: [{
        // Scale to twice the size  to ensure it covers the whole navigation bar
        scale: rippleAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 8]
        })
      }],
      opacity: rippleAnim.interpolate({
        inputRange: [0, MIN_RIPPLE_SCALE, 0.3, 1],
        outputRange: [0, 0, 1, 1]
      })
    }]
  }) : null, routes.map((route, index) => {
    const focused = navigationState.index === index;
    const active = tabsAnims[index];

    // Scale the label up
    const scale = labeled && shifting ? active.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 1]
    }) : 1;

    // Move down the icon to account for no-label in shifting and smaller label in non-shifting.
    const translateY = labeled ? shifting ? active.interpolate({
      inputRange: [0, 1],
      outputRange: [7, 0]
    }) : 0 : 7;

    // We render the active icon and label on top of inactive ones and cross-fade them on change.
    // This trick gives the illusion that we are animating between active and inactive colors.
    // This is to ensure that we can use native driver, as colors cannot be animated with native driver.
    const activeOpacity = active;
    const inactiveOpacity = active.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0]
    });
    const v3ActiveOpacity = focused ? 1 : 0;
    const v3InactiveOpacity = shifting ? inactiveOpacity : focused ? 0 : 1;

    // Scale horizontally the outline pill
    const outlineScale = focused ? active.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 1]
    }) : 0;
    const badge = getBadge({
      route
    });
    const activeLabelColor = !isV3 ? activeTintColor : focused ? theme.colors.onSurface : theme.colors.onSurfaceVariant;
    const inactiveLabelColor = !isV3 ? inactiveTintColor : focused ? theme.colors.onSurface : theme.colors.onSurfaceVariant;
    const badgeStyle = {
      top: !isV3 ? -2 : typeof badge === 'boolean' ? 4 : 2,
      right: (badge != null && typeof badge !== 'boolean' ? String(badge).length * -2 : 0) - (!isV3 ? 2 : 0)
    };
    const isV3Shifting = isV3 && shifting && labeled;
    const font = isV3 ? theme.fonts.labelMedium : {};
    return renderTouchable({
      key: route.key,
      route,
      borderless: true,
      centered: true,
      rippleColor: isV3 ? 'transparent' : touchColor,
      onPress: () => handleTabPress(index),
      testID: getTestID({
        route
      }),
      accessibilityLabel: getAccessibilityLabel({
        route
      }),
      accessibilityRole: _reactNative.Platform.OS === 'ios' ? 'button' : 'tab',
      accessibilityState: {
        selected: focused
      },
      style: [styles.item, isV3 && styles.v3Item],
      children: /*#__PURE__*/React.createElement(_reactNative.View, {
        pointerEvents: "none",
        style: isV3 && (labeled ? styles.v3TouchableContainer : styles.v3NoLabelContainer)
      }, /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
        style: [styles.iconContainer, isV3 && styles.v3IconContainer, (!isV3 || isV3Shifting) && {
          transform: [{
            translateY
          }]
        }]
      }, isV3 && focused && /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
        style: [styles.outline, {
          transform: [{
            scaleX: outlineScale
          }],
          backgroundColor: theme.colors.secondaryContainer
        }]
      }), /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
        style: [styles.iconWrapper, isV3 && styles.v3IconWrapper, {
          opacity: isV3 ? v3ActiveOpacity : activeOpacity
        }]
      }, renderIcon ? renderIcon({
        route,
        focused: true,
        color: activeTintColor
      }) : /*#__PURE__*/React.createElement(_Icon.default, {
        source: route.focusedIcon,
        color: activeTintColor,
        size: 24
      })), /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
        style: [styles.iconWrapper, isV3 && styles.v3IconWrapper, {
          opacity: isV3 ? v3InactiveOpacity : inactiveOpacity
        }]
      }, renderIcon ? renderIcon({
        route,
        focused: false,
        color: inactiveTintColor
      }) : /*#__PURE__*/React.createElement(_Icon.default, {
        source: theme.isV3 && route.unfocusedIcon !== undefined ? route.unfocusedIcon : route.focusedIcon,
        color: inactiveTintColor,
        size: 24
      })), /*#__PURE__*/React.createElement(_reactNative.View, {
        style: [styles.badgeContainer, badgeStyle]
      }, typeof badge === 'boolean' ? /*#__PURE__*/React.createElement(_Badge.default, {
        visible: badge,
        size: isV3 ? 6 : 8
      }) : /*#__PURE__*/React.createElement(_Badge.default, {
        visible: badge != null,
        size: 16
      }, badge))), labeled ? /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
        style: [styles.labelContainer, !isV3 && {
          transform: [{
            scale
          }]
        }]
      }, /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
        style: [styles.labelWrapper, (!isV3 || isV3Shifting) && {
          opacity: activeOpacity
        }]
      }, renderLabel ? renderLabel({
        route,
        focused: true,
        color: activeLabelColor
      }) : /*#__PURE__*/React.createElement(_Text.default, {
        maxFontSizeMultiplier: labelMaxFontSizeMultiplier,
        variant: "labelMedium",
        style: [styles.label, {
          color: activeLabelColor,
          ...font
        }]
      }, getLabelText({
        route
      }))), shifting ? null : /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
        style: [styles.labelWrapper, {
          opacity: inactiveOpacity
        }]
      }, renderLabel ? renderLabel({
        route,
        focused: false,
        color: inactiveLabelColor
      }) : /*#__PURE__*/React.createElement(_Text.default, {
        maxFontSizeMultiplier: labelMaxFontSizeMultiplier,
        variant: "labelMedium",
        selectable: false,
        style: [styles.label, {
          color: inactiveLabelColor,
          ...font
        }]
      }, getLabelText({
        route
      })))) : !isV3 && /*#__PURE__*/React.createElement(_reactNative.View, {
        style: styles.labelContainer
      }))
    });
  })))));
};

/**
 * Function which takes a map of route keys to components.
 * Pure components are used to minimize re-rendering of the pages.
 * This drastically improves the animation performance.
 */
BottomNavigation.SceneMap = scenes => {
  return _ref11 => {
    let {
      route,
      jumpTo
    } = _ref11;
    return /*#__PURE__*/React.createElement(SceneComponent, {
      key: route.key,
      component: scenes[route.key ? route.key : ''],
      route: route,
      jumpTo: jumpTo
    });
  };
};
var _default = (0, _theming.withInternalTheme)(BottomNavigation);
exports.default = _default;
const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden'
  },
  content: {
    flex: 1
  },
  bar: {
    left: 0,
    right: 0,
    bottom: 0
  },
  barContent: {
    alignItems: 'center',
    overflow: 'hidden'
  },
  items: {
    flexDirection: 'row',
    ...(_reactNative.Platform.OS === 'web' ? {
      width: '100%'
    } : null)
  },
  item: {
    flex: 1,
    // Top padding is 6 and bottom padding is 10
    // The extra 4dp bottom padding is offset by label's height
    paddingVertical: 6
  },
  v3Item: {
    paddingVertical: 0
  },
  ripple: {
    position: 'absolute'
  },
  iconContainer: {
    height: 24,
    width: 24,
    marginTop: 2,
    marginHorizontal: 12,
    alignSelf: 'center'
  },
  v3IconContainer: {
    height: 32,
    width: 32,
    marginBottom: 4,
    marginTop: 0,
    justifyContent: 'center'
  },
  iconWrapper: {
    ..._reactNative.StyleSheet.absoluteFillObject,
    alignItems: 'center'
  },
  v3IconWrapper: {
    top: 4
  },
  labelContainer: {
    height: 16,
    paddingBottom: 2
  },
  labelWrapper: {
    ..._reactNative.StyleSheet.absoluteFillObject
  },
  // eslint-disable-next-line react-native/no-color-literals
  label: {
    fontSize: 12,
    height: BAR_HEIGHT,
    textAlign: 'center',
    backgroundColor: 'transparent',
    ...(_reactNative.Platform.OS === 'web' ? {
      whiteSpace: 'nowrap',
      alignSelf: 'center'
    } : null)
  },
  badgeContainer: {
    position: 'absolute',
    left: 0
  },
  v3TouchableContainer: {
    paddingTop: 12,
    paddingBottom: 16
  },
  v3NoLabelContainer: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  outline: {
    width: OUTLINE_WIDTH,
    height: OUTLINE_WIDTH / 2,
    borderRadius: OUTLINE_WIDTH / 4,
    alignSelf: 'center'
  }
});
//# sourceMappingURL=BottomNavigation.js.map