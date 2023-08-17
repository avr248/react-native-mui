import React from 'react';
import { render } from '@testing-library/react-native';
import RadioButton from '../../RadioButton';
import { RadioButtonContext } from '../../RadioButton/RadioButtonGroup';
describe('RadioButton', () => {
    describe('on default platform', () => {
        beforeAll(() => {
            jest.mock('react-native', () => {
                const RN = jest.requireActual('react-native');
                RN.Platform = () => ({
                    select: (objs) => objs.default,
                });
                return RN;
            });
        });
        it('renders properly', () => {
            const tree = render(React.createElement(RadioButton, { value: "first" })).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
    describe('on ios platform', () => {
        beforeAll(() => {
            jest.mock('react-native', () => {
                const RN = jest.requireActual('react-native');
                RN.Platform = () => ({
                    select: (objs) => objs.ios,
                });
                return RN;
            });
        });
        it('renders properly', () => {
            const tree = render(React.createElement(RadioButton, { value: "first" })).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
    describe('when RadioButton is wrapped by RadioButtonContext.Provider', () => {
        it('renders properly', () => {
            const tree = render(React.createElement(RadioButtonContext.Provider, { value: { value: 'first', onValueChange: () => { } } },
                React.createElement(RadioButton, { value: "first" }))).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
    describe('RadioButton with custom testID', () => {
        it('renders properly', () => {
            const tree = render(React.createElement(RadioButton, { value: "first", testID: 'custom:testID' })).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
