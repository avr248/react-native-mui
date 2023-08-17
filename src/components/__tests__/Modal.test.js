import * as React from 'react';
import { Animated, Text, BackHandler as RNBackHandler, } from 'react-native';
import { act, fireEvent, render } from '@testing-library/react-native';
import { MD3LightTheme } from '../../styles/themes';
import Modal from '../Modal';
jest.mock('react-native-safe-area-context', () => ({
    useSafeAreaInsets: () => ({ bottom: 44, left: 0, right: 0, top: 37 }),
}));
const BackHandler = RNBackHandler;
jest.mock('react-native/Libraries/Utilities/BackHandler', () => 
// eslint-disable-next-line jest/no-mocks-import
require('react-native/Libraries/Utilities/__mocks__/BackHandler'));
describe('Modal', () => {
    beforeAll(() => {
        jest.useFakeTimers();
        jest
            .spyOn(window, 'requestAnimationFrame')
            .mockImplementation((callback) => setTimeout(callback, 1));
    });
    afterAll(() => {
        jest.useRealTimers();
        window.requestAnimationFrame.mockRestore();
    });
    describe('by default', () => {
        it('should render passed children', () => {
            const { getByTestId } = render(React.createElement(Modal, { visible: true, testID: "modal" },
                React.createElement(Text, null, "Children")));
            expect(getByTestId('modal')).toHaveTextContent('Children');
        });
        it("should render a backdrop in default theme's color", () => {
            const { getByTestId } = render(React.createElement(Modal, { visible: true, testID: "modal" }, null));
            expect(getByTestId('modal-backdrop')).toHaveStyle({
                backgroundColor: MD3LightTheme.colors.backdrop,
            });
        });
        it('should render a custom backdrop color if specified', () => {
            const { getByTestId } = render(React.createElement(Modal, { visible: true, testID: "modal", theme: {
                    colors: {
                        backdrop: 'transparent',
                    },
                } }, null));
            expect(getByTestId('modal-backdrop')).toHaveStyle({
                backgroundColor: 'transparent',
            });
        });
        it('should receive appropriate top and bottom insets', () => {
            const { getByTestId } = render(React.createElement(Modal, { visible: true, testID: "modal" }, null));
            expect(getByTestId('modal-wrapper')).toHaveStyle({
                marginTop: 37,
                marginBottom: 44,
            });
        });
    });
    describe('when open', () => {
        describe('if closed via touching backdrop', () => {
            it('will run the animation but not fade out', async () => {
                const { getByTestId } = render(React.createElement(Modal, { testID: "modal", visible: true, onDismiss: () => { } }, null));
                expect(getByTestId('modal-surface-outer-layer')).toHaveStyle({
                    opacity: 1,
                });
                act(() => {
                    fireEvent.press(getByTestId('modal-backdrop'));
                });
                expect(getByTestId('modal-surface-outer-layer')).toHaveStyle({
                    opacity: 1,
                });
                act(() => {
                    jest.runAllTimers();
                });
                expect(getByTestId('modal-backdrop')).toHaveStyle({
                    opacity: 1,
                });
                expect(getByTestId('modal-surface-outer-layer')).toHaveStyle({
                    opacity: 1,
                });
            });
            it('should invoke the onDismiss function after the animation', () => {
                const onDismiss = jest.fn();
                const { getByTestId } = render(React.createElement(Modal, { testID: "modal", visible: true, onDismiss: onDismiss }, null));
                expect(onDismiss).not.toHaveBeenCalled();
                act(() => {
                    fireEvent.press(getByTestId('modal-backdrop'));
                });
                expect(onDismiss).not.toHaveBeenCalled();
                act(() => {
                    jest.runAllTimers();
                });
                expect(onDismiss).toHaveBeenCalledTimes(1);
            });
        });
        describe('if closed via Android back button', () => {
            it('will run the animation but not fade out', async () => {
                const { getByTestId } = render(React.createElement(Modal, { testID: "modal", visible: true, onDismiss: () => { } }, null));
                expect(getByTestId('modal-surface-outer-layer')).toHaveStyle({
                    opacity: 1,
                });
                act(() => {
                    BackHandler.mockPressBack();
                });
                expect(getByTestId('modal-surface-outer-layer')).toHaveStyle({
                    opacity: 1,
                });
                act(() => {
                    jest.runAllTimers();
                });
                expect(getByTestId('modal-backdrop')).toHaveStyle({
                    opacity: 1,
                });
                expect(getByTestId('modal-surface-outer-layer')).toHaveStyle({
                    opacity: 1,
                });
            });
            it('should invoke the onDismiss function after the animation', () => {
                const onDismiss = jest.fn();
                render(React.createElement(Modal, { testID: "modal", visible: true, onDismiss: onDismiss }, null));
                expect(onDismiss).not.toHaveBeenCalled();
                act(() => {
                    BackHandler.mockPressBack();
                });
                expect(onDismiss).not.toHaveBeenCalled();
                act(() => {
                    jest.runAllTimers();
                });
                expect(onDismiss).toHaveBeenCalledTimes(1);
            });
        });
    });
    describe('when open as non-dismissible modal', () => {
        describe('if closed via touching backdrop', () => {
            it('will run the animation but not fade out', async () => {
                const { getByTestId } = render(React.createElement(Modal, { testID: "modal", visible: true, onDismiss: () => { }, dismissable: false }, null));
                expect(getByTestId('modal-surface-outer-layer')).toHaveStyle({
                    opacity: 1,
                });
                act(() => {
                    fireEvent.press(getByTestId('modal-backdrop'));
                });
                expect(getByTestId('modal-surface-outer-layer')).toHaveStyle({
                    opacity: 1,
                });
                act(() => {
                    jest.runAllTimers();
                });
                expect(getByTestId('modal-backdrop')).toHaveStyle({
                    opacity: 1,
                });
                expect(getByTestId('modal-surface-outer-layer')).toHaveStyle({
                    opacity: 1,
                });
            });
            it('should not invoke onDismiss', () => {
                const onDismiss = jest.fn();
                const { getByTestId } = render(React.createElement(Modal, { testID: "modal", visible: true, onDismiss: onDismiss, dismissable: false }, null));
                expect(onDismiss).not.toHaveBeenCalled();
                act(() => {
                    fireEvent.press(getByTestId('modal-backdrop'));
                });
                expect(onDismiss).not.toHaveBeenCalled();
                act(() => {
                    jest.runAllTimers();
                });
                expect(onDismiss).not.toHaveBeenCalled();
            });
        });
        describe('if closed via Android back button', () => {
            it('will run the animation but not fade out', async () => {
                const { getByTestId } = render(React.createElement(Modal, { testID: "modal", visible: true, onDismiss: () => { }, dismissable: false }, null));
                expect(getByTestId('modal-surface-outer-layer')).toHaveStyle({
                    opacity: 1,
                });
                act(() => {
                    BackHandler.mockPressBack();
                });
                expect(getByTestId('modal-surface-outer-layer')).toHaveStyle({
                    opacity: 1,
                });
                act(() => {
                    jest.runAllTimers();
                });
                expect(getByTestId('modal-backdrop')).toHaveStyle({
                    opacity: 1,
                });
                expect(getByTestId('modal-surface-outer-layer')).toHaveStyle({
                    opacity: 1,
                });
            });
            it('should not invoke onDismiss', () => {
                const onDismiss = jest.fn();
                render(React.createElement(Modal, { testID: "modal", visible: true, onDismiss: onDismiss, dismissable: false }, null));
                expect(onDismiss).not.toHaveBeenCalled();
                act(() => {
                    BackHandler.mockPressBack();
                });
                expect(onDismiss).not.toHaveBeenCalled();
                act(() => {
                    jest.runAllTimers();
                });
                expect(onDismiss).not.toHaveBeenCalled();
            });
        });
    });
    describe('when visible prop changes', () => {
        describe('from false to true (closed to open)', () => {
            it('should run fade-in animation on opening', () => {
                const { queryByTestId, getByTestId, rerender } = render(React.createElement(Modal, { testID: "modal", visible: false }, null));
                expect(queryByTestId('modal')).toBe(null);
                rerender(React.createElement(Modal, { testID: "modal", visible: true }, null));
                expect(getByTestId('modal-backdrop')).toHaveStyle({
                    opacity: 0,
                });
                expect(getByTestId('modal-surface-outer-layer')).toHaveStyle({
                    opacity: 0,
                });
                act(() => {
                    jest.runAllTimers();
                });
                expect(getByTestId('modal-backdrop')).toHaveStyle({
                    opacity: 1,
                });
                expect(getByTestId('modal-surface-outer-layer')).toHaveStyle({
                    opacity: 1,
                });
            });
        });
        describe('from true to false (open to closed)', () => {
            it('should run fade-out animation on closing', async () => {
                const { queryByTestId, getByTestId, rerender } = render(React.createElement(Modal, { testID: "modal", visible: true }, null));
                expect(getByTestId('modal-backdrop')).toHaveStyle({
                    opacity: 1,
                });
                expect(getByTestId('modal-surface-outer-layer')).toHaveStyle({
                    opacity: 1,
                });
                rerender(React.createElement(Modal, { testID: "modal", visible: false }, null));
                expect(getByTestId('modal-backdrop')).toHaveStyle({
                    opacity: 1,
                });
                expect(getByTestId('modal-surface-outer-layer')).toHaveStyle({
                    opacity: 1,
                });
                act(() => {
                    jest.runAllTimers();
                });
                expect(queryByTestId('modal')).toBe(null);
            });
            it('should not invoke onDismiss', async () => {
                const onDismiss = jest.fn();
                const { rerender } = render(React.createElement(Modal, { testID: "modal", visible: true, onDismiss: onDismiss }, null));
                expect(onDismiss).not.toHaveBeenCalled();
                rerender(React.createElement(Modal, { testID: "modal", visible: false, onDismiss: onDismiss }, null));
                expect(onDismiss).not.toHaveBeenCalled();
                act(() => {
                    jest.runAllTimers();
                });
                expect(onDismiss).not.toHaveBeenCalled();
            });
            it('should close even if the dialog is not dismissible', async () => {
                const { queryByTestId, getByTestId, rerender } = render(React.createElement(Modal, { testID: "modal", visible: true, dismissable: false }, null));
                expect(getByTestId('modal-backdrop')).toHaveStyle({
                    opacity: 1,
                });
                expect(getByTestId('modal-surface-outer-layer')).toHaveStyle({
                    opacity: 1,
                });
                rerender(React.createElement(Modal, { testID: "modal", visible: false, dismissable: false }, null));
                expect(getByTestId('modal-backdrop')).toHaveStyle({
                    opacity: 1,
                });
                expect(getByTestId('modal-surface-outer-layer')).toHaveStyle({
                    opacity: 1,
                });
                act(() => {
                    jest.runAllTimers();
                });
                expect(queryByTestId('modal')).toBe(null);
            });
        });
    });
    describe('when visible prop changes again during the open/close animation', () => {
        describe('while closing, back to true (visible)', () => {
            it('should keep the modal open', () => {
                const { getByTestId, rerender } = render(React.createElement(Modal, { testID: "modal", visible: true }, null));
                expect(getByTestId('modal-backdrop')).toHaveStyle({
                    opacity: 1,
                });
                expect(getByTestId('modal-surface-outer-layer')).toHaveStyle({
                    opacity: 1,
                });
                rerender(React.createElement(Modal, { testID: "modal", visible: false }, null));
                expect(getByTestId('modal-backdrop')).toHaveStyle({
                    opacity: 1,
                });
                expect(getByTestId('modal-surface-outer-layer')).toHaveStyle({
                    opacity: 1,
                });
                act(() => {
                    // Not a real seconds, this depends on how frequently
                    // requestAnimationFrame is called
                    jest.advanceTimersToNextTimer(1000);
                });
                rerender(React.createElement(Modal, { testID: "modal", visible: true }, null));
                act(() => {
                    jest.runAllTimers();
                });
                expect(getByTestId('modal-backdrop')).toHaveStyle({
                    opacity: 1,
                });
                expect(getByTestId('modal-surface-outer-layer')).toHaveStyle({
                    opacity: 1,
                });
            });
        });
        describe('while opening, back to false (hidden)', () => {
            it('should keep the modal closed', () => {
                const { queryByTestId, getByTestId, rerender } = render(React.createElement(Modal, { testID: "modal", visible: false }, null));
                expect(queryByTestId('modal-backdrop')).toBe(null);
                rerender(React.createElement(Modal, { testID: "modal", visible: true }, null));
                expect(getByTestId('modal-backdrop')).toHaveStyle({
                    opacity: 0,
                });
                expect(getByTestId('modal-surface-outer-layer')).toHaveStyle({
                    opacity: 0,
                });
                act(() => {
                    // Not a real seconds, this depends on how frequently
                    // requestAnimationFrame is called
                    jest.advanceTimersToNextTimer(1000);
                });
                expect(queryByTestId('modal-backdrop')).not.toBe(null);
                rerender(React.createElement(Modal, { testID: "modal", visible: false }, null));
                act(() => {
                    jest.runAllTimers();
                });
                expect(queryByTestId('modal-backdrop')).toBe(null);
            });
        });
    });
    it('animated value changes correctly', () => {
        const value = new Animated.Value(1);
        const { getByTestId } = render(React.createElement(Modal, { visible: true, testID: "modal", contentContainerStyle: [{ transform: [{ scale: value }] }] }, null));
        expect(getByTestId('modal-surface-outer-layer')).toHaveStyle({
            transform: [{ scale: 1 }],
        });
        Animated.timing(value, {
            toValue: 1.5,
            useNativeDriver: false,
            duration: 200,
        }).start();
        jest.runAllTimers();
        expect(getByTestId('modal-surface-outer-layer')).toHaveStyle({
            transform: [{ scale: 1.5 }],
        });
    });
});
