import * as React from 'react';
import { Platform, StyleSheet, View, } from 'react-native';
import color from 'color';
import { useInternalTheme } from '../../core/theming';
import Surface from '../Surface';
import AppbarAction from './AppbarAction';
import AppbarBackAction from './AppbarBackAction';
import AppbarContent from './AppbarContent';
import AppbarHeader from './AppbarHeader';
import { DEFAULT_APPBAR_HEIGHT, getAppbarColor, modeAppbarHeight, renderAppbarContent, } from './utils';
/**
 * A component to display action items in a bar. It can be placed at the top or bottom.
 * The top bar usually contains the screen title, controls such as navigation buttons, menu button etc.
 * The bottom bar usually provides access to a drawer and up to four actions.
 *
 * By default Appbar uses primary color as a background, in dark theme with `adaptive` mode it will use surface colour instead.
 * See [Dark Theme](https://callstack.github.io/react-native-paper/docs/guides/theming#dark-theme) for more informations
 *
 * ## Usage
 * ### Top bar
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Appbar.Header>
 *     <Appbar.BackAction onPress={() => {}} />
 *     <Appbar.Content title="Title" />
 *     <Appbar.Action icon="calendar" onPress={() => {}} />
 *     <Appbar.Action icon="magnify" onPress={() => {}} />
 *   </Appbar.Header>
 * );
 *
 * export default MyComponent;
 * ```
 *
 * ### Bottom bar
 * ```js
 * import * as React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { Appbar, FAB, useTheme } from 'react-native-paper';
 * import { useSafeAreaInsets } from 'react-native-safe-area-context';
 *
 * const BOTTOM_APPBAR_HEIGHT = 80;
 * const MEDIUM_FAB_HEIGHT = 56;
 *
 * const MyComponent = () => {
 *   const { bottom } = useSafeAreaInsets();
 *   const theme = useTheme();
 *
 *   return (
 *     <Appbar
 *       style={[
 *         styles.bottom,
 *         {
 *           height: BOTTOM_APPBAR_HEIGHT + bottom,
 *           backgroundColor: theme.colors.elevation.level2,
 *         },
 *       ]}
 *       safeAreaInsets={{ bottom }}
 *     >
 *       <Appbar.Action icon="archive" onPress={() => {}} />
 *       <Appbar.Action icon="email" onPress={() => {}} />
 *       <Appbar.Action icon="label" onPress={() => {}} />
 *       <Appbar.Action icon="delete" onPress={() => {}} />
 *       <FAB
 *         mode="flat"
 *         size="medium"
 *         icon="plus"
 *         onPress={() => {}}
 *         style={[
 *           styles.fab,
 *           { top: (BOTTOM_APPBAR_HEIGHT - MEDIUM_FAB_HEIGHT) / 2 },
 *         ]}
 *       />
 *     </Appbar>
 *   );
 * };
 *
 * const styles = StyleSheet.create({
 *   bottom: {
 *     backgroundColor: 'aquamarine',
 *     position: 'absolute',
 *     left: 0,
 *     right: 0,
 *     bottom: 0,
 *   },
 *   fab: {
 *     position: 'absolute',
 *     right: 16,
 *   },
 * });
 *
 * export default MyComponent;
 * ```
 */
const Appbar = ({ children, dark, style, mode = 'small', elevated, safeAreaInsets, theme: themeOverrides, ...rest }) => {
    const theme = useInternalTheme(themeOverrides);
    const { isV3 } = theme;
    const flattenedStyle = StyleSheet.flatten(style);
    const { backgroundColor: customBackground, elevation = isV3 ? (elevated ? 2 : 0) : 4, ...restStyle } = (flattenedStyle || {});
    let isDark;
    const backgroundColor = getAppbarColor(theme, elevation, customBackground, elevated);
    const isMode = (modeToCompare) => {
        return isV3 && mode === modeToCompare;
    };
    if (typeof dark === 'boolean') {
        isDark = dark;
    }
    else {
        isDark =
            backgroundColor === 'transparent'
                ? false
                : typeof backgroundColor === 'string'
                    ? !color(backgroundColor).isLight()
                    : true;
    }
    const isV3CenterAlignedMode = isV3 && isMode('center-aligned');
    let shouldCenterContent = false;
    let shouldAddLeftSpacing = false;
    let shouldAddRightSpacing = false;
    if ((!isV3 && Platform.OS === 'ios') || isV3CenterAlignedMode) {
        let hasAppbarContent = false;
        let leftItemsCount = 0;
        let rightItemsCount = 0;
        React.Children.forEach(children, (child) => {
            if (React.isValidElement(child)) {
                if (child.type === AppbarContent) {
                    hasAppbarContent = true;
                }
                else if (hasAppbarContent) {
                    rightItemsCount++;
                }
                else {
                    leftItemsCount++;
                }
            }
        });
        shouldCenterContent =
            hasAppbarContent &&
                leftItemsCount < 2 &&
                rightItemsCount < (isV3 ? 3 : 2);
        shouldAddLeftSpacing = shouldCenterContent && leftItemsCount === 0;
        shouldAddRightSpacing = shouldCenterContent && rightItemsCount === 0;
    }
    const filterAppbarActions = React.useCallback((isLeading = false) => React.Children.toArray(children).filter((child) => 
    // @ts-expect-error: TypeScript complains about the type of type but it doesn't matter
    isLeading ? child.props.isLeading : !child.props.isLeading), [children]);
    const spacingStyle = isV3 ? styles.v3Spacing : styles.spacing;
    const insets = {
        paddingBottom: safeAreaInsets?.bottom,
        paddingTop: safeAreaInsets?.top,
        paddingLeft: safeAreaInsets?.left,
        paddingRight: safeAreaInsets?.right,
    };
    return (React.createElement(Surface, { style: [
            { backgroundColor },
            styles.appbar,
            {
                height: isV3 ? modeAppbarHeight[mode] : DEFAULT_APPBAR_HEIGHT,
            },
            insets,
            restStyle,
            !theme.isV3 && { elevation },
        ], elevation: elevation, ...rest },
        shouldAddLeftSpacing ? React.createElement(View, { style: spacingStyle }) : null,
        (!isV3 || isMode('small') || isMode('center-aligned')) &&
            renderAppbarContent({
                children,
                isDark,
                theme,
                isV3,
                shouldCenterContent: isV3CenterAlignedMode || shouldCenterContent,
            }),
        (isMode('medium') || isMode('large')) && (React.createElement(View, { style: [
                styles.columnContainer,
                isMode('center-aligned') && styles.centerAlignedContainer,
            ] },
            React.createElement(View, { style: styles.controlsRow },
                renderAppbarContent({
                    children,
                    isDark,
                    isV3,
                    renderOnly: [AppbarBackAction],
                    mode,
                }),
                renderAppbarContent({
                    children: filterAppbarActions(true),
                    isDark,
                    isV3,
                    renderOnly: [AppbarAction],
                    mode,
                }),
                React.createElement(View, { style: styles.rightActionControls }, renderAppbarContent({
                    children: filterAppbarActions(false),
                    isDark,
                    isV3,
                    renderExcept: [
                        Appbar,
                        AppbarBackAction,
                        AppbarContent,
                        AppbarHeader,
                    ],
                    mode,
                }))),
            renderAppbarContent({
                children,
                isDark,
                isV3,
                renderOnly: [AppbarContent],
                mode,
            }))),
        shouldAddRightSpacing ? React.createElement(View, { style: spacingStyle }) : null));
};
const styles = StyleSheet.create({
    appbar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 4,
    },
    spacing: {
        width: 48,
    },
    v3Spacing: {
        width: 52,
    },
    controlsRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rightActionControls: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
    },
    columnContainer: {
        flexDirection: 'column',
        flex: 1,
        paddingTop: 8,
    },
    centerAlignedContainer: {
        paddingTop: 0,
    },
});
export default Appbar;
// @component-docs ignore-next-line
export { Appbar };
