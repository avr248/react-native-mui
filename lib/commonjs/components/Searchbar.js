"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _color = _interopRequireDefault(require("color"));
var _ActivityIndicator = _interopRequireDefault(require("./ActivityIndicator"));
var _IconButton = _interopRequireDefault(require("./IconButton/IconButton"));
var _MaterialCommunityIcon = _interopRequireDefault(require("./MaterialCommunityIcon"));
var _Surface = _interopRequireDefault(require("./Surface"));
var _theming = require("../core/theming");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Searchbar is a simple input box where users can type search queries.
 *
 * <div class="screenshots">
 *   <img class="small" src="screenshots/searchbar.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Searchbar } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [searchQuery, setSearchQuery] = React.useState('');
 *
 *   const onChangeSearch = query => setSearchQuery(query);
 *
 *   return (
 *     <Searchbar
 *       placeholder="Search"
 *       onChangeText={onChangeSearch}
 *       value={searchQuery}
 *     />
 *   );
 * };
 *
 * export default MyComponent;

 * ```
 */
const Searchbar = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  var _theme$colors;
  let {
    clearAccessibilityLabel = 'clear',
    clearIcon,
    icon,
    iconColor: customIconColor,
    inputStyle,
    onIconPress,
    placeholder,
    searchAccessibilityLabel = 'search',
    elevation = 1,
    style,
    theme,
    value,
    loading = false,
    testID = 'search-bar',
    ...rest
  } = _ref;
  const root = React.useRef(null);
  React.useImperativeHandle(ref, () => {
    const input = root.current;
    if (input) {
      return {
        focus: () => input.focus(),
        clear: () => input.clear(),
        setNativeProps: args => input.setNativeProps(args),
        isFocused: () => input.isFocused(),
        blur: () => input.blur()
      };
    }
    const noop = () => {
      throw new Error('TextInput is not available');
    };
    return {
      focus: noop,
      clear: noop,
      setNativeProps: noop,
      isFocused: noop,
      blur: noop
    };
  });
  const handleClearPress = () => {
    var _root$current, _rest$onChangeText;
    (_root$current = root.current) === null || _root$current === void 0 ? void 0 : _root$current.clear();
    (_rest$onChangeText = rest.onChangeText) === null || _rest$onChangeText === void 0 ? void 0 : _rest$onChangeText.call(rest, '');
  };
  const {
    colors,
    roundness,
    dark,
    isV3
  } = theme;
  const textColor = isV3 ? theme.colors.onSurface : theme.colors.text;
  const iconColor = customIconColor || (dark ? textColor : (0, _color.default)(textColor).alpha(0.54).rgb().string());
  const rippleColor = (0, _color.default)(textColor).alpha(0.32).rgb().string();
  return /*#__PURE__*/React.createElement(_Surface.default, _extends({
    style: [{
      borderRadius: roundness
    }, !isV3 && styles.elevation, styles.container, style]
  }, theme.isV3 && {
    elevation
  }), /*#__PURE__*/React.createElement(_IconButton.default, {
    accessibilityRole: "button",
    borderless: true,
    rippleColor: rippleColor,
    onPress: onIconPress,
    iconColor: iconColor,
    icon: icon || (_ref2 => {
      let {
        size,
        color
      } = _ref2;
      return /*#__PURE__*/React.createElement(_MaterialCommunityIcon.default, {
        name: "magnify",
        color: color,
        size: size,
        direction: _reactNative.I18nManager.getConstants().isRTL ? 'rtl' : 'ltr'
      });
    }),
    accessibilityLabel: searchAccessibilityLabel
  }), /*#__PURE__*/React.createElement(_reactNative.TextInput, _extends({
    style: [styles.input, {
      color: textColor,
      ...(theme.isV3 ? theme.fonts.default : theme.fonts.regular),
      ..._reactNative.Platform.select({
        web: {
          outline: 'none'
        }
      })
    }, inputStyle],
    placeholder: placeholder || '',
    placeholderTextColor: theme.isV3 ? theme.colors.onSurface : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.placeholder,
    selectionColor: colors === null || colors === void 0 ? void 0 : colors.primary,
    underlineColorAndroid: "transparent",
    returnKeyType: "search",
    keyboardAppearance: dark ? 'dark' : 'light',
    accessibilityRole: "search",
    ref: root,
    value: value,
    testID: testID
  }, rest)), loading ? /*#__PURE__*/React.createElement(_ActivityIndicator.default, {
    testID: "activity-indicator",
    style: styles.loader
  }) :
  /*#__PURE__*/
  // Clear icon should be always rendered within Searchbar – it's transparent,
  // without touch events, when there is no value. It's done to avoid issues
  // with the abruptly stopping ripple effect and changing bar width on web,
  // when clearing the value.
  React.createElement(_reactNative.View, {
    pointerEvents: value ? 'auto' : 'none',
    testID: `${testID}-icon-wrapper`
  }, /*#__PURE__*/React.createElement(_IconButton.default, {
    borderless: true,
    accessibilityLabel: clearAccessibilityLabel,
    iconColor: value ? iconColor : 'rgba(255, 255, 255, 0)',
    rippleColor: rippleColor,
    onPress: handleClearPress,
    icon: clearIcon || (_ref3 => {
      let {
        size,
        color
      } = _ref3;
      return /*#__PURE__*/React.createElement(_MaterialCommunityIcon.default, {
        name: "close",
        color: color,
        size: size,
        direction: _reactNative.I18nManager.getConstants().isRTL ? 'rtl' : 'ltr'
      });
    }),
    accessibilityRole: "button"
  })));
});
const styles = _reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 8,
    alignSelf: 'stretch',
    textAlign: _reactNative.I18nManager.getConstants().isRTL ? 'right' : 'left',
    minWidth: 0
  },
  elevation: {
    elevation: 4
  },
  loader: {
    margin: 10
  }
});
var _default = (0, _theming.withInternalTheme)(Searchbar);
exports.default = _default;
//# sourceMappingURL=Searchbar.js.map