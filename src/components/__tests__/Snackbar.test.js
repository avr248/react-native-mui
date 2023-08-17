import * as React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { render } from '@testing-library/react-native';
import { red200, white } from '../../styles/themes/v2/colors';
import Snackbar from '../Snackbar';
const styles = StyleSheet.create({
    snackContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconView: {
        backgroundColor: red200,
        padding: 15,
    },
    text: { color: white, marginLeft: 10, flexWrap: 'wrap', flexShrink: 1 },
});
// Make sure any animation finishes before checking the snapshot results
jest.mock('react-native', () => {
    const RN = jest.requireActual('react-native');
    const timing = (value, config) => ({
        start: (callback) => {
            value.setValue(config.toValue);
            callback?.({ finished: true });
        },
        value,
        config,
        stop: () => {
            throw new Error('Not implemented');
        },
        reset: () => {
            throw new Error('Not implemented');
        },
    });
    RN.Animated.timing = timing;
    return RN;
});
jest.mock('react-native-safe-area-context', () => ({
    useSafeAreaInsets: () => ({ bottom: 34, left: 0, right: 0, top: 47 }),
}));
it('renders snackbar with content', () => {
    const tree = render(React.createElement(Snackbar, { visible: true, onDismiss: jest.fn() }, "Snackbar content")).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders not visible snackbar with content wrapper but no actual content', () => {
    const tree = render(React.createElement(Snackbar, { visible: false, onDismiss: jest.fn() }, "Snackbar content")).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders snackbar with Text as a child', () => {
    const tree = render(React.createElement(Snackbar, { visible: true, onDismiss: jest.fn() },
        React.createElement(Text, null, "Snackbar content"))).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders snackbar with action button', () => {
    const tree = render(React.createElement(Snackbar, { visible: true, onDismiss: () => { }, action: { label: 'Undo', onPress: jest.fn() } }, "Snackbar content")).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders snackbar with View & Text as a child', () => {
    const tree = render(React.createElement(Snackbar, { visible: true, onDismiss: jest.fn() },
        React.createElement(View, { style: styles.snackContent },
            React.createElement(View, { style: styles.iconView }),
            React.createElement(Text, { style: styles.text }, "Error Message which is veryyyyyyyyyyyy longggggggg Error Message which is veryyyyyyyyyyyy longggggggg")))).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders with custom ripple color', () => {
    const { getByTestId } = render(React.createElement(Snackbar, { visible: true, onDismiss: () => { }, onIconPress: () => { }, rippleColor: "purple", testID: "snackbar" }, "Snackbar content"));
    const iconContainer = getByTestId('snackbar-icon-container').props.children;
    expect(iconContainer.props.rippleColor).toBe('purple');
});
it('animated value changes correctly', () => {
    const value = new Animated.Value(1);
    const { getByTestId } = render(React.createElement(Snackbar, { visible: true, onDismiss: jest.fn(), testID: "snack-bar", style: [{ transform: [{ scale: value }] }] }, "Snackbar content"));
    expect(getByTestId('snack-bar-outer-layer')).toHaveStyle({
        transform: [{ scale: 1 }],
    });
    Animated.timing(value, {
        toValue: 1.5,
        useNativeDriver: false,
        duration: 200,
    }).start();
    jest.advanceTimersByTime(200);
    expect(getByTestId('snack-bar-outer-layer')).toHaveStyle({
        transform: [{ scale: 1.5 }],
    });
});
