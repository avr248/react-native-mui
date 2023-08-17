import React, { useState } from 'react';
import Color from 'color';
//@ts-ignore
import { BlockPicker } from 'react-color';
import { getMatchingColor, getPreviewColors, hexThemeFromColor, prepareThemes, } from '../utils/themes';
import Switch from './Switch';
const defaultColor = '#663399';
const colorPalette = [
    '#FBC02D',
    '#FFA000',
    '#F57C00',
    '#E64A19',
    '#D32F2F',
    '#C2185B',
    '#7B1FA2',
    '#512DA8',
    '#303F9F',
    '#1976D2',
    '#0288D1',
    '#0097A7',
    '#00796B',
    '#388E3C',
    '#689F38',
    '#AFB42B',
    '#5D4037',
    '#616161',
    '#455A64',
];
const ColorPicker = ({ color, setColor, additional }) => {
    const [open, setOpen] = useState(false);
    const labelColor = Color(color).isDark() ? '#fff' : '#000';
    return (React.createElement("div", { className: "color-picker-anchor" },
        React.createElement("button", { className: additional ? 'color-picker-button-additional' : 'color-picker-button', style: {
                background: color,
                color: labelColor,
            }, onClick: () => setOpen(true) }, color),
        open ? (React.createElement("div", null,
            React.createElement("div", { className: "color-picker-cover", onClick: () => setOpen(false) }),
            React.createElement("div", { className: "color-picker-popup" },
                React.createElement(BlockPicker, { color: color, 
                    //@ts-ignore
                    onChangeComplete: (change) => setColor(change.hex), colors: colorPalette })))) : null));
};
const BaseColor = ({ color, setColor }) => {
    return (React.createElement("tr", null,
        React.createElement("td", null, "Primary"),
        React.createElement("td", { className: "color-picker-button-col" },
            React.createElement(ColorPicker, { color: color, setColor: setColor }))));
};
const AdditionalColor = ({ color, base, setColor, children, }) => {
    const custom = color && color !== base;
    if (custom) {
        return (React.createElement("tr", null,
            React.createElement("td", null,
                children,
                " (custom)"),
            React.createElement("td", null,
                React.createElement(ColorPicker, { color: color, setColor: setColor, additional: true }),
                React.createElement("button", { className: "color-picker-button-cancel", onClick: () => setColor(undefined) }, "\u2715"))));
    }
    return (React.createElement("tr", null,
        React.createElement("td", null, children),
        React.createElement("td", null,
            React.createElement(ColorPicker, { color: base, setColor: setColor }))));
};
const CodePreview = ({ theme, children, }) => {
    const [copied, setCopied] = useState(false);
    const getColorScheme = () => {
        return JSON.stringify({
            colors: theme,
        }, null, 2);
    };
    const onCopy = () => {
        navigator.clipboard.writeText(getColorScheme());
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    };
    return (React.createElement("div", null,
        React.createElement("div", { className: "color-picker-schema-copy-header" },
            React.createElement("h4", null, children),
            React.createElement("button", { onClick: onCopy, className: "color-picker-action-button" }, copied ? 'copied' : 'copy')),
        React.createElement("pre", null,
            React.createElement("code", { className: "language-json" }, getColorScheme()))));
};
const CustomColors = ({ customColors, setCustomColors, }) => {
    const addCustomColor = () => {
        const newName = `custom${customColors.length}`;
        setCustomColors((colors) => [...colors, [newName, defaultColor]]);
    };
    const setCustomColor = (index, hex) => {
        setCustomColors((colors) => colors.map((color, i) => (i === index ? [color[0], hex] : color)));
    };
    const setCustomName = (index, name) => {
        setCustomColors((colors) => colors.map((color, i) => (i === index ? [name, color[1]] : color)));
    };
    const deleteCustomColor = (index) => setCustomColors((colors) => colors.filter((_c, i) => i !== index));
    return (React.createElement(React.Fragment, null,
        customColors.map(([name, color], index) => (React.createElement(CustomColor, { key: `${index}${color}`, name: name, index: index, color: color, setCustomColor: setCustomColor, deleteCustomColor: deleteCustomColor, setCustomName: setCustomName }))),
        React.createElement("tr", null,
            React.createElement("td", { colSpan: 2, align: "center" },
                React.createElement("button", { onClick: addCustomColor, className: "color-picker-action-button" }, "+ Add custom color")))));
};
const CustomColor = ({ name, color, index, setCustomColor, deleteCustomColor, setCustomName, }) => {
    // const [colorName, setColorName] = useState<string>(name);
    const onNameChange = (event) => {
        event.preventDefault();
        setCustomName(index, event.target.value);
    };
    if (name) {
        return (React.createElement("tr", null,
            React.createElement("td", null,
                "Custom color #",
                index + 1,
                ":",
                ' ',
                React.createElement("input", { value: name, onChange: onNameChange, className: "color-picker-name-input" })),
            React.createElement("td", null,
                React.createElement(ColorPicker, { color: color, setColor: (hex) => setCustomColor(index, hex), additional: true }),
                React.createElement("button", { className: "color-picker-button-cancel", onClick: () => deleteCustomColor(index) }, "\u2715"))));
    }
    return (React.createElement("tr", null,
        React.createElement("td", { colSpan: 2 },
            "Custom color #",
            index + 1,
            ":",
            ' ',
            React.createElement("input", { value: name, onChange: onNameChange, className: "color-picker-name-input" }),
            React.createElement("button", { className: "color-picker-button-cancel", onClick: () => deleteCustomColor(index) }, "\u2715"))));
};
const DynamicColorTheme = () => {
    const [isDark, setIsDark] = useState(false);
    const [primary, setPrimary] = useState(defaultColor);
    const [secondary, setSecondary] = useState();
    const [tertiary, setTertiary] = useState();
    const [customColors, setCustomColors] = useState([]);
    const darkMode = isDark ? 'dark' : 'light';
    const baseTheme = hexThemeFromColor(primary);
    const themes = prepareThemes({
        primary,
        secondary,
        tertiary,
        custom: customColors,
    });
    return (React.createElement("div", null,
        React.createElement("table", { className: "color-picker" },
            React.createElement("tbody", null,
                React.createElement(BaseColor, { color: primary, setColor: setPrimary }),
                React.createElement(AdditionalColor, { color: secondary, setColor: setSecondary, base: baseTheme.secondary }, "Secondary"),
                React.createElement(AdditionalColor, { color: tertiary, setColor: setTertiary, base: baseTheme.tertiary }, "Tertiary"),
                React.createElement(CustomColors, { customColors: customColors, setCustomColors: setCustomColors }))),
        React.createElement("div", { className: "color-picker-preview", style: {
                //@ts-ignore
                background: themes[darkMode].background,
                //@ts-ignore
                color: themes[darkMode].onBackground,
                //@ts-ignore
                borderColor: themes[darkMode].outlineVariant,
            } },
            React.createElement("div", { className: "color-picker-preview-header" },
                React.createElement("h3", null, "Preview"),
                React.createElement("div", null,
                    React.createElement("p", null, "Dark Mode:"),
                    React.createElement(Switch, { value: isDark, color: "green", onValueChange: () => setIsDark(!isDark) }))),
            React.createElement("div", { className: "color-picker-grid-column" }, getPreviewColors(themes[darkMode]).map(([key, color]) => {
                const gridColumn = key === 'outline' ? 'span 2' : undefined;
                return (React.createElement("div", { key: key, className: "color-picker-preview-box", style: {
                        backgroundColor: color,
                        color: getMatchingColor(key, themes[darkMode]),
                        gridColumn,
                    } }, key));
            }))),
        React.createElement("div", { className: "color-picker-themes" },
            React.createElement(CodePreview, { theme: themes.light }, "Light theme"),
            React.createElement(CodePreview, { theme: themes.dark }, "Dark theme"))));
};
export default DynamicColorTheme;
