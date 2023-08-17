import * as React from 'react';
import { forwardRef } from '../../utils/forwardRef';
import AppbarAction from './AppbarAction';
import AppbarBackIcon from './AppbarBackIcon';
/**
 * A component used to display a back button in the appbar.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *     <Appbar.Header>
 *       <Appbar.BackAction onPress={() => {}} />
 *     </Appbar.Header>
 * );
 *
 * export default MyComponent;
 * ```
 */
const AppbarBackAction = forwardRef((_ref, ref) => {
  let {
    accessibilityLabel = 'Back',
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(AppbarAction, {
    accessibilityLabel: accessibilityLabel,
    ...rest,
    icon: AppbarBackIcon,
    isLeading: true,
    ref: ref
  });
});
AppbarBackAction.displayName = 'Appbar.BackAction';
export default AppbarBackAction;
// @component-docs ignore-next-line
export { AppbarBackAction };
//# sourceMappingURL=AppbarBackAction.js.mapnt(AppbarAction, _extends({
    accessibilityLabel: accessibilityLabel
  }, rest, {
    icon: AppbarBackIcon,
    isLeading: true,
    ref: ref
  }));
});
AppbarBackAction.displayName = 'Appbar.BackAction';
export default AppbarBackAction;

// @component-docs ignore-next-line
export { AppbarBackAction };
//# sourceMappingURL=AppbarBackAction.js.map