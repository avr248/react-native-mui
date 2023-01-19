function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { withInternalTheme } from '../../core/theming';
import { getSelectionControlIOSColor } from '../Checkbox/utils';
import MaterialCommunityIcon from '../MaterialCommunityIcon';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import { RadioButtonContext } from './RadioButtonGroup';
import { handlePress, isChecked } from './utils';
/**
 * Radio buttons allow the selection a single option from a set.
 * This component follows platform guidelines for iOS, but can be used
 * on any platform.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/radio-enabled.ios.png" />
 *     <figcaption>Enabled</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/radio-disabled.ios.png" />
 *     <figcaption>Disabled</figcaption>
 *   </figure>
 * </div>
 */
const RadioButtonIOS = _ref => {
  let {
    disabled,
    onPress,
    theme,
    status,
    value,
    testID,
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(RadioButtonContext.Consumer, null, context => {
    const checked = isChecked({
      contextValue: context === null || context === void 0 ? void 0 : context.value,
      status,
      value
    }) === 'checked';
    const {
      checkedColor,
      rippleColor
    } = getSelectionControlIOSColor({
      theme,
      disabled,
      customColor: rest.color
    });
    return /*#__PURE__*/React.createElement(TouchableRipple, _extends({}, rest, {
      borderless: true,
      rippleColor: rippleColor,
      onPress: disabled ? undefined : event => {
        handlePress({
          onPress,
          value,
          onValueChange: context === null || context === void 0 ? void 0 : context.onValueChange,
          event
        });
      },
      accessibilityRole: "radio",
      accessibilityState: {
        disabled,
        checked
      },
      accessibilityLiveRegion: "polite",
      style: styles.container,
      testID: testID
    }), /*#__PURE__*/React.createElement(View, {
      style: {
        opacity: checked ? 1 : 0
      }
    }, /*#__PURE__*/React.createElement(MaterialCommunityIcon, {
      allowFontScaling: false,
      name: "check",
      size: 24,
      color: checkedColor,
      direction: "ltr"
    })));
  });
};
RadioButtonIOS.displayName = 'RadioButton.IOS';
const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    padding: 6
  }
});
export default withInternalTheme(RadioButtonIOS);

// @component-docs ignore-next-line
const RadioButtonIOSWithTheme = withInternalTheme(RadioButtonIOS);
// @component-docs ignore-next-line
export { RadioButtonIOSWithTheme as RadioButtonIOS };
//# sourceMappingURL=RadioButtonIOS.js.map