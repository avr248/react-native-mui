import * as React from 'react';
import { Dimensions, View, StyleSheet, Platform, Pressable, } from 'react-native';
import { useInternalTheme } from '../../core/theming';
import { addEventListener } from '../../utils/addEventListener';
import Portal from '../Portal/Portal';
import Text from '../Typography/Text';
import { getTooltipPosition } from './utils';
/**
 * Tooltips display informative text when users hover over, focus on, or tap an element.
 *
 * Plain tooltips, when activated, display a text label identifying an element, such as a description of its function. Tooltips should include only short, descriptive text and avoid restating visible UI text.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { IconButton, Tooltip } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Tooltip title="Selected Camera">
 *     <IconButton icon="camera" selected size={24} onPress={() => {}} />
 *   </Tooltip>
 * );
 *
 * export default MyComponent;
 * ```
 */
const Tooltip = ({ children, enterTouchDelay = 500, leaveTouchDelay = 1500, title, theme: themeOverrides, ...rest }) => {
    const isWeb = Platform.OS === 'web';
    const theme = useInternalTheme(themeOverrides);
    const [visible, setVisible] = React.useState(false);
    const [measurement, setMeasurement] = React.useState({
        children: {},
        tooltip: {},
        measured: false,
    });
    const showTooltipTimer = React.useRef();
    const hideTooltipTimer = React.useRef();
    const childrenWrapperRef = React.useRef();
    const touched = React.useRef(false);
    React.useEffect(() => {
        return () => {
            if (showTooltipTimer.current) {
                clearTimeout(showTooltipTimer.current);
            }
            if (hideTooltipTimer.current) {
                clearTimeout(hideTooltipTimer.current);
            }
        };
    }, []);
    React.useEffect(() => {
        const subscription = addEventListener(Dimensions, 'change', () => setVisible(false));
        return () => subscription.remove();
    }, []);
    const handleOnLayout = ({ nativeEvent: { layout } }) => {
        childrenWrapperRef.current.measure((_x, _y, width, height, pageX, pageY) => {
            setMeasurement({
                children: { pageX, pageY, height, width },
                tooltip: { ...layout },
                measured: true,
            });
        });
    };
    const handleTouchStart = () => {
        if (hideTooltipTimer.current) {
            clearTimeout(hideTooltipTimer.current);
        }
        if (isWeb) {
            showTooltipTimer.current = setTimeout(() => {
                touched.current = true;
                setVisible(true);
            }, enterTouchDelay);
        }
        else {
            touched.current = true;
            setVisible(true);
        }
    };
    const handleTouchEnd = () => {
        touched.current = false;
        if (showTooltipTimer.current) {
            clearTimeout(showTooltipTimer.current);
        }
        hideTooltipTimer.current = setTimeout(() => {
            setVisible(false);
            setMeasurement({ children: {}, tooltip: {}, measured: false });
        }, leaveTouchDelay);
    };
    const mobilePressProps = {
        onPress: React.useCallback(() => {
            if (touched.current) {
                return null;
            }
            else {
                return children.props.onPress?.();
            }
        }, [children.props]),
        onLongPress: () => handleTouchStart(),
        onPressOut: () => handleTouchEnd(),
        delayLongPress: enterTouchDelay,
    };
    const webPressProps = {
        onHoverIn: () => {
            handleTouchStart();
            children.props.onHoverIn?.();
        },
        onHoverOut: () => {
            handleTouchEnd();
            children.props.onHoverOut?.();
        },
    };
    return (React.createElement(React.Fragment, null,
        visible && (React.createElement(Portal, null,
            React.createElement(View, { onLayout: handleOnLayout, style: [
                    styles.tooltip,
                    {
                        backgroundColor: theme.isV3
                            ? theme.colors.onSurface
                            : theme.colors.tooltip,
                        ...getTooltipPosition(measurement, children),
                        borderRadius: theme.roundness,
                        ...(measurement.measured ? styles.visible : styles.hidden),
                    },
                ], testID: "tooltip-container" },
                React.createElement(Text, { accessibilityLiveRegion: "polite", numberOfLines: 1, selectable: false, variant: "labelLarge", style: { color: theme.colors.surface } }, title)))),
        React.createElement(Pressable, { ref: childrenWrapperRef, style: styles.pressContainer, ...(isWeb ? webPressProps : mobilePressProps) }, React.cloneElement(children, {
            ...rest,
            ...(isWeb ? webPressProps : mobilePressProps),
        }))));
};
const styles = StyleSheet.create({
    tooltip: {
        alignSelf: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 16,
        height: 32,
        maxHeight: 32,
    },
    visible: {
        opacity: 1,
    },
    hidden: {
        opacity: 0,
    },
    pressContainer: {
        ...(Platform.OS === 'web' && { cursor: 'default' }),
    },
});
export default Tooltip;
