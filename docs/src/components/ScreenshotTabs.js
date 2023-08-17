import React from 'react';
//@ts-ignore
import TabItem from '@theme/TabItem';
//@ts-ignore
import Tabs from '@theme/Tabs';
const getClassName = (value) => value.endsWith('.gif')
    ? 'gifScreenshot'
    : `tabScreenshot${value.includes('full-width') ? 'full-width' : ''}`;
const ScreenshotTabs = ({ screenshotData, baseUrl, }) => {
    const renderScreenhot = (src) => (React.createElement("img", { src: `${baseUrl}${src}`, className: getClassName(src) }));
    if (typeof screenshotData === 'string') {
        return renderScreenhot(screenshotData);
    }
    const screenshots = Object.entries(screenshotData).map(([key, value]) => (React.createElement(TabItem, { key: key, value: key, label: key, default: true }, renderScreenhot(value))));
    return React.createElement(Tabs, null, screenshots);
};
export default ScreenshotTabs;
