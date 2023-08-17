import * as React from 'react';
import { AccessibilityInfo, Appearance, } from 'react-native';
import MaterialCommunityIcon from '../components/MaterialCommunityIcon';
import PortalHost from '../components/Portal/PortalHost';
import { addEventListener } from '../utils/addEventListener';
import SafeAreaProviderCompat from './SafeAreaProviderCompat';
import { Provider as SettingsProvider } from './settings';
import { defaultThemesByVersion, ThemeProvider } from './theming';
const PaperProvider = (props) => {
    const isOnlyVersionInTheme = props.theme && Object.keys(props.theme).length === 1 && props.theme.version;
    const colorSchemeName = ((!props.theme || isOnlyVersionInTheme) && Appearance?.getColorScheme()) ||
        'light';
    const [reduceMotionEnabled, setReduceMotionEnabled] = React.useState(false);
    const [colorScheme, setColorScheme] = React.useState(colorSchemeName);
    const handleAppearanceChange = (preferences) => {
        const { colorScheme } = preferences;
        setColorScheme(colorScheme);
    };
    React.useEffect(() => {
        let subscription;
        if (!props.theme) {
            subscription = addEventListener(AccessibilityInfo, 'reduceMotionChanged', setReduceMotionEnabled);
        }
        return () => {
            if (!props.theme) {
                subscription?.remove();
            }
        };
    }, [props.theme]);
    React.useEffect(() => {
        let appearanceSubscription;
        if (!props.theme || isOnlyVersionInTheme) {
            appearanceSubscription = Appearance?.addChangeListener(handleAppearanceChange);
        }
        return () => {
            if (!props.theme || isOnlyVersionInTheme) {
                if (appearanceSubscription) {
                    appearanceSubscription.remove();
                }
                else {
                    // @ts-expect-error: We keep deprecated listener remove method for backwards compat with old RN versions
                    Appearance?.removeChangeListener(handleAppearanceChange);
                }
            }
        };
    }, [props.theme, isOnlyVersionInTheme]);
    const getTheme = () => {
        const themeVersion = props.theme?.version || 3;
        const scheme = colorScheme || 'light';
        const defaultThemeBase = defaultThemesByVersion[themeVersion][scheme];
        const extendedThemeBase = {
            ...defaultThemeBase,
            ...props.theme,
            version: themeVersion,
            animation: {
                ...props.theme?.animation,
                scale: reduceMotionEnabled ? 0 : 1,
            },
        };
        return {
            ...extendedThemeBase,
            isV3: extendedThemeBase.version === 3,
        };
    };
    const { children, settings } = props;
    return (React.createElement(SafeAreaProviderCompat, null,
        React.createElement(PortalHost, null,
            React.createElement(SettingsProvider, { value: {
                    icon: MaterialCommunityIcon,
                    rippleEffectEnabled: true,
                    ...settings,
                } },
                React.createElement(ThemeProvider, { theme: getTheme() }, children)))));
};
export default PaperProvider;
