"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AppbarHeader = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _Appbar = require("./Appbar");
var _utils = require("./utils");
var _theming = require("../../core/theming");
var _shadow = _interopRequireDefault(require("../../styles/shadow"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * A component to use as a header at the top of the screen.
 * It can contain the screen title, controls such as navigation buttons, menu button etc.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="small" src="screenshots/appbar-small.png" />
 *     <figcaption>small</figcaption>
 *   </figure>
 *   <figure>
 *     <img class="small" src="screenshots/appbar-medium.png" />
 *     <figcaption>medium</figcaption>
 *   </figure>
 *   <figure>
 *     <img class="small" src="screenshots/appbar-large.png" />
 *     <figcaption>large</figcaption>
 *   </figure>
 *  <figure>
 *     <img class="small" src="screenshots/appbar-center-aligned.png" />
 *     <figcaption>center-aligned</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const _goBack = () => console.log('Went back');
 *
 *   const _handleSearch = () => console.log('Searching');
 *
 *   const _handleMore = () => console.log('Shown more');
 *
 *   return (
 *     <Appbar.Header>
 *       <Appbar.BackAction onPress={_goBack} />
 *       <Appbar.Content title="Title" />
 *       <Appbar.Action icon="magnify" onPress={_handleSearch} />
 *       <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
 *     </Appbar.Header>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const AppbarHeader = _ref => {
  let {
    // Don't use default props since we check it to know whether we should use SafeAreaView
    statusBarHeight,
    style,
    dark,
    mode = _reactNative.Platform.OS === 'ios' ? 'center-aligned' : 'small',
    elevated = false,
    ...rest
  } = _ref;
  const {
    isV3
  } = rest.theme;
  const {
    height = isV3 ? _utils.modeAppbarHeight[mode] : _utils.DEFAULT_APPBAR_HEIGHT,
    elevation = isV3 ? elevated ? 2 : 0 : 4,
    backgroundColor: customBackground,
    zIndex = isV3 && elevated ? 1 : 0,
    ...restStyle
  } = _reactNative.StyleSheet.flatten(style) || {};
  const backgroundColor = (0, _utils.getAppbarColor)(rest.theme, elevation, customBackground, elevated);
  const {
    top,
    left,
    right
  } = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [{
      backgroundColor,
      zIndex,
      elevation,
      paddingTop: statusBarHeight !== null && statusBarHeight !== void 0 ? statusBarHeight : top,
      paddingHorizontal: Math.max(left, right)
    }, (0, _shadow.default)(elevation)]
  }, /*#__PURE__*/React.createElement(_Appbar.Appbar, _extends({
    style: [{
      height,
      backgroundColor
    }, styles.appbar, restStyle],
    dark: dark
  }, isV3 && {
    mode
  }, rest)));
};
AppbarHeader.displayName = 'Appbar.Header';
const styles = _reactNative.StyleSheet.create({
  appbar: {
    elevation: 0
  }
});
var _default = (0, _theming.withInternalTheme)(AppbarHeader); // @component-docs ignore-next-line
exports.default = _default;
const AppbarHeaderWithTheme = (0, _theming.withInternalTheme)(AppbarHeader);
// @component-docs ignore-next-line
exports.AppbarHeader = AppbarHeaderWithTheme;
//# sourceMappingURL=AppbarHeader.js.map