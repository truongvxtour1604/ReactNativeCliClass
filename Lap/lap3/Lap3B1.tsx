import React, { useCallback } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

export default function Lap3B1() {
    const translateY = useSharedValue<number>(0);

    const handlePressUp = useCallback(() => {
        const randomY = Math.random() * 400 - 200;
        translateY.value = withSpring(randomY);
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }]
    }));

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.box,
                    animatedStyle,
                ]}
            />
            <TouchableOpacity onPress={handlePressUp}>
                <Text style={{ fontSize: 16, marginTop: 10 }}>Move</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: "#000",
    },
});