import * as React from 'react';
import { Animated, BackHandler, Easing, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Surface from './Surface';
import { withInternalTheme } from '../core/theming';
import { addEventListener } from '../utils/addEventListener';
import useAnimatedValue from '../utils/useAnimatedValue';
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
  } = useSafeAreaInsets();
  const opacity = useAnimatedValue(visible ? 1 : 0);
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
    subscription.current = addEventListener(BackHandler, 'hardwareBackPress', handleBack);
    Animated.timing(opacity, {
      toValue: 1,
      duration: scale * DEFAULT_DURATION,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true
    }).start();
  };
  const removeListeners = () => {
    var _subscription$current2;
    if ((_subscription$current2 = subscription.current) !== null && _subscription$current2 !== void 0 && _subscription$current2.remove) {
      var _subscription$current3;
      (_subscription$current3 = subscription.current) === null || _subscription$current3 === void 0 ? void 0 : _subscription$current3.remove();
    } else {
      BackHandler.removeEventListener('hardwareBackPress', handleBack);
    }
  };
  const hideModal = () => {
    removeListeners();
    Animated.timing(opacity, {
      toValue: 0,
      duration: scale * DEFAULT_DURATION,
      easing: Easing.out(Easing.cubic),
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
  return /*#__PURE__*/React.createElement(Animated.View, {
    pointerEvents: visible ? 'auto' : 'none',
    accessibilityViewIsModal: true,
    accessibilityLiveRegion: "polite",
    style: StyleSheet.absoluteFill,
    onAccessibilityEscape: hideModal,
    testID: testID
  }, /*#__PURE__*/React.createElement(TouchableWithoutFeedback, {
    accessibilityLabel: overlayAccessibilityLabel,
    accessibilityRole: "button",
    disabled: !dismissable,
    onPress: dismissable ? hideModal : undefined,
    importantForAccessibility: "no"
  }, /*#__PURE__*/React.createElement(Animated.View, {
    testID: `${testID}-backdrop`,
    style: [styles.backdrop, {
      backgroundColor: (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.backdrop,
      opacity
    }]
  })), /*#__PURE__*/React.createElement(View, {
    style: [styles.wrapper, {
      marginTop: top,
      marginBottom: bottom
    }, style],
    pointerEvents: "box-none",
    testID: `${testID}-wrapper`
  }, /*#__PURE__*/React.createElement(Surface, {
    style: [{
      opacity
    }, styles.content, contentContainerStyle]
  }, children)));
}
export default withInternalTheme(Modal);
const styles = StyleSheet.create({
  backdrop: {
    flex: 1
  },
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center'
  },
  content: {
    backgroundColor: 'transparent',
    justifyContent: 'center'
  }
});
//# sourceMappingURL=Modal.js.map