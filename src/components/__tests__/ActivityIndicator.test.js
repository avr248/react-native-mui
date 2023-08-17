import * as React from 'react';
import { render } from '@testing-library/react-native';
import ActivityIndicator from '../ActivityIndicator';
it('renders indicator', () => {
    const tree = render(React.createElement(ActivityIndicator, { animating: true })).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders hidden indicator', () => {
    const tree = render(React.createElement(ActivityIndicator, { animating: false, hidesWhenStopped: true })).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders large indicator', () => {
    const tree = render(React.createElement(ActivityIndicator, { size: "large" })).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders colored indicator', () => {
    const tree = render(React.createElement(ActivityIndicator, { color: "#FF0000" })).toJSON();
    expect(tree).toMatchSnapshot();
});
