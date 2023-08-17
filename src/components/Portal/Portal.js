import * as React from 'react';
import { Consumer as SettingsConsumer, Provider as SettingsProvider, } from '../../core/settings';
import { ThemeProvider, withInternalTheme } from '../../core/theming';
import PortalConsumer from './PortalConsumer';
import PortalHost, { PortalContext } from './PortalHost';
/**
 * Portal allows rendering a component at a different place in the parent tree.
 * You can use it to render content which should appear above other elements, similar to `Modal`.
 * It requires a [`Portal.Host`](PortalHost) component to be rendered somewhere in the parent tree.
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
    static Host = PortalHost;
    render() {
        const { children, theme } = this.props;
        return (React.createElement(SettingsConsumer, null, (settings) => (React.createElement(PortalContext.Consumer, null, (manager) => (React.createElement(PortalConsumer, { manager: manager },
            React.createElement(SettingsProvider, { value: settings },
                React.createElement(ThemeProvider, { theme: theme }, children))))))));
    }
}
export default withInternalTheme(Portal);
