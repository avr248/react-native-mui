import * as React from 'react';
import { GestureResponderEvent, StyleProp, TextStyle, ViewProps, ViewStyle } from 'react-native';
import type { InternalTheme } from '../../types';
export declare type Props = {
    /**
     * Title text for the list accordion.
     */
    title: React.ReactNode;
    /**
     * Description text for the list accordion.
     */
    description?: React.ReactNode;
    /**
     * Callback which returns a React element to display on the left side.
     */
    left?: (props: {
        color: string;
    }) => React.ReactNode;
    /**
     * Callback which returns a React element to display on the right side.
     */
    right?: (props: {
        isExpanded: boolean;
    }) => React.ReactNode;
    /**
     * Whether the accordion is expanded
     * If this prop is provided, the accordion will behave as a "controlled component".
     * You'll need to update this prop when you want to toggle the component or on `onPress`.
     */
    expanded?: boolean;
    /**
     * Function to execute on press.
     */
    onPress?: (e: GestureResponderEvent) => void;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (e: GestureResponderEvent) => void;
    /**
     * The number of milliseconds a user must touch the element before executing `onLongPress`.
     */
    delayLongPress?: number;
    /**
     * Content of the section.
     */
    children: React.ReactNode;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * Style that is passed to the wrapping TouchableRipple element.
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Style that is passed to Title element.
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * Style that is passed to Description element.
     */
    descriptionStyle?: StyleProp<TextStyle>;
    /**
     * Truncate Title text such that the total number of lines does not
     * exceed this number.
     */
    titleNumberOfLines?: number;
    /**
     * Truncate Description text such that the total number of lines does not
     * exceed this number.
     */
    descriptionNumberOfLines?: number;
    /**
     * Id is used for distinguishing specific accordion when using List.AccordionGroup. Property is required when using List.AccordionGroup and has no impact on behavior when using standalone List.Accordion.
     */
    id?: string | number;
    /**
     * TestID used for testing purposes
     */
    testID?: string;
    /**
     * Accessibility label for the TouchableRipple. This is read by the screen reader when the user taps the touchable.
     */
    accessibilityLabel?: string;
    /**
     * `pointerEvents` passed to the `View` container
     */
    pointerEvents?: ViewProps['pointerEvents'];
};
declare const _default: React.ComponentType<Pick<Props, "style" | "title" | "children" | "testID" | "left" | "right" | "pointerEvents" | "accessibilityLabel" | "onPress" | "onLongPress" | "id" | "delayLongPress" | "description" | "expanded" | "titleStyle" | "descriptionStyle" | "titleNumberOfLines" | "descriptionNumberOfLines"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & {
    ({ left, right, title, description, children, theme, titleStyle, descriptionStyle, titleNumberOfLines, descriptionNumberOfLines, style, id, testID, onPress, onLongPress, delayLongPress, expanded: expandedProp, accessibilityLabel, pointerEvents, }: Props): JSX.Element;
    displayName: string;
}, {}>;
export default _default;
