import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Bai1() {
    return (
        <View style={styles.container}>
            <Text>Bai1</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
    },
});
