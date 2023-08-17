import * as React from 'react';
import { render } from '@testing-library/react-native';
import { red500 } from '../../styles/themes/v2/colors';
import Badge from '../Badge';
jest.mock('react-native', () => {
    const RN = jest.requireActual('react-native');
    RN.Dimensions.get = () => ({
        fontScale: 1,
    });
    return RN;
});
it('renders badge', () => {
    const tree = render(React.createElement(Badge, null)).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders badge with content', () => {
    const tree = render(React.createElement(Badge, null, "3")).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders badge in different size', () => {
    const tree = render(React.createElement(Badge, { size: 12 }, "3")).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders badge as hidden', () => {
    const tree = render(React.createElement(Badge, { visible: false, size: 12 }, "3")).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders badge in different color', () => {
    const tree = render(React.createElement(Badge, { style: { backgroundColor: red500 } }, "3")).toJSON();
    expect(tree).toMatchSnapshot();
});
