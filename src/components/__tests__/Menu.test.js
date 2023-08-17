import * as React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { render, waitFor, screen } from '@testing-library/react-native';
import Button from '../Button/Button';
import Menu from '../Menu/Menu';
import Portal from '../Portal/Portal';
const styles = StyleSheet.create({
    contentStyle: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
});
it('renders visible menu', () => {
    const tree = render(React.createElement(Portal.Host, null,
        React.createElement(Menu, { visible: true, onDismiss: jest.fn(), anchor: React.createElement(Button, { mode: "outlined" }, "Open menu") },
            React.createElement(Menu.Item, { onPress: jest.fn(), title: "Undo" }),
            React.createElement(Menu.Item, { onPress: jest.fn(), title: "Redo" })))).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders not visible menu', () => {
    const tree = render(React.createElement(Portal.Host, null,
        React.createElement(Menu, { visible: false, onDismiss: jest.fn(), anchor: React.createElement(Button, { mode: "outlined" }, "Open menu") },
            React.createElement(Menu.Item, { onPress: jest.fn(), title: "Undo" }),
            React.createElement(Menu.Item, { onPress: jest.fn(), title: "Redo" })))).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders menu with content styles', () => {
    const tree = render(React.createElement(Portal.Host, null,
        React.createElement(Menu, { visible: true, onDismiss: jest.fn(), anchor: React.createElement(Button, { mode: "outlined" }, "Open menu"), contentStyle: styles.contentStyle },
            React.createElement(Menu.Item, { onPress: jest.fn(), title: "Undo" }),
            React.createElement(Menu.Item, { onPress: jest.fn(), title: "Redo" })))).toJSON();
    expect(tree).toMatchSnapshot();
});
it('uses the default anchorPosition of top', async () => {
    function makeMenu(visible) {
        return (React.createElement(Portal.Host, null,
            React.createElement(Menu, { visible: visible, onDismiss: jest.fn(), anchor: React.createElement(Button, { mode: "outlined", testID: "anchor" }, "Open menu"), contentStyle: styles.contentStyle },
                React.createElement(Menu.Item, { onPress: jest.fn(), title: "Undo" }),
                React.createElement(Menu.Item, { onPress: jest.fn(), title: "Redo" }))));
    }
    render(makeMenu(false));
    jest
        .spyOn(View.prototype, 'measureInWindow')
        .mockImplementation((fn) => fn(100, 100, 80, 32));
    // You must update instead of creating directly and using it because
    // componentDidUpdate isn't called by default in jest. Forcing the update
    // than triggers measureInWindow, which is how Menu decides where to show
    // itself.
    screen.update(makeMenu(true));
    await waitFor(() => {
        const menu = screen.getByTestId('menu-view');
        expect(menu).toHaveStyle({
            position: 'absolute',
            left: 100,
            top: 100,
        });
    });
});
it('respects anchorPosition bottom', async () => {
    function makeMenu(visible) {
        return (React.createElement(Portal.Host, null,
            React.createElement(Menu, { visible: visible, onDismiss: jest.fn(), anchor: React.createElement(Button, { mode: "outlined", testID: "anchor" }, "Open menu"), anchorPosition: "bottom", contentStyle: styles.contentStyle },
                React.createElement(Menu.Item, { onPress: jest.fn(), title: "Undo" }),
                React.createElement(Menu.Item, { onPress: jest.fn(), title: "Redo" }))));
    }
    render(makeMenu(false));
    jest
        .spyOn(View.prototype, 'measureInWindow')
        .mockImplementation((fn) => fn(100, 100, 80, 32));
    screen.update(makeMenu(true));
    await waitFor(() => {
        const menu = screen.getByTestId('menu-view');
        expect(menu).toHaveStyle({
            position: 'absolute',
            left: 100,
            top: 132,
        });
    });
});
it('animated value changes correctly', () => {
    const value = new Animated.Value(1);
    const { getByTestId } = render(React.createElement(Portal.Host, null,
        React.createElement(Menu, { visible: true, onDismiss: jest.fn(), anchor: React.createElement(Button, { mode: "outlined" }, "Open menu"), testID: "menu", contentStyle: [{ transform: [{ scale: value }] }] },
            React.createElement(Menu.Item, { onPress: jest.fn(), title: "Test" }))));
    expect(getByTestId('menu-surface-outer-layer')).toHaveStyle({
        transform: [{ scale: 1 }],
    });
    Animated.timing(value, {
        toValue: 1.5,
        useNativeDriver: false,
        duration: 200,
    }).start();
    jest.advanceTimersByTime(200);
    expect(getByTestId('menu-surface-outer-layer')).toHaveStyle({
        transform: [{ scale: 1.5 }],
    });
});
