import * as React from 'react';
import { StyleSheet } from 'react-native';
import StyledText from './StyledText';
// @component-group Typography
/**
 * Typography component for showing a caption.
 *
 * <div class="screenshots">
 *   <img src="screenshots/caption.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Caption } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Caption>Caption</Caption>
 * );
 *
 * export default MyComponent;
 * ```
 */
const Caption = (props) => (React.createElement(StyledText, { ...props, alpha: 0.54, family: "regular", style: [styles.text, props.style] }));
export default Caption;
const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        lineHeight: 20,
        marginVertical: 2,
        letterSpacing: 0.4,
    },
});