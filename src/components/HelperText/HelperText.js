import * as React from 'react';
import { Animated, StyleSheet, } from 'react-native';
import { useInternalTheme } from '../../core/theming';
import AnimatedText from '../Typography/AnimatedText';
import { getTextColor } from './utils';
/**
 * Helper text is used in conjuction with input elements to provide additional hints for the user.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { HelperText, TextInput } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [text, setText] = React.useState('');
 *
 *    const onChangeText = text => setText(text);
 *
 *   const hasErrors = () => {
 *     return !text.includes('@');
 *   };
 *
 *  return (
 *     <View>
 *       <TextInput label="Email" value={text} onChangeText={onChangeText} />
 *       <HelperText type="error" visible={hasErrors()}>
 *         Email address is invalid!
 *       </HelperText>
 *     </View>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const HelperText = ({ style, type = 'info', visible = true, theme: themeOverrides, onLayout, padding = 'normal', disabled, ...rest }) => {
    const theme = useInternalTheme(themeOverrides);
    const { current: shown } = React.useRef(new Animated.Value(visible ? 1 : 0));
    let { current: textHeight } = React.useRef(0);
    const { scale } = theme.animation;
    const { maxFontSizeMultiplier = 1.5 } = rest;
    React.useEffect(() => {
        if (visible) {
            // show text
            Animated.timing(shown, {
                toValue: 1,
                duration: 150 * scale,
                useNativeDriver: true,
            }).start();
        }
        else {
            // hide text
            Animated.timing(shown, {
                toValue: 0,
                duration: 180 * scale,
                useNativeDriver: true,
            }).start();
        }
    }, [visible, scale, shown]);
    const handleTextLayout = (e) => {
        onLayout?.(e);
        textHeight = e.nativeEvent.layout.height;
    };
    const textColor = getTextColor({ theme, disabled, type });
    return (React.createElement(AnimatedText, { onLayout: handleTextLayout, style: [
            styles.text,
            padding !== 'none' ? styles.padding : {},
            {
                color: textColor,
                opacity: shown,
                transform: visible && type === 'error'
                    ? [
                        {
                            translateY: shown.interpolate({
                                inputRange: [0, 1],
                                outputRange: [-textHeight / 2, 0],
                            }),
                        },
                    ]
                    : [],
            },
            style,
        ], maxFontSizeMultiplier: maxFontSizeMultiplier, ...rest }, rest.children));
};
const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        paddingVertical: 4,
    },
    padding: {
        paddingHorizontal: 12,
    },
});
export default HelperText;