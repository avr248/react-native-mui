import React from 'react';
import { View } from 'react-native';
import { render } from '@testing-library/react-native';
import DrawerSection from '../../Drawer/DrawerSection';
describe('DrawerSection', () => {
    it('renders properly', () => {
        const tree = render(React.createElement(DrawerSection, null,
            React.createElement(View, null))).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
