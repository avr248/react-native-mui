function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import * as React from 'react';
import { Consumer as SettingsConsumer, Provider as SettingsProvider } from '../../core/settings';
import { ThemeProvider, withInternalTheme } from '../../core/theming';
import PortalConsumer from './PortalConsumer';
import PortalHost, { PortalContext } from './PortalHost';
/**
 * Portal allows rendering a component at a different place in the parent tree.
 * You can use it to render content which should appear above other elements, similar to `Modal`.
 * It requires a [`Portal.Host`](portal-host.html) component to be rendered somewhere in the parent tree.
 * Note that if you're using the `Provider` component, this already includes a `Portal.Host`.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Portal, Text } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Portal>
 *     <Text>This is rendered at a different place</Text>
 *   </Portal>
 * );
 *
 * export default MyComponent;
 * ```
 */
class Portal extends React.Component {
  // @component ./PortalHost.tsx

  render() {
    const {
      children,
      theme
    } = this.props;
    return /*#__PURE__*/React.createElement(SettingsConsumer, null, settings => /*#__PURE__*/React.createElement(PortalContext.Consumer, null, manager => /*#__PURE__*/React.createElement(PortalConsumer, {
      manager: manager
    }, /*#__PURE__*/React.createElement(SettingsProvider, {
      value: settings
    }, /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, children)))));
  }
}
_defineProperty(Portal, "Host", PortalHost);
export default withInternalTheme(Portal);
//# sourceMappingURL=Portal.js.map