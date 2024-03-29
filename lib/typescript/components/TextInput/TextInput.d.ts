import * as React from 'react';
import { StyleProp, TextInput as NativeTextInput, TextStyle, ViewStyle } from 'react-native';
import { Props as TextInputAffixProps } from './Adornment/TextInputAffix';
import { Props as TextInputIconProps } from './Adornment/TextInputIcon';
import type { RenderProps, TextInputLabelProp } from './types';
import type { InternalTheme } from '../../types';
export declare type Props = React.ComponentPropsWithRef<typeof NativeTextInput> & {
    /**
     * Mode of the TextInput.
     * - `flat` - flat input with an underline.
     * - `outlined` - input with an outline.
     *
     * In `outlined` mode, the background color of the label is derived from `colors?.background` in theme or the `backgroundColor` style.
     * This component render TextInputOutlined or TextInputFlat based on that props
     */
    mode?: 'flat' | 'outlined';
    left?: React.ReactNode;
    right?: React.ReactNode;
    /**
     * If true, user won't be able to interact with the component.
     */
    disabled?: boolean;
    /**
     * The text or component to use for the floating label.
     */
    label?: TextInputLabelProp;
    /**
     * Placeholder for the input.
     */
    placeholder?: string;
    /**
     * Whether to style the TextInput with error style.
     */
    error?: boolean;
    /**
     * Callback that is called when the text input's text changes. Changed text is passed as an argument to the callback handler.
     */
    onChangeText?: Function;
    /**
     * Selection color of the input.
     */
    selectionColor?: string;
    /**
     * Inactive underline color of the input.
     */
    underlineColor?: string;
    /**
     * Active underline color of the input.
     */
    activeUnderlineColor?: string;
    /**
     * Inactive outline color of the input.
     */
    outlineColor?: string;
    /**
     * Active outline color of the input.
     */
    activeOutlineColor?: string;
    /**
     * Color of the text in the input.
     */
    textColor?: string;
    /**
     * Sets min height with densed layout. For `TextInput` in `flat` mode
     * height is `64dp` or in dense layout - `52dp` with label or `40dp` without label.
     * For `TextInput` in `outlined` mode
     * height is `56dp` or in dense layout - `40dp` regardless of label.
     * When you apply `height` prop in style the `dense` prop affects only `paddingVertical` inside `TextInput`
     */
    dense?: boolean;
    /**
     * Whether the input can have multiple lines.
     */
    multiline?: boolean;
    /**
     * The number of lines to show in the input (Android only).
     */
    numberOfLines?: number;
    /**
     * Callback that is called when the text input is focused.
     */
    onFocus?: (args: any) => void;
    /**
     * Callback that is called when the text input is blurred.
     */
    onBlur?: (args: any) => void;
    /**
     *
     * Callback to render a custom input component such as `react-native-text-input-mask`
     * instead of the default `TextInput` component from `react-native`.
     *
     * Example:
     * ```js
     * <TextInput
     *   label="Phone number"
     *   render={props =>
     *     <TextInputMask
     *       {...props}
     *       mask="+[00] [000] [000] [000]"
     *     />
     *   }
     * />
     * ```
     */
    render?: (props: RenderProps) => React.ReactNode;
    /**
     * Value of the text input.
     */
    value?: string;
    /**
     * Pass `fontSize` prop to modify the font size inside `TextInput`.
     * Pass `height` prop to set `TextInput` height. When `height` is passed,
     * `dense` prop will affect only input's `paddingVertical`.
     * Pass `paddingHorizontal` to modify horizontal padding.
     * This can be used to get MD Guidelines v1 TextInput look.
     */
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * testID to be used on tests.
     */
    testID?: string;
    /**
     * Pass custom style directly to the input itself.
     * Overrides input style
     * Example: `paddingLeft`, `backgroundColor`
     */
    contentStyle?: StyleProp<ViewStyle>;
    /**
     * Pass style to override the default style of outlined wrapper.
     * Overrides style when mode is set to `outlined`
     * Example: `borderRadius`, `borderColor`
     */
    outlineStyle?: StyleProp<ViewStyle>;
    /**
     * Pass style to override the default style of underlined wrapper.
     * Overrides style when mode is set to `flat`
     * Example: `borderRadius`, `borderColor`
     */
    underlineStyle?: StyleProp<ViewStyle>;
};
interface CompoundedComponent extends React.ForwardRefExoticComponent<Props & React.RefAttributes<TextInputHandles>> {
    Icon: React.FunctionComponent<TextInputIconProps>;
    Affix: React.FunctionComponent<Partial<TextInputAffixProps>>;
}
declare type TextInputHandles = Pick<NativeTextInput, 'focus' | 'clear' | 'blur' | 'isFocused' | 'setNativeProps'>;
declare const _default: React.ComponentType<Pick<import("react-native").TextInputProps & React.RefAttributes<NativeTextInput> & {
    /**
     * Mode of the TextInput.
     * - `flat` - flat input with an underline.
     * - `outlined` - input with an outline.
     *
     * In `outlined` mode, the background color of the label is derived from `colors?.background` in theme or the `backgroundColor` style.
     * This component render TextInputOutlined or TextInputFlat based on that props
     */
    mode?: "flat" | "outlined" | undefined;
    left?: React.ReactNode;
    right?: React.ReactNode;
    /**
     * If true, user won't be able to interact with the component.
     */
    disabled?: boolean | undefined;
    /**
     * The text or component to use for the floating label.
     */
    label?: TextInputLabelProp | undefined;
    /**
     * Placeholder for the input.
     */
    placeholder?: string | undefined;
    /**
     * Whether to style the TextInput with error style.
     */
    error?: boolean | undefined;
    /**
     * Callback that is called when the text input's text changes. Changed text is passed as an argument to the callback handler.
     */
    onChangeText?: Function | undefined;
    /**
     * Selection color of the input.
     */
    selectionColor?: string | undefined;
    /**
     * Inactive underline color of the input.
     */
    underlineColor?: string | undefined;
    /**
     * Active underline color of the input.
     */
    activeUnderlineColor?: string | undefined;
    /**
     * Inactive outline color of the input.
     */
    outlineColor?: string | undefined;
    /**
     * Active outline color of the input.
     */
    activeOutlineColor?: string | undefined;
    /**
     * Color of the text in the input.
     */
    textColor?: string | undefined;
    /**
     * Sets min height with densed layout. For `TextInput` in `flat` mode
     * height is `64dp` or in dense layout - `52dp` with label or `40dp` without label.
     * For `TextInput` in `outlined` mode
     * height is `56dp` or in dense layout - `40dp` regardless of label.
     * When you apply `height` prop in style the `dense` prop affects only `paddingVertical` inside `TextInput`
     */
    dense?: boolean | undefined;
    /**
     * Whether the input can have multiple lines.
     */
    multiline?: boolean | undefined;
    /**
     * The number of lines to show in the input (Android only).
     */
    numberOfLines?: number | undefined;
    /**
     * Callback that is called when the text input is focused.
     */
    onFocus?: ((args: any) => void) | undefined;
    /**
     * Callback that is called when the text input is blurred.
     */
    onBlur?: ((args: any) => void) | undefined;
    /**
     *
     * Callback to render a custom input component such as `react-native-text-input-mask`
     * instead of the default `TextInput` component from `react-native`.
     *
     * Example:
     * ```js
     * <TextInput
     *   label="Phone number"
     *   render={props =>
     *     <TextInputMask
     *       {...props}
     *       mask="+[00] [000] [000] [000]"
     *     />
     *   }
     * />
     * ```
     */
    render?: ((props: RenderProps) => React.ReactNode) | undefined;
    /**
     * Value of the text input.
     */
    value?: string | undefined;
    /**
     * Pass `fontSize` prop to modify the font size inside `TextInput`.
     * Pass `height` prop to set `TextInput` height. When `height` is passed,
     * `dense` prop will affect only input's `paddingVertical`.
     * Pass `paddingHorizontal` to modify horizontal padding.
     * This can be used to get MD Guidelines v1 TextInput look.
     */
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * testID to be used on tests.
     */
    testID?: string | undefined;
    /**
     * Pass custom style directly to the input itself.
     * Overrides input style
     * Example: `paddingLeft`, `backgroundColor`
     */
    contentStyle?: StyleProp<ViewStyle>;
    /**
     * Pass style to override the default style of outlined wrapper.
     * Overrides style when mode is set to `outlined`
     * Example: `borderRadius`, `borderColor`
     */
    outlineStyle?: StyleProp<ViewStyle>;
    /**
     * Pass style to override the default style of underlined wrapper.
     * Overrides style when mode is set to `flat`
     * Example: `borderRadius`, `borderColor`
     */
    underlineStyle?: StyleProp<ViewStyle>;
} & React.RefAttributes<TextInputHandles>, "label" | "style" | "children" | "testID" | "left" | "right" | "ref" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLabelledBy" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityLanguage" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "numberOfLines" | "onPressIn" | "onPressOut" | "maxFontSizeMultiplier" | "disabled" | "selectionColor" | "textBreakStrategy" | "key" | "value" | "mode" | "error" | "placeholder" | "textAlign" | "onFocus" | "onBlur" | "onChange" | "onKeyPress" | "onScroll" | "defaultValue" | "spellCheck" | "autoCapitalize" | "autoCorrect" | "autoFocus" | "autoComplete" | "maxLength" | "textAlignVertical" | "multiline" | "textColor" | "contentStyle" | "onContentSizeChange" | "scrollEnabled" | "dense" | "render" | "blurOnSubmit" | "caretHidden" | "contextMenuHidden" | "editable" | "keyboardType" | "onChangeText" | "onEndEditing" | "onSelectionChange" | "onSubmitEditing" | "onTextInput" | "placeholderTextColor" | "returnKeyType" | "secureTextEntry" | "selectTextOnFocus" | "selection" | "inputAccessoryViewID" | "clearButtonMode" | "clearTextOnFocus" | "dataDetectorTypes" | "enablesReturnKeyAutomatically" | "keyboardAppearance" | "passwordRules" | "rejectResponderTermination" | "selectionState" | "textContentType" | "cursorColor" | "importantForAutofill" | "disableFullscreenUI" | "inlineImageLeft" | "inlineImagePadding" | "returnKeyLabel" | "underlineColorAndroid" | "showSoftInputOnFocus" | "underlineColor" | "activeUnderlineColor" | "outlineColor" | "activeOutlineColor" | "outlineStyle" | "underlineStyle"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<import("react-native").TextInputProps & React.RefAttributes<NativeTextInput> & {
    /**
     * Mode of the TextInput.
     * - `flat` - flat input with an underline.
     * - `outlined` - input with an outline.
     *
     * In `outlined` mode, the background color of the label is derived from `colors?.background` in theme or the `backgroundColor` style.
     * This component render TextInputOutlined or TextInputFlat based on that props
     */
    mode?: "flat" | "outlined" | undefined;
    left?: React.ReactNode;
    right?: React.ReactNode;
    /**
     * If true, user won't be able to interact with the component.
     */
    disabled?: boolean | undefined;
    /**
     * The text or component to use for the floating label.
     */
    label?: TextInputLabelProp | undefined;
    /**
     * Placeholder for the input.
     */
    placeholder?: string | undefined;
    /**
     * Whether to style the TextInput with error style.
     */
    error?: boolean | undefined;
    /**
     * Callback that is called when the text input's text changes. Changed text is passed as an argument to the callback handler.
     */
    onChangeText?: Function | undefined;
    /**
     * Selection color of the input.
     */
    selectionColor?: string | undefined;
    /**
     * Inactive underline color of the input.
     */
    underlineColor?: string | undefined;
    /**
     * Active underline color of the input.
     */
    activeUnderlineColor?: string | undefined;
    /**
     * Inactive outline color of the input.
     */
    outlineColor?: string | undefined;
    /**
     * Active outline color of the input.
     */
    activeOutlineColor?: string | undefined;
    /**
     * Color of the text in the input.
     */
    textColor?: string | undefined;
    /**
     * Sets min height with densed layout. For `TextInput` in `flat` mode
     * height is `64dp` or in dense layout - `52dp` with label or `40dp` without label.
     * For `TextInput` in `outlined` mode
     * height is `56dp` or in dense layout - `40dp` regardless of label.
     * When you apply `height` prop in style the `dense` prop affects only `paddingVertical` inside `TextInput`
     */
    dense?: boolean | undefined;
    /**
     * Whether the input can have multiple lines.
     */
    multiline?: boolean | undefined;
    /**
     * The number of lines to show in the input (Android only).
     */
    numberOfLines?: number | undefined;
    /**
     * Callback that is called when the text input is focused.
     */
    onFocus?: ((args: any) => void) | undefined;
    /**
     * Callback that is called when the text input is blurred.
     */
    onBlur?: ((args: any) => void) | undefined;
    /**
     *
     * Callback to render a custom input component such as `react-native-text-input-mask`
     * instead of the default `TextInput` component from `react-native`.
     *
     * Example:
     * ```js
     * <TextInput
     *   label="Phone number"
     *   render={props =>
     *     <TextInputMask
     *       {...props}
     *       mask="+[00] [000] [000] [000]"
     *     />
     *   }
     * />
     * ```
     */
    render?: ((props: RenderProps) => React.ReactNode) | undefined;
    /**
     * Value of the text input.
     */
    value?: string | undefined;
    /**
     * Pass `fontSize` prop to modify the font size inside `TextInput`.
     * Pass `height` prop to set `TextInput` height. When `height` is passed,
     * `dense` prop will affect only input's `paddingVertical`.
     * Pass `paddingHorizontal` to modify horizontal padding.
     * This can be used to get MD Guidelines v1 TextInput look.
     */
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * testID to be used on tests.
     */
    testID?: string | undefined;
    /**
     * Pass custom style directly to the input itself.
     * Overrides input style
     * Example: `paddingLeft`, `backgroundColor`
     */
    contentStyle?: StyleProp<ViewStyle>;
    /**
     * Pass style to override the default style of outlined wrapper.
     * Overrides style when mode is set to `outlined`
     * Example: `borderRadius`, `borderColor`
     */
    outlineStyle?: StyleProp<ViewStyle>;
    /**
     * Pass style to override the default style of underlined wrapper.
     * Overrides style when mode is set to `flat`
     * Example: `borderRadius`, `borderColor`
     */
    underlineStyle?: StyleProp<ViewStyle>;
} & React.RefAttributes<TextInputHandles>> & CompoundedComponent, {}>;
export default _default;
