/// <reference types="react" />
declare const ToggleButton: (import("react").ComponentType<Pick<Pick<import("./ToggleButton").Props, "style" | "theme" | "accessibilityLabel" | "color" | "size" | "onPress" | "disabled" | "icon" | "value" | "status"> & import("react").RefAttributes<import("react-native").View>, "style" | "accessibilityLabel" | "color" | "size" | "onPress" | "disabled" | "icon" | "value" | "status" | keyof import("react").RefAttributes<import("react-native").View>> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<import("react").ComponentType<Pick<import("./ToggleButton").Props, "style" | "theme" | "accessibilityLabel" | "color" | "size" | "onPress" | "disabled" | "icon" | "value" | "status"> & import("react").RefAttributes<import("react-native").View>> & import("react").ForwardRefExoticComponent<Pick<import("./ToggleButton").Props, "style" | "theme" | "accessibilityLabel" | "color" | "size" | "onPress" | "disabled" | "icon" | "value" | "status"> & import("react").RefAttributes<import("react-native").View>>, {}>) & {
    Group: {
        <Value = string>({ value, onValueChange, children, }: import("./ToggleButtonGroup").Props<Value>): JSX.Element;
        displayName: string;
    };
    Row: {
        ({ value, onValueChange, children, style }: import("./ToggleButtonRow").Props): JSX.Element;
        displayName: string;
    };
};
export default ToggleButton;
