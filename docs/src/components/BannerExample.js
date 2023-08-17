import * as React from 'react';
import { StyleSheet, View } from 'react-native';
//@ts-ignore
import BrowserOnly from '@docusaurus/BrowserOnly';
//@ts-ignore
import { useColorMode } from '@docusaurus/theme-common';
import { Avatar, Button, FAB, MD3DarkTheme as DarkTheme, MD3LightTheme as DefaultTheme, ProgressBar, PaperProvider, RadioButton, Switch, Text, TextInput, useTheme, } from 'react-native-paper';
const styles = StyleSheet.create({
    container: {
        padding: 24,
        borderWidth: 1,
        borderRadius: 16,
        marginTop: 16,
        marginBottom: 32,
        overflow: 'hidden',
    },
    row: {
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
});
const Stack = ({ direction = 'column', spacing = 0, style, children }) => {
    return (React.createElement(View, { style: [{ flexDirection: direction, margin: -spacing }, style] }, React.Children.map(children, (child, index) => (React.createElement(View, { key: index, style: { flexDirection: direction, margin: spacing } }, child)))));
};
const BannerExample = () => {
    const theme = useTheme();
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const [text, setText] = React.useState('');
    const [checked, setChecked] = React.useState('first');
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return (React.createElement(View, { style: [
            styles.container,
            {
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.surfaceVariant,
            },
        ] },
        React.createElement(Stack, { spacing: 16 },
            React.createElement(Stack, { direction: "row", spacing: 8, style: styles.row },
                React.createElement(Button, { loading: true, onPress: () => { } }, "Loading"),
                React.createElement(Button, { mode: "contained-tonal", icon: "camera", onPress: () => { } }, "Icon"),
                React.createElement(Button, { icon: "camera", mode: "contained", onPress: () => { } }, "Press me"),
                React.createElement(FAB, { icon: "plus", size: "small", onPress: () => { } }),
                React.createElement(FAB, { icon: "plus", size: "medium", onPress: () => { } }),
                React.createElement(FAB, { icon: "plus", size: "large", onPress: () => { } }),
                React.createElement(Avatar.Text, { label: "MD" }),
                React.createElement(Avatar.Icon, { icon: "folder" })),
            React.createElement(ProgressBar, { indeterminate: true }),
            React.createElement(Stack, { spacing: 8 },
                React.createElement(Text, { variant: "displayLarge" }, "Display Large"),
                React.createElement(Text, { variant: "displayMedium" }, "Display Medium"),
                React.createElement(Text, null, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est tenetur neque laudantium, repellendus at excepturi quasi qui culpa. Incidunt nesciunt unde perspiciatis atque rerum blanditiis sint ratione, sequi totam temporibus.")),
            React.createElement(Stack, { direction: "row", spacing: 8 },
                React.createElement(Switch, { value: !isSwitchOn, onValueChange: onToggleSwitch }),
                React.createElement(Switch, { value: isSwitchOn, onValueChange: onToggleSwitch })),
            React.createElement(Stack, { direction: "row", spacing: 8, style: styles.row },
                React.createElement(TextInput, { label: "Email", value: text, onChangeText: (text) => setText(text) }),
                React.createElement(TextInput, { label: "Email", mode: "outlined", value: text, onChangeText: (text) => setText(text) })),
            React.createElement(Stack, { direction: "row", spacing: 8 },
                React.createElement(RadioButton, { value: "first", status: checked === 'first' ? 'checked' : 'unchecked', onPress: () => setChecked('first') }),
                React.createElement(RadioButton, { value: "second", status: checked === 'second' ? 'checked' : 'unchecked', onPress: () => setChecked('second') }),
                React.createElement(RadioButton, { value: "third", status: checked === 'third' ? 'checked' : 'unchecked', onPress: () => setChecked('third') })))));
};
const Shimmer = () => {
    /* Docusaurus won't call StyleSheet.create() server-side */
    /* eslint-disable react-native/no-inline-styles, react-native/no-color-literals */
    return (React.createElement(View, { style: {
            display: 'flex',
            minHeight: 500,
            borderWidth: 1,
            borderColor: 'rgba(125, 82, 96, 0.4)',
            borderStyle: 'solid',
            borderRadius: 16,
            alignContent: 'center',
            justifyContent: 'center',
            padding: 30,
            marginTop: 36,
            marginBottom: 32,
        } }));
};
const ThemedBannerExample = () => {
    const isDarkTheme = useColorMode().colorMode === 'dark';
    return (React.createElement(PaperProvider, { theme: isDarkTheme ? DarkTheme : DefaultTheme },
        React.createElement(BannerExample, null)));
};
export default function ClientSideBannerExample() {
    return (React.createElement(BrowserOnly, { fallback: React.createElement(Shimmer, null) }, () => React.createElement(ThemedBannerExample, null)));
}
