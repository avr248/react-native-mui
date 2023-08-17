"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AppbarBackAction = void 0;
var React = _interopRequireWildcard(require("react"));
var _forwardRef = require("../../utils/forwardRef");
var _AppbarAction = _interopRequireDefault(require("./AppbarAction"));
var _AppbarBackIcon = _interopRequireDefault(require("./AppbarBackIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
const AppbarBackAction = (0, _forwardRef.forwardRef)((_ref, ref) => {
  let {
    accessibilityLabel = 'Back',
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(_AppbarAction.default, {
    accessibilityLabel: accessibilityLabel,
    ...rest,
    icon: _AppbarBackIcon.default,
    isLeading: true,
    ref: ref
  });
});
exports.AppbarBackAction = AppbarBackAction;
AppbarBackAction.displayName = 'Appbar.BackAction';
var _default = AppbarBackAction; // @component-docs ignore-next-line
exports.default = _default;
//# sourceMappingURL=AppbarBackAction.js.mapccessibilityLabel
  }, rest, {
    icon: _AppbarBackIcon.default,
    isLeading: true,
    ref: ref
  }));
});
exports.AppbarBackAction = AppbarBackAction;
AppbarBackAction.displayName = 'Appbar.BackAction';
var _default = AppbarBackAction; // @component-docs ignore-next-line
exports.default = _default;
//# sourceMappingURL=AppbarBackAction.js.map