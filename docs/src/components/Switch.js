import React from 'react';
const Switch = ({ value, onValueChange, color }) => {
    const background = value ? color : 'none';
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { checked: value, onChange: onValueChange, className: "react-switch-checkbox", id: `react-switch-new`, type: "checkbox" }),
        React.createElement("label", { style: { background }, className: "react-switch-label", htmlFor: `react-switch-new` },
            React.createElement("span", { className: `react-switch-button` }))));
};
export default Switch;
