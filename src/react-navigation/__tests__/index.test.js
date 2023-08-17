import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, render } from '@testing-library/react-native';
import PaperProvider from '../../core/PaperProvider';
import { createMaterialBottomTabNavigator, } from '../index';
it('renders a material bottom tab navigator with screens', async () => {
    const Test = ({ route, navigation, }) => (React.createElement(View, null,
        React.createElement(Text, null,
            "Screen ",
            route.name),
        React.createElement(Button, { onPress: () => navigation.navigate('A'), title: "Go to A" }),
        React.createElement(Button, { onPress: () => navigation.navigate('B'), title: "Go to B" })));
    const Tab = createMaterialBottomTabNavigator();
    const { findByText, queryByText } = render(React.createElement(NavigationContainer, null,
        React.createElement(PaperProvider, null,
            React.createElement(Tab.Navigator, null,
                React.createElement(Tab.Screen, { name: "A", component: Test }),
                React.createElement(Tab.Screen, { name: "B", component: Test })))));
    expect(queryByText('Screen A')).not.toBeNull();
    expect(queryByText('Screen B')).toBeNull();
    fireEvent(await findByText('Go to B'), 'press');
    expect(queryByText('Screen B')).not.toBeNull();
});
