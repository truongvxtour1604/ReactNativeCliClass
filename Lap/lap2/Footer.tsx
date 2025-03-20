import React, { FC, memo } from "react";
import { View, StyleSheet, Text } from "react-native";

type FooterType = {
    timeUpdate: string;
    backgroundColor: string;
};

export const Footer: FC<FooterType> = memo(({ timeUpdate, backgroundColor }) => {
    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Text>Thời gian cập nhật thông tin: {timeUpdate}</Text>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        marginTop: 40,
        height: 100,
    },
});
