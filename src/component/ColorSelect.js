import React, { useRef } from "react";
import { View, ImageBackground, StyleSheet, PanResponder } from "react-native";

import colorSelectImage from '../images/color_wheel.png'

export default function ColorSelect({
    style
}) {
    

    const panResponder = useRef(
        PanResponder.create({
            // 是否消费down事件
            onStartShouldSetPanResponder: () => true,
            onStartShouldSetPanResponderCapture: () => true,
            onMoveShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderTerminationRequest: () => true,
            onShouldBlockNativeResponder: () => true,
            onPanResponderGrant: (evt, gestureState) => {
                // Down 事件
            },
            onPanResponderMove: (evt, gestureState) => {
                // Move 事件
            },
            onPanResponderRelease: (evt, gestureState) => {
                // Up 事件
            },
            onPanResponderTerminate: (evt, gestureState) => {
                // Cancel 事件
            },
        })
    ).current;

    return (
        <ImageBackground
            style={[defStyle.root, style]}
            resizeMode="center"
            source={colorSelectImage}>
            <View style={defStyle.indicator} {...panResponder.panHandlers} />
        </ImageBackground>
    );
}

const defStyle = StyleSheet.create({
    root: {

    },
    indicator: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'green'
    }
});