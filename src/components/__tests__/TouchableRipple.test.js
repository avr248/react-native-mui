import React from 'react';
import { Platform, Text } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import TouchableRipple from '../TouchableRipple/TouchableRipple.native';
describe('TouchableRipple', () => {
    it('renders children correctly', () => {
        const { getByText } = render(React.createElement(TouchableRipple, null,
            React.createElement(Text, null, "Button")));
        expect(getByText('Button')).toBeTruthy();
    });
    it('calls onPress when pressed', () => {
        const onPress = jest.fn();
        const { getByText } = render(React.createElement(TouchableRipple, { onPress: onPress },
            React.createElement(Text, null, "Button")));
        fireEvent.press(getByText('Button'));
        expect(onPress).toHaveBeenCalledTimes(1);
    });
    it('disables the button when disabled prop is true', () => {
        const onPress = jest.fn();
        const { getByText } = render(React.createElement(TouchableRipple, { disabled: true, onPress: onPress },
            React.createElement(Text, null, "Button")));
        fireEvent.press(getByText('Button'));
        expect(onPress).not.toHaveBeenCalled();
    });
    describe('on iOS', () => {
        Platform.OS = 'ios';
        it('displays the underlay when pressed', () => {
            const { getByTestId } = render(React.createElement(TouchableRipple, { testOnly_pressed: true },
                React.createElement(Text, null, "Press me!")));
            const underlay = getByTestId('touchable-ripple-underlay');
            expect(underlay).toBeDefined();
        });
        it('renders custom underlay color', () => {
            const { getByTestId } = render(React.createElement(TouchableRipple, { testOnly_pressed: true, underlayColor: "purple" },
                React.createElement(Text, null, "Press me!")));
            const underlay = getByTestId('touchable-ripple-underlay');
            expect(underlay).toHaveStyle({ backgroundColor: 'purple' });
        });
    });
});
