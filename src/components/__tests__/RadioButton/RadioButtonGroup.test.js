import React from 'react';
import { render } from '@testing-library/react-native';
import RadioButton from '../../RadioButton';
describe('RadioButtonGroup', () => {
    it('renders properly', () => {
        const tree = render(React.createElement(RadioButton.Group, { value: "first", onValueChange: () => { } },
            React.createElement(RadioButton, { value: "first" }))).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
