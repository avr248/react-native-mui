import React, { useState } from 'react';
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json';
const icons = {
    ...MaterialCommunityIcons,
};
export default function IconsList() {
    const [query, setQuery] = useState('');
    const iconNames = Object.keys(icons).filter((item) => item.includes(query.replace(/\s/g, '-')) ||
        item.replace(/-/g, '').includes(query));
    return (React.createElement("div", { className: "icons-list-container" },
        React.createElement("input", { className: "icons-list-searchbar", type: "search", value: query, onChange: (event) => {
                setQuery(event.target.value);
            }, placeholder: "Find icon by name\u2026" }),
        iconNames.length ? (React.createElement("div", { className: "icons-list-results" }, iconNames.map((name) => (React.createElement("div", { className: "icons-list-icon-container", key: name },
            React.createElement("span", { className: "icons-list-icon" }, String.fromCodePoint(icons[name])),
            React.createElement("span", { className: "icons-list-icon-name" }, name)))))) : (React.createElement("p", null, "No matching icon found :("))));
}
