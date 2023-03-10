import * as React from 'react';
import { GestureResponderEvent } from 'react-native';
import type { InternalTheme } from '../../types';
export declare type Props = {
    /**
     * Value of the radio button
     */
    value: string;
    /**
     * Status of radio button.
     */
    status?: 'checked' | 'unchecked';
    /**
     * Whether radio is disabled.
     */
    disabled?: boolean;
    /**
     * Function to execute on press.
     */
    onPress?: (e: GestureResponderEvent) => void;
    /**
     * Custom color for unchecked radio.
     */
    uncheckedColor?: string;
    /**
     * Custom color for radio.
     */
    color?: string;
    /**
     * @optional
     */
    theme: InternalTheme;
    /**
     * testID to be used on tests.
     */
    testID?: string;
};
declare const _default: React.ComponentType<Pick<Props, "testID" | "color" | "onPress" | "disabled" | "value" | "status" | "uncheckedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<React.ComponentType<Props> & ((props: Props) => JSX.Element), {}>;
export default _default;
