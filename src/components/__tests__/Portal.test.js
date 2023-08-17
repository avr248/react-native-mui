import * as React from 'react';
import { Text } from 'react-native';
import { render, waitFor } from '@testing-library/react-native';
import Portal from '../Portal/Portal';
jest.useRealTimers();
it('renders portal with siblings', async () => {
    const { toJSON, getByTestId } = render(React.createElement(Portal.Host, null,
        React.createElement(Text, null, "Outside content"),
        React.createElement(Portal, null,
            React.createElement(Text, { testID: "content" }, "Portal content"))));
    await waitFor(() => getByTestId('content'));
    expect(toJSON()).toMatchSnapshot();
});
