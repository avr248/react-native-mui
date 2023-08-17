import * as React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { fireEvent, render } from '@testing-library/react-native';
import color from 'color';
import { getTheme } from '../../core/theming';
import { pink500, black, white } from '../../styles/themes/v2/colors';
import Button from '../Button/Button';
import { getButtonColors } from '../Button/utils';
const styles = StyleSheet.create({
    flexing: {
        flexDirection: 'row-reverse',
    },
});
it('renders text button by default', () => {
    const tree = render(React.createElement(Button, null, "Text Button")).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders text button with mode', () => {
    const tree = render(React.createElement(Button, { mode: "text" }, "Text Button")).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders outlined button with mode', () => {
    const tree = render(React.createElement(Button, { mode: "outlined" }, "Outlined Button")).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders contained contained with mode', () => {
    const tree = render(React.createElement(Button, { mode: "contained" }, "Contained Button")).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders button with icon', () => {
    const tree = render(React.createElement(Button, { icon: "camera" }, "Icon Button")).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders button with icon in reverse order', () => {
    const tree = render(React.createElement(Button, { icon: "chevron-right", contentStyle: styles.flexing }, "Right Icon")).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders loading button', () => {
    const tree = render(React.createElement(Button, { loading: true }, "Loading Button")).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders disabled button', () => {
    const tree = render(React.createElement(Button, { disabled: true }, "Disabled Button")).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders disabled button if there is no touch handler passed', () => {
    const { getByTestId } = render(React.createElement(Button, { testID: "disabled-button" }, "Disabled button"));
    expect(getByTestId('disabled-button').props.accessibilityState).toMatchObject({
        disabled: true,
    });
});
it('renders active button if only onLongPress handler is passed', () => {
    const { getByTestId } = render(React.createElement(Button, { onLongPress: () => { }, testID: "active-button" }, "Active button"));
    expect(getByTestId('active-button').props.accessibilityState).toMatchObject({
        disabled: false,
    });
});
it('renders button with color', () => {
    const tree = render(React.createElement(Button, { textColor: pink500 }, "Custom Button")).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders button with button color', () => {
    const tree = render(React.createElement(Button, { buttonColor: pink500 }, "Custom Button")).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders button with custom testID', () => {
    const tree = render(React.createElement(Button, { testID: 'custom:testID' }, "Button with custom testID")).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders button with an accessibility label', () => {
    const tree = render(React.createElement(Button, { accessibilityLabel: 'label' }, "Button with accessibility label")).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders button with an accessibility hint', () => {
    const tree = render(React.createElement(Button, { accessibilityHint: 'hint' }, "Button with accessibility hint")).toJSON();
    expect(tree).toMatchSnapshot();
});
it('should execute onPressIn', () => {
    const onPressInMock = jest.fn();
    const onPress = jest.fn();
    const { getByTestId } = render(React.createElement(Button, { onPress: onPress, onPressIn: onPressInMock, testID: "button" }, null));
    fireEvent(getByTestId('button'), 'onPressIn');
    expect(onPressInMock).toHaveBeenCalledTimes(1);
});
it('should execute onPressOut', () => {
    const onPressOutMock = jest.fn();
    const onPress = jest.fn();
    const { getByTestId } = render(React.createElement(Button, { onPress: onPress, onPressOut: onPressOutMock, testID: "button" }, null));
    fireEvent(getByTestId('button'), 'onPressOut');
    expect(onPressOutMock).toHaveBeenCalledTimes(1);
});
describe('button text styles', () => {
    it('applies uppercase styles if uppercase prop is truthy', () => {
        const { getByTestId } = render(React.createElement(Button, { testID: "button", uppercase: true }, "Test"));
        expect(getByTestId('button-text')).toHaveStyle({
            textTransform: 'uppercase',
        });
    });
    it('does not apply uppercase styles if uppercase prop is falsy', () => {
        const { getByTestId } = render(React.createElement(Button, { testID: "button", uppercase: false }, "Test"));
        expect(getByTestId('button-text')).not.toHaveStyle({
            textTransform: 'uppercase',
        });
    });
});
describe('button icon styles', () => {
    it('should return correct icon styles for compact text button', () => {
        const { getByTestId } = render(React.createElement(Button, { mode: 'text', compact: true, icon: "camera", testID: "compact-button" }, "Compact text button"));
        expect(getByTestId('compact-button-icon-container')).toHaveStyle({
            marginLeft: 6,
            marginRight: 0,
        });
    });
    ['outlined', 'contained', 'contained-tonal', 'elevated'].forEach((mode) => it(`should return correct icon styles for compact ${mode} button`, () => {
        const { getByTestId } = render(React.createElement(Button, { mode: mode, compact: true, icon: "camera", testID: "compact-button" },
            "Compact ",
            mode,
            " button"));
        expect(getByTestId('compact-button-icon-container')).toHaveStyle({
            marginLeft: 8,
            marginRight: 0,
        });
    }));
    it('should return correct icon styles for text button', () => {
        const { getByTestId } = render(React.createElement(Button, { mode: 'text', icon: "camera", testID: "compact-button" }, "text button"));
        expect(getByTestId('compact-button-icon-container')).toHaveStyle({
            marginLeft: 12,
            marginRight: -8,
        });
    });
    ['outlined', 'contained', 'contained-tonal', 'elevated'].forEach((mode) => it(`should return correct icon styles for compact ${mode} button`, () => {
        const { getByTestId } = render(React.createElement(Button, { mode: mode, icon: "camera", testID: "compact-button" },
            mode,
            " button"));
        expect(getByTestId('compact-button-icon-container')).toHaveStyle({
            marginLeft: 16,
            marginRight: -16,
        });
    }));
});
describe('getButtonColors - background color', () => {
    const customButtonColor = '#111111';
    it('should return custom color no matter what is the theme version, when not disabled', () => {
        expect(getButtonColors({
            customButtonColor,
            theme: getTheme(),
            disabled: false,
            mode: 'text',
        })).toMatchObject({ backgroundColor: customButtonColor });
    });
    ['outlined', 'text'].forEach((mode) => it(`should return correct disabled color, for theme version 3, ${mode} mode`, () => {
        expect(getButtonColors({
            customButtonColor,
            theme: getTheme(),
            mode,
            disabled: true,
        })).toMatchObject({ backgroundColor: 'transparent' });
    }));
    ['outlined', 'text'].forEach((mode) => it(`should return correct disabled color, for theme version 3, dark theme, ${mode} mode`, () => {
        expect(getButtonColors({
            customButtonColor,
            theme: getTheme(),
            mode,
            disabled: true,
        })).toMatchObject({ backgroundColor: 'transparent' });
    }));
    ['contained', 'contained-tonal', 'elevated'].forEach((mode) => it(`should return correct disabled color, for theme version 3, ${mode} mode`, () => {
        return expect(getButtonColors({
            customButtonColor,
            theme: getTheme(),
            mode,
            disabled: true,
        })).toMatchObject({
            backgroundColor: getTheme().colors.surfaceDisabled,
        });
    }));
    ['contained', 'contained-tonal', 'elevated'].forEach((mode) => it(`should return correct disabled color, for theme version 3, dark theme, ${mode} mode`, () => {
        return expect(getButtonColors({
            customButtonColor,
            theme: getTheme(true),
            mode,
            disabled: true,
        })).toMatchObject({
            backgroundColor: getTheme(true).colors.surfaceDisabled,
        });
    }));
    it('should return correct theme color, for theme version 3, elevated mode', () => {
        expect(getButtonColors({
            theme: getTheme(),
            mode: 'elevated',
        })).toMatchObject({
            backgroundColor: getTheme().colors.elevation.level1,
        });
    });
    it('should return correct theme color, for theme version 3, dark theme, elevated mode', () => {
        expect(getButtonColors({
            theme: getTheme(true),
            mode: 'elevated',
        })).toMatchObject({
            backgroundColor: getTheme(true).colors.elevation.level1,
        });
    });
    it('should return correct theme color, for theme version 3, contained mode', () => {
        expect(getButtonColors({
            theme: getTheme(),
            mode: 'contained',
        })).toMatchObject({
            backgroundColor: getTheme().colors.primary,
        });
    });
    it('should return correct theme color, for theme version 3, dark theme, contained mode', () => {
        expect(getButtonColors({
            theme: getTheme(true),
            mode: 'contained',
        })).toMatchObject({
            backgroundColor: getTheme(true).colors.primary,
        });
    });
    it('should return correct theme color, for theme version 3, contained-tonal mode', () => {
        expect(getButtonColors({
            theme: getTheme(),
            mode: 'contained-tonal',
        })).toMatchObject({
            backgroundColor: getTheme().colors.secondaryContainer,
        });
    });
    it('should return correct theme color, for theme version 3, dark theme, contained-tonal mode', () => {
        expect(getButtonColors({
            theme: getTheme(true),
            mode: 'contained-tonal',
        })).toMatchObject({
            backgroundColor: getTheme(true).colors.secondaryContainer,
        });
    });
    ['text', 'outlined'].forEach((mode) => it(`should return transparent color, for theme version 3, ${mode} mode`, () => {
        return expect(getButtonColors({
            theme: getTheme(),
            mode,
        })).toMatchObject({
            backgroundColor: 'transparent',
        });
    }));
    ['text', 'outlined'].forEach((mode) => it(`should return transparent color, for theme version 3, dark theme, ${mode} mode`, () => {
        return expect(getButtonColors({
            theme: getTheme(true),
            mode,
        })).toMatchObject({
            backgroundColor: 'transparent',
        });
    }));
    it('should return correct theme color, for theme version 2, contained mode', () => {
        expect(getButtonColors({
            theme: getTheme(false, false),
            mode: 'contained',
        })).toMatchObject({
            backgroundColor: getTheme(false, false).colors.primary,
        });
    });
    it('should return correct theme color, for theme version 2, when disabled, contained mode', () => {
        expect(getButtonColors({
            theme: getTheme(false, false),
            mode: 'contained',
            disabled: true,
        })).toMatchObject({
            backgroundColor: color(black).alpha(0.12).rgb().string(),
        });
    });
    it('should return correct theme color, for theme version 2, when disabled, dark theme, contained mode', () => {
        expect(getButtonColors({
            theme: getTheme(true, false),
            mode: 'contained',
            disabled: true,
        })).toMatchObject({
            backgroundColor: color(white).alpha(0.12).rgb().string(),
        });
    });
    ['text', 'outlined'].forEach((mode) => it(`should return correct theme color, for theme version 2, ${mode} mode`, () => {
        expect(getButtonColors({
            theme: getTheme(false, false),
            mode,
        })).toMatchObject({
            backgroundColor: 'transparent',
        });
    }));
    ['text', 'outlined'].forEach((mode) => it(`should return correct theme color, for theme version 2, dark theme, ${mode} mode`, () => {
        expect(getButtonColors({
            theme: getTheme(true, false),
            mode,
        })).toMatchObject({
            backgroundColor: 'transparent',
        });
    }));
    ['text', 'outlined'].forEach((mode) => it(`should return correct theme color, for theme version 2, when disabled, ${mode} mode`, () => {
        expect(getButtonColors({
            theme: getTheme(false, false),
            mode,
            disabled: true,
        })).toMatchObject({
            backgroundColor: 'transparent',
        });
    }));
    ['text', 'outlined'].forEach((mode) => it(`should return correct theme color, for theme version 2, when disabled, dark theme, ${mode} mode`, () => {
        expect(getButtonColors({
            theme: getTheme(true, false),
            mode,
            disabled: true,
        })).toMatchObject({
            backgroundColor: 'transparent',
        });
    }));
});
describe('getButtonColors - text color', () => {
    const customTextColor = '#313131';
    it('should return custom text color no matter what is the theme version, when not disabled', () => {
        expect(getButtonColors({
            customTextColor,
            theme: getTheme(),
            disabled: false,
            mode: 'text',
        })).toMatchObject({ textColor: customTextColor });
    });
    it('should return correct disabled text color, for theme version 3, no matter what the mode is', () => {
        expect(getButtonColors({
            customTextColor,
            theme: getTheme(),
            disabled: true,
            mode: 'text',
        })).toMatchObject({
            textColor: getTheme().colors.onSurfaceDisabled,
        });
    });
    it('should return correct disabled text color, for theme version 3, dark theme, no matter what the mode is', () => {
        expect(getButtonColors({
            customTextColor,
            theme: getTheme(true),
            disabled: true,
            mode: 'text',
        })).toMatchObject({
            textColor: getTheme(true).colors.onSurfaceDisabled,
        });
    });
    ['contained', 'contained-tonal', 'elevated'].forEach((mode) => it(`should return correct text color for dark prop, for theme version 3, ${mode} mode`, () => {
        expect(getButtonColors({
            theme: getTheme(),
            mode,
            dark: true,
        })).toMatchObject({
            textColor: white,
        });
    }));
    ['outlined', 'text', 'elevated'].forEach((mode) => it(`should return correct theme text color, for theme version 3, ${mode} mode`, () => {
        expect(getButtonColors({
            theme: getTheme(),
            mode,
        })).toMatchObject({
            textColor: getTheme().colors.primary,
        });
    }));
    ['outlined', 'text', 'elevated'].forEach((mode) => it(`should return correct theme text color, for theme version 3, dark theme, ${mode} mode`, () => {
        expect(getButtonColors({
            theme: getTheme(true),
            mode,
        })).toMatchObject({
            textColor: getTheme(true).colors.primary,
        });
    }));
    it('should return correct theme text color, for theme version 3, contained mode', () => {
        expect(getButtonColors({
            theme: getTheme(),
            mode: 'contained',
        })).toMatchObject({
            textColor: getTheme().colors.onPrimary,
        });
    });
    it('should return correct theme text color, for theme version 3, dark theme, contained mode', () => {
        expect(getButtonColors({
            theme: getTheme(true),
            mode: 'contained',
        })).toMatchObject({
            textColor: getTheme(true).colors.onPrimary,
        });
    });
    it('should return correct theme text color, for theme version 3, contained-tonal mode', () => {
        expect(getButtonColors({
            theme: getTheme(),
            mode: 'contained-tonal',
        })).toMatchObject({
            textColor: getTheme().colors.onSecondaryContainer,
        });
    });
    it('should return correct theme text color, for theme version 3, dark theme contained-tonal mode', () => {
        expect(getButtonColors({
            theme: getTheme(true),
            mode: 'contained-tonal',
        })).toMatchObject({
            textColor: getTheme(true).colors.onSecondaryContainer,
        });
    });
    it('should return correct theme text color, for theme version 2, when disabled, no matter what the mode is', () => {
        expect(getButtonColors({
            theme: getTheme(false, false),
            disabled: true,
            mode: 'text',
        })).toMatchObject({
            textColor: color(black).alpha(0.32).rgb().string(),
        });
    });
    it('should return correct theme text color, for theme version 2, when disabled, dark theme, no matter what the mode is', () => {
        expect(getButtonColors({
            theme: getTheme(true, false),
            disabled: true,
            mode: 'text',
        })).toMatchObject({
            textColor: color(white).alpha(0.32).rgb().string(),
        });
    });
    it('should return correct theme text color, for theme version 2, contained mode', () => {
        expect(getButtonColors({
            theme: getTheme(false, false),
            mode: 'contained',
            dark: true,
        })).toMatchObject({
            textColor: '#ffffff',
        });
    });
    ['text', 'outlined'].forEach((mode) => it(`should return correct theme text color, for theme version 2, ${mode} mode`, () => {
        expect(getButtonColors({
            theme: getTheme(false, false),
            mode,
        })).toMatchObject({
            textColor: getTheme(false, false).colors.primary,
        });
    }));
    ['text', 'outlined'].forEach((mode) => it(`should return correct theme text color, for theme version 2, dark theme, ${mode} mode`, () => {
        expect(getButtonColors({
            theme: getTheme(true, false),
            mode,
        })).toMatchObject({
            textColor: getTheme(true, false).colors.primary,
        });
    }));
});
describe('getButtonColors - border color', () => {
    it('should return correct border color, for theme version 3, when disabled, outlined mode', () => {
        expect(getButtonColors({
            theme: getTheme(),
            disabled: true,
            mode: 'outlined',
        })).toMatchObject({
            borderColor: getTheme().colors.surfaceDisabled,
        });
    });
    it('should return correct border color, for theme version 3, when disabled, dark theme, outlined mode', () => {
        expect(getButtonColors({
            theme: getTheme(true),
            disabled: true,
            mode: 'outlined',
        })).toMatchObject({
            borderColor: getTheme(true).colors.surfaceDisabled,
        });
    });
    it('should return correct border color, for theme version 3, outlined mode', () => {
        expect(getButtonColors({
            theme: getTheme(),
            mode: 'outlined',
        })).toMatchObject({
            borderColor: getTheme().colors.outline,
        });
    });
    it('should return correct border color, for theme version 3, dark theme, outlined mode', () => {
        expect(getButtonColors({
            theme: getTheme(true),
            mode: 'outlined',
        })).toMatchObject({
            borderColor: getTheme(true).colors.outline,
        });
    });
    ['text', 'contained', 'contained-tonal', 'elevated'].forEach((mode) => it(`should return transparent border, for theme version 3, ${mode} mode`, () => {
        expect(getButtonColors({
            theme: getTheme(),
            mode,
        })).toMatchObject({
            borderColor: 'transparent',
        });
    }));
    ['text', 'contained', 'contained-tonal', 'elevated'].forEach((mode) => it(`should return transparent border, for theme version 3, dark theme, ${mode} mode`, () => {
        expect(getButtonColors({
            theme: getTheme(true),
            mode,
        })).toMatchObject({
            borderColor: 'transparent',
        });
    }));
    it('should return correct border color, for theme version 2, outlined mode', () => {
        expect(getButtonColors({
            theme: getTheme(false, false),
            mode: 'outlined',
        })).toMatchObject({
            borderColor: color(black).alpha(0.29).rgb().string(),
        });
    });
    it('should return correct border color, for theme version 2, dark theme, outlined mode', () => {
        expect(getButtonColors({
            theme: getTheme(true, false),
            mode: 'outlined',
        })).toMatchObject({
            borderColor: color(white).alpha(0.29).rgb().string(),
        });
    });
    ['text', 'contained', 'contained-tonal', 'elevated'].forEach((mode) => it(`should return transparent border, for theme version 2, ${mode} mode`, () => {
        expect(getButtonColors({
            theme: getTheme(false, false),
            mode,
        })).toMatchObject({
            borderColor: 'transparent',
        });
    }));
    ['text', 'contained', 'contained-tonal', 'elevated'].forEach((mode) => it(`should return transparent border, for theme version 2, dark theme, ${mode} mode`, () => {
        expect(getButtonColors({
            theme: getTheme(false, false),
            mode,
        })).toMatchObject({
            borderColor: 'transparent',
        });
    }));
});
describe('getButtonColors - border width', () => {
    it('should return correct border width, for theme version 3, outlined mode', () => {
        expect(getButtonColors({
            theme: getTheme(),
            mode: 'outlined',
        })).toMatchObject({
            borderWidth: 1,
        });
    });
    it('should return correct border width, for theme version 2, outlined mode', () => {
        expect(getButtonColors({
            theme: getTheme(false, false),
            mode: 'outlined',
        })).toMatchObject({
            borderWidth: StyleSheet.hairlineWidth,
        });
    });
    ['text', 'contained', 'contained-tonal', 'elevated'].forEach((mode) => it(`should return correct border width, for ${mode} mode`, () => {
        expect(getButtonColors({
            theme: getTheme(),
            mode,
        })).toMatchObject({
            borderWidth: 0,
        });
    }));
});
it('animated value changes correctly', () => {
    const value = new Animated.Value(1);
    const { getByTestId } = render(React.createElement(Button, { mode: "elevated", compact: true, icon: "camera", style: [{ transform: [{ scale: value }] }] }, "Compact button"));
    expect(getByTestId('button-container-outer-layer')).toHaveStyle({
        transform: [{ scale: 1 }],
    });
    Animated.timing(value, {
        toValue: 1.5,
        useNativeDriver: false,
        duration: 200,
    }).start();
    jest.advanceTimersByTime(200);
    expect(getByTestId('button-container-outer-layer')).toHaveStyle({
        transform: [{ scale: 1.5 }],
    });
});
