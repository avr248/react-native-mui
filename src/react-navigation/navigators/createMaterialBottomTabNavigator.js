import * as React from 'react';
import { createNavigatorFactory, TabRouter, useNavigationBuilder, } from '@react-navigation/native';
import MaterialBottomTabView from '../views/MaterialBottomTabView';
/**
 * A material-design themed tab bar on the bottom of the screen that lets you switch between different routes with animation. Routes are lazily initialized - their screen components are not mounted until they are first focused.
 *
 * This is a convenient wrapper which provides prebuilt [React Navigation's Bottom Tabs Navigator](https://reactnavigation.org/docs/bottom-tab-navigator/) integration so users can easily import it and use and don’t want to deal with setting up a custom tab bar.
 * :::info
 * To use `createMaterialBottomTabNavigator` ensure that you have installed [`@react-navigation/native` and its dependencies (follow this guide)](https://reactnavigation.org/docs/getting-started),
 * :::
 *
 *  <div class="screenshots">
 *   <img class="medium" src="screenshots/material-bottom-tabs.gif" />
 *  </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
 *
 * const Tab = createMaterialBottomTabNavigator();
 *
 * function MyTabs() {
 *   return (
 *     <Tab.Navigator>
 *       <Tab.Screen name="Home" component={HomeScreen} />
 *       <Tab.Screen name="Settings" component={SettingsScreen} />
 *     </Tab.Navigator>
 *   );
 * }
 * export default MyTabs;
 *
 * ```
 */
function MaterialBottomTabNavigator({ id, initialRouteName, backBehavior, children, screenListeners, screenOptions, ...rest }) {
    const { state, descriptors, navigation, NavigationContent } = useNavigationBuilder(TabRouter, {
        id,
        initialRouteName,
        backBehavior,
        children,
        screenListeners,
        screenOptions,
    });
    return (React.createElement(NavigationContent, null,
        React.createElement(MaterialBottomTabView, { ...rest, state: state, navigation: navigation, descriptors: descriptors })));
}
MaterialBottomTabNavigator.displayName = 'createMaterialBottomTabNavigator';
export default createNavigatorFactory(MaterialBottomTabNavigator);
