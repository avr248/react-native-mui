"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _Surface = _interopRequireDefault(require("./Surface"));
var _theming = require("../core/theming");
var _addEventListener = require("../utils/addEventListener");
var _useAnimatedValue = _interopRequireDefault(require("../utils/useAnimatedValue"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const DEFAULT_DURATION = 220;

/**
 * The Modal component is a simple way to present content above an enclosing view.
 * To render the `Modal` above other components, you'll need to wrap it with the [`Portal`](portal.html) component.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/modal.gif" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(false);
 *
 *   const showModal = () => setVisible(true);
 *   const hideModal = () => setVisible(false);
 *   const containerStyle = {backgroundColor: 'white', padding: 20};
 *
 *   return (
 *     <Provider>
 *       <Portal>
 *         <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
 *           <Text>Example Modal.  Click outside this area to dismiss.</Text>
 *         </Modal>
 *       </Portal>
 *       <Button style={{marginTop: 30}} onPress={showModal}>
 *         Show
 *       </Button>
 *     </Provider>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
function Modal(_ref) {
  var _theme$colors;
  let {
    dismissable = true,
    visible = false,
    overlayAccessibilityLabel = 'Close modal',
    onDismiss,
    children,
    contentContainerStyle,
    style,
    theme,
    testID = 'modal'
  } = _ref;
  const visibleRef = React.useRef(visible);
  React.useEffect(() => {
    visibleRef.current = visible;
  });
  const {
    scale
  } = theme.animation;
  const {
    top,
    bottom
  } = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const opacity = (0, _useAnimatedValue.default)(visible ? 1 : 0);
  const [rendered, setRendered] = React.useState(visible);
  if (visible && !rendered) {
    setRendered(true);
  }
  const handleBack = () => {
    if (dismissable) {
      hideModal();
    }
    return true;
  };
  const subscription = React.useRef(undefined);
  const showModal = () => {
    var _subscription$current;
    (_subscription$current = subscription.current) === null || _subscription$current === void 0 ? void 0 : _subscription$current.remove();
    subscription.current = (0, _addEventListener.addEventListener)(_reactNative.BackHandler, 'hardwareBackPress', handleBack);
    _reactNative.Animated.timing(opacity, {
      toValue: 1,
      duration: scale * DEFAULT_DURATION,
      easing: _reactNative.Easing.out(_reactNative.Easing.cubic),
      useNativeDriver: true
    }).start();
  };
  const removeListeners = () => {
    var _subscription$current2;
    if ((_subscription$current2 = subscription.current) !== null && _subscription$current2 !== void 0 && _subscription$current2.remove) {
      var _subscription$current3;
      (_subscription$current3 = subscription.current) === null || _subscription$current3 === void 0 ? void 0 : _subscription$current3.remove();
    } else {
      _reactNative.BackHandler.removeEventListener('hardwareBackPress', handleBack);
    }
  };
  const hideModal = () => {
    removeListeners();
    _reactNative.Animated.timing(opacity, {
      toValue: 0,
      duration: scale * DEFAULT_DURATION,
      easing: _reactNative.Easing.out(_reactNative.Easing.cubic),
      useNativeDriver: true
    }).start(_ref2 => {
      let {
        finished
      } = _ref2;
      if (!finished) {
        return;
      }
      if (visible && onDismiss) {
        onDismiss();
      }
      if (visibleRef.current) {
        showModal();
      } else {
        setRendered(false);
      }
    });
  };
  const prevVisible = React.useRef(null);
  React.useEffect(() => {
    if (prevVisible.current !== visible) {
      if (visible) {
        showModal();
      } else {
        hideModal();
      }
    }
    prevVisible.current = visible;
  });
  React.useEffect(() => {
    return removeListeners;
  }, []);
  if (!rendered) return null;
  return /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    pointerEvents: visible ? 'auto' : 'none',
    accessibilityViewIsModal: true,
    accessibilityLiveRegion: "polite",
    style: _reactNative.StyleSheet.absoluteFill,
    onAccessibilityEscape: hideModal,
    testID: testID
  }, /*#__PURE__*/React.createElement(_reactNative.TouchableWithoutFeedback, {
    accessibilityLabel: overlayAccessibilityLabel,
    accessibilityRole: "button",
    disabled: !dismissable,
    onPress: dismissable ? hideModal : undefined,
    importantForAccessibility: "no"
  }, /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    testID: `${testID}-backdrop`,
    style: [styles.backdrop, {
      backgroundColor: (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.backdrop,
      opacity
    }]
  })), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.wrapper, {
      marginTop: top,
      marginBottom: bottom
    }, style],
    pointerEvents: "box-none",
    testID: `${testID}-wrapper`
  }, /*#__PURE__*/React.createElement(_Surface.default, {
    style: [{
      opacity
    }, styles.content, contentContainerStyle]
  }, children)));
}
var _default = (0, _theming.withInternalTheme)(Modal);
exports.default = _default;
const styles = _reactNative.StyleSheet.create({
  backdrop: {
    flex: 1
  },
  wrapper: {
    ..._reactNative.StyleSheet.absoluteFillObject,
    justifyContent: 'center'
  },
  content: {
    backgroundColor: 'transparent',
    justifyContent: 'center'
  }
});
//# sourceMappingURL=Modal.js.map