function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { getSelectionControlIOSColor } from './utils';
import { withInternalTheme } from '../../core/theming';
import MaterialCommunityIcon from '../MaterialCommunityIcon';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
/**
 * Checkboxes allow the selection of multiple options from a set.
 * This component follows platform guidelines for iOS, but can be used
 * on any platform.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/checkbox-enabled.ios.png" />
 *     <figcaption>Enabled</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/checkbox-disabled.ios.png" />
 *     <figcaption>Disabled</figcaption>
 *   </figure>
 * </div>
 */
const CheckboxIOS = _ref => {
  let {
    status,
    disabled,
    onPress,
    theme,
    testID,
    ...rest
  } = _ref;
  const checked = status === 'checked';
  const indeterminate = status === 'indeterminate';
  const {
    checkedColor,
    rippleColor
  } = getSelectionControlIOSColor({
    theme,
    disabled,
    customColor: rest.color
  });
  const icon = indeterminate ? 'minus' : 'check';
  return /*#__PURE__*/React.createElement(TouchableRipple, _extends({}, rest, {
    borderless: true,
    rippleColor: rippleColor,
    onPress: onPress,
    disabled: disabled,
    accessibilityRole: "checkbox",
    accessibilityState: {
      disabled,
      checked
    },
    accessibilityLiveRegion: "polite",
    style: styles.container,
    testID: testID
  }), /*#__PURE__*/React.createElement(View, {
    style: {
      opacity: indeterminate || checked ? 1 : 0
    }
  }, /*#__PURE__*/React.createElement(MaterialCommunityIcon, {
    allowFontScaling: false,
    name: icon,
    size: 24,
    color: checkedColor,
    direction: "ltr"
  })));
};
CheckboxIOS.displayName = 'Checkbox.IOS';
const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    padding: 6
  }
});
export default withInternalTheme(CheckboxIOS);

// @component-docs ignore-next-line
const CheckboxIOSWithTheme = withInternalTheme(CheckboxIOS);
// @component-docs ignore-next-line
export { CheckboxIOSWithTheme as CheckboxIOS };
//# sourceMappingURL=CheckboxIOS.js.map