import * as React from 'react';
import { StyleSheet } from 'react-native';
import { render } from '@testing-library/react-native';
import { red500 } from '../../styles/themes/v2/colors';
import ListIcon from '../List/ListIcon';
import ListItem from '../List/ListItem';
import ListSection from '../List/ListSection';
import ListSubheader from '../List/ListSubheader';
const styles = StyleSheet.create({
    itemColor: {
        color: red500,
    },
});
it('renders list section without subheader', () => {
    const tree = render(React.createElement(ListSection, null,
        React.createElement(ListItem, { title: "First Item", left: (props) => React.createElement(ListIcon, { ...props, icon: "folder" }) }),
        React.createElement(ListItem, { title: "Second Item", left: (props) => React.createElement(ListIcon, { ...props, icon: "folder" }) }))).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders list section with subheader', () => {
    const tree = render(React.createElement(ListSection, null,
        React.createElement(ListSubheader, null, "Some title"),
        React.createElement(ListItem, { title: "First Item", left: (props) => React.createElement(ListIcon, { ...props, icon: "folder" }) }),
        React.createElement(ListItem, { title: "Second Item", left: (props) => React.createElement(ListIcon, { ...props, icon: "folder" }) }))).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders list section with custom title style', () => {
    const tree = render(React.createElement(ListSection, { title: "Some title", titleStyle: styles.itemColor },
        React.createElement(ListItem, { title: "First Item", left: (props) => React.createElement(ListIcon, { ...props, icon: "folder" }) }),
        React.createElement(ListItem, { title: "Second Item", left: (props) => React.createElement(ListIcon, { ...props, icon: "folder" }) }))).toJSON();
    expect(tree).toMatchSnapshot();
});
