import * as React from 'react';
import { Animated, StyleSheet } from 'react-native';
import AnimatedText from '../../Typography/AnimatedText';
const LabelBackground = ({ labeled, labelLayoutWidth, placeholderStyle, baseLabelTranslateX, topPosition, label, backgroundColor, roundness, labelStyle, maxFontSizeMultiplier, testID, }) => {
    const opacity = labeled.interpolate({
        inputRange: [0, 0.6],
        outputRange: [1, 0],
    });
    const labelTranslationX = {
        translateX: labeled.interpolate({
            inputRange: [0, 1],
            outputRange: [-baseLabelTranslateX, 0],
        }),
    };
    const labelTextScaleY = {
        scaleY: labeled.interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
        }),
    };
    const labelTextTransform = [...labelStyle.transform, labelTextScaleY];
    const isRounded = roundness > 6;
    const roundedEdgeCover = isRounded ? (React.createElement(Animated.View, { key: "labelBackground-view", pointerEvents: "none", style: [
            StyleSheet.absoluteFill,
            styles.view,
            {
                backgroundColor,
                maxHeight: Math.max(roundness / 3, 2),
                bottom: Math.max(roundness, 2),
                transform: [labelTranslationX],
                opacity,
            },
        ] })) : null;
    return [
        roundedEdgeCover,
        React.createElement(AnimatedText, { key: "labelBackground-text", testID: `${testID}-label-background`, style: [
                placeholderStyle,
                labelStyle,
                styles.outlinedLabel,
                {
                    top: topPosition + 1,
                    width: labelLayoutWidth - placeholderStyle.paddingHorizontal,
                    backgroundColor,
                    opacity,
                    transform: labelTextTransform,
                },
            ], numberOfLines: 1, maxFontSizeMultiplier: maxFontSizeMultiplier }, label),
    ];
};
export default LabelBackground;
const styles = StyleSheet.create({
    view: {
        position: 'absolute',
        top: 6,
        left: 10,
        width: 12,
    },
    // eslint-disable-next-line react-native/no-color-literals
    outlinedLabel: {
        position: 'absolute',
        left: 8,
        paddingHorizontal: 0,
        color: 'transparent',
    },
});