import React, { FC, memo, useCallback, useState } from "react";
import { View, StyleSheet, ToastAndroid, TextInput, TouchableOpacity, Text } from "react-native";
import { UserType } from "./Lap2";

type BodyType = {
    onUpdateInfor: (user: UserType) => void;
    onClickChangeColorFooter: () => void;
};

export const Body: FC<BodyType> = memo(({ onUpdateInfor, onClickChangeColorFooter }) => {
    const [name, setName] = useState("");
    const [img, setImg] = useState("");

    const handleChangeInfor = useCallback(() => {
        if (name.length > 0 && img.length > 0) {
            onUpdateInfor({ name, avatar: img });
        } else {
            ToastAndroid.show("Please enter name and link URL", ToastAndroid.SHORT);
        }
    }, [name, img, onUpdateInfor]);

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder="Enter name" 
                value={name} 
                onChangeText={setName} 
                style={styles.input} 
                placeholderTextColor="#ccc" 
            />
            <TextInput 
                placeholder="Enter URL" 
                value={img} 
                onChangeText={setImg} 
                style={styles.input} 
                placeholderTextColor="#ccc" 
            />
            <TouchableOpacity style={[styles.button, { marginTop: 30 }]} onPress={handleChangeInfor}>
                <Text style={{ color: "#000", fontSize: 16 }}>Update information</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onClickChangeColorFooter}>
                <Text style={{ color: "#000", fontSize: 16 }}>Update background color</Text>
            </TouchableOpacity>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        marginTop: 40,
    },
    button: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 5,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    },
    input: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderColor: "#ccc",
        color: "#fff",
        marginTop: 20,
        fontSize: 16
    },
});
