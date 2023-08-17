import * as React from 'react';
import { render } from '@testing-library/react-native';
import PaperProvider from '../../../core/PaperProvider';
import configureFonts from '../../../styles/fonts';
import { MD3LightTheme } from '../../../styles/themes';
import { tokens } from '../../../styles/themes/v3/tokens';
import Text, { customText } from '../../Typography/Text';
const content = 'Something rendered as a child content';
it('renders every variant of Text with children as content', () => {
    const variants = (React.createElement(React.Fragment, null,
        React.createElement(Text, { variant: "displayLarge" }, content),
        React.createElement(Text, { variant: "displayMedium" }, content),
        React.createElement(Text, { variant: "displaySmall" }, content),
        React.createElement(Text, { variant: "headlineLarge" }, content),
        React.createElement(Text, { variant: "headlineMedium" }, content),
        React.createElement(Text, { variant: "headlineSmall" }, content),
        React.createElement(Text, { variant: "titleLarge" }, content),
        React.createElement(Text, { variant: "titleMedium" }, content),
        React.createElement(Text, { variant: "titleSmall" }, content),
        React.createElement(Text, { variant: "bodyLarge" }, content),
        React.createElement(Text, { variant: "bodyMedium" }, content),
        React.createElement(Text, { variant: "bodySmall" }, content),
        React.createElement(Text, { variant: "labelLarge" }, content),
        React.createElement(Text, { variant: "labelMedium" }, content),
        React.createElement(Text, { variant: "labelSmall" }, content)));
    const tree = render(variants).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders v3 Text component without variant with default fontWeight and fontFamily', () => {
    const { getByTestId } = render(React.createElement(Text, { testID: "text-without-variant" }, content));
    const { brandRegular, weightRegular } = tokens.md.ref.typeface;
    expect(getByTestId('text-without-variant')).toHaveStyle({
        fontFamily: brandRegular,
        fontWeight: weightRegular,
    });
});
it('renders v3 Text component with custom variant correctly', () => {
    const fontConfig = {
        customVariant: {
            fontFamily: 'Montserrat-Regular',
            fontWeight: '400',
            letterSpacing: 0.51,
            lineHeight: 54.1,
            fontSize: 41,
        },
    };
    const theme = {
        ...MD3LightTheme,
        fonts: configureFonts({ config: fontConfig }),
    };
    const Text = customText();
    const { getByTestId } = render(React.createElement(PaperProvider, { theme: theme },
        React.createElement(Text, { testID: "text-with-custom-variant", variant: "customVariant" }, content)));
    expect(getByTestId('text-with-custom-variant').props.style).toMatchSnapshot();
});
it("nested text with variant should override parent's variant", () => {
    const { getByTestId } = render(React.createElement(Text, { testID: "parent-text", variant: "bodySmall" },
        React.createElement(Text, { variant: "displayLarge" }, "Test")));
    expect(getByTestId('parent-text')).toHaveStyle(MD3LightTheme.fonts.displayLarge);
});
it("nested text without variant, but with styles, should override parent's styles", () => {
    const customStyle = { fontSize: 50, lineHeight: 70 };
    const { getByTestId } = render(React.createElement(Text, { testID: "parent-text", variant: "bodySmall" },
        React.createElement(Text, { style: customStyle }, "Test")));
    expect(getByTestId('parent-text')).toHaveStyle(customStyle);
});
it('throws when custom variant not provided', () => {
    jest.spyOn(console, 'error').mockImplementation(() => { });
    const Text = customText();
    expect(() => render(React.createElement(Text, { variant: "myCustomVariant" }, content))).toThrow(/myCustomVariant was not provided/);
    jest.clearAllMocks();
});
