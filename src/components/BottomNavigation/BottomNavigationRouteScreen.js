import React from 'react';
import { Animated, Platform, View } from 'react-native';
class BottomNavigationRouteScreen extends React.Component {
    render() {
        const { style, index, children, visibility, ...rest } = this.props;
        // On Web, the unfocused tab screens can still be clicked since they are transparent, but still there
        // Hiding them with `display: none` makes sure that they won't receive clicks
        // We only set it on Web since on native, react-native-pager-view's breaks due to layout changing
        const display = Platform.OS === 'web' ? (visibility === 0 ? 'none' : 'flex') : undefined;
        return (React.createElement(View, { testID: `RouteScreen: ${index}`, style: [style, { display }], ...rest }, children));
    }
}
export default Animated.createAnimatedComponent(BottomNavigationRouteScreen);
