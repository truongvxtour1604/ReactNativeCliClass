import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    interpolate,
    useAnimatedScrollHandler,
    withSpring
} from "react-native-reanimated";

const USER_INFO = {
    name: "Vũ Xuân Trường",
    email: "truongvxph51260.com",
    phone: "0971919569",
    address: "Bắc từ liêm - Hà Nội",
};

const DATA = Array.from({ length: 20 }).map((_, index) => ({ id: index.toString(), title: `Danh sách ${index + 1}` }));

export default function Lap3B3() {
    const scrollY = useSharedValue(0);

    const onScroll = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollY.value = event.contentOffset.y;
        },
    });

    const animatedHeaderStyle = useAnimatedStyle(() => {
        return {
            height: interpolate(scrollY.value, [0, 150], [250, 80], "clamp"),
            opacity: withTiming(interpolate(scrollY.value, [0, 150], [1, 0.8], "clamp")),
        };
    });

    const animatedAvatarStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { scale: withSpring(interpolate(scrollY.value, [0, 150], [1, 0.6], "clamp")) },
            ],
            opacity: withTiming(interpolate(scrollY.value, [0, 150], [1, 0], "clamp")),
        };
    });

    const animatedInfoStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(interpolate(scrollY.value, [0, 150], [1, 0], "clamp")),
            transform: [{ translateY: interpolate(scrollY.value, [0, 150], [0, -20], "clamp") }],
        };
    });

    return (
        <View style={styles.container}>
            {/* Header Animated */}
            <Animated.View style={[styles.header, animatedHeaderStyle]}>
                <Animated.Image source={{ uri: "https://via.placeholder.com/100" }} style={[styles.avatar, animatedAvatarStyle]} />
                <Animated.View style={animatedInfoStyle}>
                    <Text style={styles.userName}>{USER_INFO.name}</Text>
                    <Text style={styles.userDetails}>{USER_INFO.email}</Text>
                    <Text style={styles.userDetails}>{USER_INFO.phone}</Text>
                    <Text style={styles.userDetails}>{USER_INFO.address}</Text>
                </Animated.View>
            </Animated.View>

            {/* Nội dung chính có thể cuộn */}
            <Animated.FlatList
                data={DATA}
                keyExtractor={(item) => item.id}
                onScroll={onScroll}  // Sử dụng Animated.FlatList để tránh lỗi
                scrollEventThrottle={16}
                ListHeaderComponent={<Text style={styles.headerText}>Danh sách</Text>}
                renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: "#007AFF",
        justifyContent: "center",
        alignItems: "center",
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    userName: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
    },
    userDetails: {
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        textAlign: "center",
    },
    item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
});