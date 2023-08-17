import React from 'react';
//@ts-ignore
import Admonition from '@theme/Admonition';
//@ts-ignore
import TabItem from '@theme/TabItem';
//@ts-ignore
import Tabs from '@theme/Tabs';
import { getMaxNestedLevel, getUniqueNestedKeys, } from '../utils/themeColors';
const getTableHeader = (keys) => {
    return keys.map((key) => React.createElement("th", { key: key }, key));
};
const getTableCell = (keys, modes) => {
    return keys.map((key) => {
        const value = modes[key];
        if (typeof value === 'string') {
            return React.createElement("td", { key: key }, value || '');
        }
        return React.createElement("td", { key: key });
    });
};
const FlatTable = ({ themeColorsData, uniqueKeys, }) => {
    const rows = Object.keys(themeColorsData).map((mode) => {
        return (React.createElement("tr", { key: `${mode}` },
            React.createElement("td", null, mode),
            getTableCell(uniqueKeys, themeColorsData[mode])));
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(Admonition, { type: "info" },
            "The table below outlines the theme colors, specifically for MD3",
            ' ',
            React.createElement("i", null, "(theme version 3)"),
            " at the moment."),
        React.createElement("table", null,
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "mode"),
                    getTableHeader(uniqueKeys))),
            React.createElement("tbody", null, rows))));
};
const TabbedTable = ({ themeColorsData, uniqueKeys, }) => {
    const tabTableContent = Object.keys(themeColorsData).map((key) => {
        const modes = themeColorsData[key];
        const rows = Object.keys(modes).map((mode) => {
            return (React.createElement("tr", { key: `${key}-${mode}` },
                React.createElement("td", null, mode),
                getTableCell(uniqueKeys, modes[mode])));
        });
        return (React.createElement(TabItem, { label: key, value: key, key: key },
            React.createElement("table", null,
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "mode"),
                        getTableHeader(uniqueKeys))),
                React.createElement("tbody", null, rows))));
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(Admonition, { type: "info" },
            "The table below outlines the theme colors, specifically for MD3",
            ' ',
            React.createElement("i", null, "(theme version 3)"),
            " at the moment."),
        React.createElement(Tabs, null, tabTableContent)));
};
const ThemeColorsTable = ({ themeColorsData, componentName, }) => {
    const uniqueKeys = getUniqueNestedKeys(themeColorsData);
    const nestingLevel = getMaxNestedLevel(themeColorsData);
    const isFlatTable = nestingLevel === 1;
    const Table = isFlatTable ? FlatTable : TabbedTable;
    return (React.createElement(React.Fragment, null,
        React.createElement(Table, { themeColorsData: themeColorsData, uniqueKeys: uniqueKeys }),
        React.createElement(Admonition, { type: "tip" },
            React.createElement("p", null,
                "If a dedicated prop for a specific color is not available or the",
                ' ',
                React.createElement("code", null, "style"),
                " prop does not allow color modification, you can customize it using the ",
                React.createElement("code", null, "theme"),
                " prop. It allows to override any color, within the component, based on the table above."),
            React.createElement("p", null,
                React.createElement("i", null, "Example of overriding "),
                React.createElement("code", null, "primary"),
                React.createElement("i", null, " color:")),
            React.createElement("code", null, `<${componentName} theme={{ colors: { primary: 'green' } }} />`))));
};
export default ThemeColorsTable;
