import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";

interface Lap1B3Props {
    title?: string;
    borderRadiusColor?: string;
    backgroundColor?: string;
    placeholder?: string;
    isError?: boolean;
}

export default function Lap1B3({
    title = "Username",
    borderRadiusColor = "#ccc",
    backgroundColor = "#fff",
    placeholder = "Enter your username",
    isError = true,
}: Lap1B3Props) {
    const [value, setValue] = useState("");

    const renderTop = () => {
        return (
            <Text style={styles.title}>{title}</Text>
        );
    };

    const renderCenter = () => (
        <View
            style={[
                styles.inputContainer,
                {
                    borderColor: borderRadiusColor,
                    backgroundColor: isError ? "#ffcccc" : backgroundColor, // Đổi màu khi có lỗi
                },
            ]}
        >
            <TextInput
                style={styles.inputText}
                placeholder={placeholder}
                value={value}
                onChangeText={setValue}
            />
            {isError && (
                <Image
                    source={{ uri: "https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-512.png" }}
                    style={styles.errorIcon}
                />
            )}
        </View>
    );

    const renderBottom = () => {
        if (isError) {
            return (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>Error: Wrong {title}</Text>
                </View>
            );
        }
        return null;
    };

    return (
        <View style={styles.container}>
            {renderTop()}
            {renderCenter()}
            {renderBottom()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-start",
        padding: 20,
        marginTop: 40,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
    },
    inputContainer: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 10,
    },
    inputText: {
        flex: 1,
        fontSize: 16,
    },
    errorIcon: {
        width: 20,
        height: 20,
    },
    errorContainer: {
        marginTop: 5,
    },
    errorText: {
        color: "red",
        fontSize: 14,
    },
});
