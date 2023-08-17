import * as React from 'react';
import { StyleSheet, Text as NativeText, } from 'react-native';
import { useInternalTheme } from '../../../core/theming';
import { forwardRef } from '../../../utils/forwardRef';
// @component-group Typography
/**
 * Text component which follows styles from the theme.
 *
 * @extends Text props https://reactnative.dev/docs/text#props
 */
const Text = ({ style, theme: overrideTheme, ...rest }, ref) => {
    const root = React.useRef(null);
    const theme = useInternalTheme(overrideTheme);
    React.useImperativeHandle(ref, () => ({
        setNativeProps: (args) => root.current?.setNativeProps(args),
    }));
    return (React.createElement(NativeText, { ...rest, ref: root, style: [
            {
                ...(!theme.isV3 && theme.fonts?.regular),
                color: theme.isV3 ? theme.colors?.onSurface : theme.colors.text,
            },
            styles.text,
            style,
        ] }));
};
const styles = StyleSheet.create({
    text: {
        textAlign: 'left',
    },
});
export default forwardRef(Text);
