import { useReactive } from "ahooks";
import React, { useRef } from "react";
import { View, ImageBackground, StyleSheet, PanResponder } from "react-native";

import colorSelectImage from '../images/color_wheel.png'

export default function ColorSelect({
    style = defStyle.root,
    indicatorStyle = defStyle.indicator
}) {
    const radius = style.width / 2;
    const indicatorRadius = indicatorStyle.width / 2;
    const state = useReactive({
        radius,
        indicatorPosition: {
            x: radius - indicatorRadius,
            y: radius - indicatorRadius,
        }
    });

    const panResponder = useRef(
        PanResponder.create({
            // 是否消费down事件
            onStartShouldSetPanResponder: () => true,
            onStartShouldSetPanResponderCapture: () => true,
            onMoveShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderTerminationRequest: () => true,
            onShouldBlockNativeResponder: () => true,
            onPanResponderGrant: (event, gestureState) => {
                // Down 事件
                console.log(event.nativeEvent.locationX, event.nativeEvent.locationY);
                state.indicatorPosition = {
                    x: event.nativeEvent.locationX - indicatorRadius,
                    y: event.nativeEvent.locationY - indicatorRadius
                }
            },
            onPanResponderMove: (event, gestureState) => {
                // Move 事件
                console.log(event.nativeEvent.locationX, event.nativeEvent.locationY);
                state.indicatorPosition = {
                    x: event.nativeEvent.locationX - indicatorRadius,
                    y: event.nativeEvent.locationY - indicatorRadius
                }
            },
            onPanResponderRelease: (event, gestureState) => {
                // Up 事件
            },
            onPanResponderTerminate: (event, gestureState) => {
                // Cancel 事件
            },
        })
    ).current;

    return (
        <ImageBackground
            style={style}
            resizeMode="center"
            source={colorSelectImage}
            {...panResponder.panHandlers}>
            <View style={{ ...indicatorStyle, marginStart: state.indicatorPosition.x, marginTop: state.indicatorPosition.y }} />
        </ImageBackground>
    );
}

const defStyle = StyleSheet.create({
    root: {
        width: 170,
        height: 170
    },
    indicator: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'green'
    }
});