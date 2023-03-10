"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _theming = require("../../core/theming");
var _types = require("../../types");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Animated text component which follows styles from the theme.
 *
 * @extends Text props https://reactnative.dev/docs/text#props
 */
function AnimatedText(_ref) {
  let {
    style,
    theme,
    variant,
    ...rest
  } = _ref;
  const writingDirection = _reactNative.I18nManager.getConstants().isRTL ? 'rtl' : 'ltr';
  if (theme.isV3 && variant) {
    const stylesByVariant = Object.keys(_types.MD3TypescaleKey).reduce((acc, key) => {
      const {
        fontSize,
        fontWeight,
        lineHeight,
        letterSpacing,
        fontFamily
      } = theme.fonts[key];
      return {
        ...acc,
        [key]: {
          fontFamily,
          fontSize,
          fontWeight,
          lineHeight: lineHeight,
          letterSpacing,
          color: theme.colors.onSurface
        }
      };
    }, {});
    const styleForVariant = stylesByVariant[variant];
    return /*#__PURE__*/React.createElement(_reactNative.Animated.Text, _extends({}, rest, {
      style: [styleForVariant, styles.text, {
        writingDirection
      }, style]
    }));
  } else {
    const font = !theme.isV3 ? theme.fonts.regular : theme.fonts.bodyMedium;
    const textStyle = {
      ...font,
      color: theme.isV3 ? theme.colors.onSurface : theme.colors.text
    };
    return /*#__PURE__*/React.createElement(_reactNative.Animated.Text, _extends({}, rest, {
      style: [styles.text, textStyle, {
        writingDirection
      }, style]
    }));
  }
}
const styles = _reactNative.StyleSheet.create({
  text: {
    textAlign: 'left'
  }
});
var _default = (0, _theming.withInternalTheme)(AnimatedText);
exports.default = _default;
//# sourceMappingURL=AnimatedText.js.map