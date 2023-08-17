export const handlePress = ({ onPress, value, onValueChange, event, }) => {
    if (onPress && onValueChange) {
        console.warn(`onPress in the scope of RadioButtonGroup will not be executed, use onValueChange instead`);
    }
    onValueChange ? onValueChange(value) : onPress?.(event);
};
export const isChecked = ({ value, status, contextValue, }) => {
    if (contextValue !== undefined && contextValue !== null) {
        return contextValue === value ? 'checked' : 'unchecked';
    }
    else {
        return status;
    }
};
