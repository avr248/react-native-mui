import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { fireEvent, render } from '@testing-library/react-native';
import { red500 } from '../../styles/themes/v2/colors';
import Chip from '../Chip/Chip';
import IconButton from '../IconButton/IconButton';
import ListIcon from '../List/ListIcon';
import ListItem from '../List/ListItem';
const styles = StyleSheet.create({
    title: {
        fontSize: 20,
    },
    description: {
        color: red500,
    },
});
it('renders list item with title and description', () => {
    const tree = render(React.createElement(ListItem, { title: "First Item", description: "Description for first item" })).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders list item with left item', () => {
    const tree = render(React.createElement(ListItem, { title: "First Item", left: (props) => React.createElement(ListIcon, { ...props, icon: "folder" }) })).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders list item with right item', () => {
    const tree = render(React.createElement(ListItem, { title: "First Item", right: () => React.createElement(Text, null, "GG") })).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders list item with left and right items', () => {
    const tree = render(React.createElement(ListItem, { title: "First Item", description: "Item description", left: () => React.createElement(Text, null, "GG"), right: (props) => React.createElement(ListIcon, { ...props, icon: "folder" }) })).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders list item with custom title and description styles', () => {
    const tree = render(React.createElement(ListItem, { title: "First Item", description: "Item description", titleStyle: styles.title, descriptionStyle: styles.description })).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders list item with custom description', () => {
    const tree = render(React.createElement(ListItem, { title: "List Item with custom description", description: ({ ellipsizeMode, color: descriptionColor, fontSize }) => (React.createElement(View, null,
            React.createElement(Text, { numberOfLines: 2, ellipsizeMode: ellipsizeMode, style: { color: descriptionColor, fontSize } }, "React Native Paper is a high-quality, standard-compliant Design Design library that has you covered in all major use-cases."),
            React.createElement(View, null,
                React.createElement(Chip, { icon: "file-pdf-box", onPress: () => { } }, "DOCS.pdf")))) })).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders with a description with typeof number', () => {
    const tree = render(React.createElement(ListItem, { title: "First Item", description: 123, titleStyle: styles.title, descriptionStyle: styles.description })).toJSON();
    expect(tree).toMatchSnapshot();
});
it('calling onPress on ListItem right component', () => {
    Platform.OS = 'web';
    const onPress = jest.fn();
    const { getByTestId } = render(React.createElement(ListItem, { title: "First Item", description: "Item description", right: () => React.createElement(IconButton, { icon: "pencil", onPress: onPress }) }));
    fireEvent(getByTestId('icon-button'), 'onPress');
    expect(onPress).toHaveBeenCalledTimes(1);
});
