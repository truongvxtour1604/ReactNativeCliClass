import React, { memo } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { UserType } from "./Lap2";

type HeaderType = {
    user: UserType;
};

export const Header = memo(({ user }: HeaderType) => {
    console.log("re-render header");

    return (
        <View style={[styles.container, { height: 100, backgroundColor: "white", padding: 10, flexDirection: "row", alignItems: "center" }]}>
            <Image
                style={{ width: 80, height: 80 }}
                source={{ uri: user?.avatar || "https://example.com/default-avatar.png" }}
            />
            <View style={{ marginLeft: 10 }}>
                <Text>Hello new day</Text>
                <Text>{user.name}</Text>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 20,
        marginTop: 40,
    },
});
