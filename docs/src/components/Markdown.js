import React from 'react';
const { marked } = require('marked');
export default function Markdown({ content }) {
    const html = marked(content);
    return (React.createElement("div", { dangerouslySetInnerHTML: {
            __html: html,
        } }));
}
