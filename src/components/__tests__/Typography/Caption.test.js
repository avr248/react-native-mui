import * as React from 'react';
import { StyleSheet } from 'react-native';
import { render } from '@testing-library/react-native';
import { red500 } from '../../../styles/themes/v2/colors';
import Caption from '../../Typography/v2/Caption';
const style = StyleSheet.create({
    caption: {
        fontSize: 20,
        color: red500,
    },
});
it('renders caption with children as content', () => {
    const tree = render(React.createElement(Caption, null, "Caption content")).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders caption applying style', () => {
    const tree = render(React.createElement(Caption, { style: style.caption }, "Big and red caption")).toJSON();
    expect(tree).toMatchSnapshot();
});
