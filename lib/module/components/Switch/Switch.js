import * as React from 'react';
import { NativeModules, Platform, Switch as NativeSwitch } from 'react-native';
import { useInternalTheme } from '../../core/theming';
import { getSwitchColor } from './utils';
const version = NativeModules.PlatformConstants ? NativeModules.PlatformConstants.reactNativeVersion : undefined;
/**
 * Switch is a visual toggle between two mutually exclusive states — on and off.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Switch } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [isSwitchOn, setIsSwitchOn] = React.useState(false);
 *
 *   const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
 *
 *   return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
 * };
 *
 * export default MyComponent;
 * ```
 */
const Switch = _ref => {
  let {
    value,
    disabled,
    onValueChange,
    color,
    theme: themeOverrides,
    ...rest
  } = _ref;
  const theme = useInternalTheme(themeOverrides);
  const {
    checkedColor,
    onTintColor,
    thumbTintColor
  } = getSwitchColor({
    theme,
    disabled,
    value,
    color
  });
  const props = version && version.major === 0 && version.minor <= 56 ? {
    onTintColor,
    thumbTintColor
  } : Platform.OS === 'web' ? {
    activeTrackColor: onTintColor,
    thumbColor: thumbTintColor,
    activeThumbColor: checkedColor
  } : {
    thumbColor: thumbTintColor,
    trackColor: {
      true: onTintColor,
      false: onTintColor
    }
  };
  return /*#__PURE__*/React.createElement(NativeSwitch, {
    value: value,
    disabled: disabled,
    onValueChange: disabled ? undefined : onValueChange,
    ...props,
    ...rest
  });
};
export default Switch;
//# sourceMappingURL=Switch.js.mapbTintColor,
    trackColor: {
      true: onTintColor,
      false: onTintColor
    }
  };
  return /*#__PURE__*/React.createElement(NativeSwitch, _extends({
    value: value,
    disabled: disabled,
    onValueChange: disabled ? undefined : onValueChange
  }, props, rest));
};
export default Switch;
//# sourceMappingURL=Switch.js.map