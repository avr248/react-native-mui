import * as React from 'react';
import MaterialCommunityIcon from '../components/MaterialCommunityIcon';
export const SettingsContext = React.createContext({
    icon: MaterialCommunityIcon,
    rippleEffectEnabled: true,
});
export const { Provider, Consumer } = SettingsContext;
