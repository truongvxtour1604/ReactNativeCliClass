import React, { useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

export default function Bai2() {
    const width = useSharedValue(100);
    const height = useSharedValue(100);

    const handlePressZoomIn = useCallback(() => {
        width.value = withSpring(width.value + 10);
        height.value = withSpring(height.value + 10);
    }, []);

    const handlePressZoomOut = useCallback(() => {
        width.value = withSpring(width.value - 10);
        height.value = withSpring(height.value - 10);
    }, []);


    const translateX = useSharedValue<number>(0);

    const handlePressTurnLeft = useCallback(() => {
        translateX.value -= 10;
    }, []);

    const handlePressTurnRight = useCallback(() => {
        translateX.value += 10;
    }, []);

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: withSpring(translateX.value * 2) }]
    }));

    const translateY = useSharedValue<number>(0);

    const handlePressUp = useCallback(() => {
        translateY.value -= 10;
    }, []);

    const handlePressDown = useCallback(() => {
        translateY.value += 10;
    }, []);

    const animatedStyles2 = useAnimatedStyle(() => ({
        transform: [{ translateY: withSpring(translateY.value * 2) }]
    }));

    return (
        <View style={styles.container}>
            <Animated.View
                style={{
                    width,
                    height,
                    backgroundColor: "black",
                }}
            />
            <TouchableOpacity onPress={handlePressZoomIn}>
                <Text style={styles.sizeText}>Zoom in</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePressZoomOut}>
                <Text style={styles.sizeText}>Zoom out</Text>
            </TouchableOpacity>

            <Animated.View
                style={[
                    styles.box,
                    animatedStyles,
                ]}
            />
            <TouchableOpacity onPress={handlePressTurnRight}>
                <Text style={styles.sizeText}>Turn right</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePressTurnLeft}>
                <Text style={styles.sizeText}>Turn left</Text>
            </TouchableOpacity>

            <Animated.View
                style={[
                    styles.box,
                    animatedStyles2,
                ]}
            />
            <TouchableOpacity onPress={handlePressUp}>
                <Text style={styles.sizeText}>Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePressDown}>
                <Text style={styles.sizeText}>Down</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    sizeText: {
        fontSize: 16,
        marginTop: 10
    },
    box: {
        width: 100,
        height: 100,
        marginTop: 10,
        backgroundColor: "black"
    }
});