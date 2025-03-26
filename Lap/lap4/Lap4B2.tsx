import React, { useState } from "react";
import {
    Alert,
    StyleSheet,
    View,
    Image,
    Button,
} from "react-native";
import {
    CameraOptions,
    ImageLibraryOptions,
    ImagePickerResponse,
    launchImageLibrary,
} from "react-native-image-picker";

const cameraOptions: CameraOptions = {
    mediaType: "photo",
    maxWidth: 500,
    maxHeight: 500,
    cameraType: "front",
    saveToPhotos: true,
};

const libraryOptions: ImageLibraryOptions = {
    ...cameraOptions,
    selectionLimit: 1, // Chỉ chọn 1 ảnh
};

const defaultImage =
    "https://organicmandya.com/cdn/shop/files/Apples_bf998dd2-0ee8-4880-9726-0723c6fbcff3.jpg?v=1721368465&width=1000";

export default function Lap4B2() {
    const [image, setImage] = useState<string | null>(null);

    // Xử lý ảnh sau khi chụp hoặc chọn
    const handleImageResponse = (response: ImagePickerResponse | undefined) => {
        if (!response) return;

        if (response.didCancel) {
            Alert.alert("Thông báo", "Bạn đã hủy thao tác.");
        } else if (response.errorCode) {
            Alert.alert("Lỗi", response.errorMessage || "Không thể lấy ảnh.");
        } else if (response.assets?.length) {
            setImage(response.assets[0]?.uri || "");
        } else {
            Alert.alert("Lỗi", "Không có ảnh nào được chọn.");
        }
    };

    const opOpenLibrary = async () => {
        try {
            const response: ImagePickerResponse | undefined = await launchImageLibrary(libraryOptions);
            handleImageResponse(response);
        } catch (error) {
            console.error("Lỗi khi chọn ảnh:", error);
            Alert.alert("Lỗi", "Không thể chọn ảnh từ thư viện.");
        }
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: image || defaultImage }} style={styles.avatar} />
            <Button title="Chọn ảnh từ thư viện" onPress={opOpenLibrary} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
    },
});
