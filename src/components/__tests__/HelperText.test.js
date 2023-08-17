import React from 'react';
import { render } from '@testing-library/react-native';
import { getTheme } from '../../core/theming';
import HelperText from '../HelperText/HelperText';
describe('HelperText', () => {
    it('should have correct text color for info type', () => {
        const { getByTestId } = render(React.createElement(HelperText, { testID: "helper-text", type: "info" }, "Info: Maximum length is 100 characters"));
        expect(getByTestId('helper-text')).toHaveStyle({
            color: getTheme().colors.onSurfaceVariant,
        });
    });
    it('should have correct text color for error type', () => {
        const { getByTestId } = render(React.createElement(HelperText, { testID: "helper-text", type: "error" }, "Error: Only letters are allowed"));
        expect(getByTestId('helper-text')).toHaveStyle({
            color: getTheme().colors.error,
        });
    });
});
