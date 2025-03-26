import React, { useEffect } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import TrackPlayer, { usePlaybackState, Capability, State } from "react-native-track-player";

export default function Lap4B3() {

    return (
        <View style={styles.container}>
            <Text>Lap4B3</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
