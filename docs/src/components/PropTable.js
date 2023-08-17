import React from 'react';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import useDoc from '@site/component-docs-plugin/useDocs';
import Markdown from './Markdown';
const typeDefinitions = {
    IconSource: 'https://github.com/callstack/react-native-paper/blob/main/src/components/Icon.tsx#L16',
    ThemeProp: 'https://callstack.github.io/react-native-paper/docs/guides/theming#theme-properties',
    AccessibilityState: 'https://reactnative.dev/docs/accessibility#accessibilitystate',
    'StyleProp<ViewStyle>': 'https://reactnative.dev/docs/view-style-props',
    'StyleProp<TextStyle>': 'https://reactnative.dev/docs/text-style-props',
};
const ANNOTATION_EXTENDS = '@extends';
const renderBadge = (annotation) => {
    const [annotType, ...annotLabel] = annotation.split(' ');
    // eslint-disable-next-line prettier/prettier
    return `<span class="badge badge-${annotType.replace('@', '')} ">${annotLabel.join(' ')}</span>`;
};
const renderExtendsLink = (description) => {
    const extendsAttributes = [];
    description
        .split('\n')
        .filter((line) => {
        if (line.startsWith(ANNOTATION_EXTENDS)) {
            const parts = line.split(' ').slice(1);
            const link = parts.pop();
            extendsAttributes.push({
                name: parts.join(' '),
                link,
            });
            return false;
        }
        return true;
    })
        .join('\n');
    if (extendsAttributes.length === 0) {
        return null;
    }
    return extendsAttributes.map((prop) => (React.createElement("a", { key: prop.name, href: prop.link },
        React.createElement("code", null,
            "...",
            prop.name))));
};
export default function PropTable({ componentLink, prop, }) {
    const doc = useDoc(componentLink);
    if (!doc || !doc.data || !doc.data.props) {
        return null;
    }
    const props = doc.data.props;
    return (React.createElement("div", null,
        Object.keys(props).map((key) => {
            if (key !== prop) {
                return null;
            }
            let descriptionByLines = props[key].description.split('\n');
            // Slice leading badge - it's handled in `generatePageMDX`
            if (descriptionByLines[0].includes('@')) {
                descriptionByLines = descriptionByLines.slice(1);
            }
            descriptionByLines = descriptionByLines.map((line) => {
                // Replace annotations with styled badges.
                if (line.includes('@')) {
                    const annotIndex = line.indexOf('@');
                    // eslint-disable-next-line prettier/prettier
                    return `${line.substr(0, annotIndex)} ${renderBadge(line.substr(annotIndex))}`;
                }
                else {
                    return line;
                }
            });
            const description = descriptionByLines.join('\n');
            const tsType = props[key].tsType?.raw ?? props[key].tsType?.name;
            // @ts-ignore
            const tsTypeLink = typeDefinitions[tsType];
            return (React.createElement("div", { key: key },
                React.createElement("p", null,
                    "Type:",
                    ' ',
                    tsTypeLink ? (React.createElement("a", { href: tsTypeLink, target: tsTypeLink.startsWith('https://callstack.github.io/react-native-paper')
                            ? '_self'
                            : '_blank', rel: "noreferrer" },
                        React.createElement("code", null, tsType))) : (React.createElement("code", null, tsType))),
                props[key].defaultValue && (React.createElement("p", null,
                    "Default value: ",
                    React.createElement("code", null, props[key].defaultValue.value))),
                React.createElement(Markdown, { content: description })));
        }),
        renderExtendsLink(doc.description)));
}
