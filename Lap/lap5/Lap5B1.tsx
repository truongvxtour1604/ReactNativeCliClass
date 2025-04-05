import React, { useCallback, useMemo } from "react";
import { Alert, Button, Image, StyleSheet, View } from "react-native";
import { CameraOptions, ImageLibraryOptions, launchImageLibrary, ImagePickerResponse } from "react-native-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setImage, clearImage } from "./imageSlice";

export default function Lap5B1() {
  const cameraOptions: CameraOptions = useMemo(() => ({
    mediaType: "photo",
    maxWidth: 500,
    maxHeight: 500,
    cameraType: "front",
    saveToPhotos: true,
  }), []);

  const libraryOptions: ImageLibraryOptions = useMemo(() => ({
    ...cameraOptions,
    selectionLimit: 1,
  }), [cameraOptions]);

  const defaultImage = "https://organicmandya.com/cdn/shop/files/Apples_bf998dd2-0ee8-4880-9726-0723c6fbcff3.jpg?v=1721368465&width=1000";
  const dispatch = useDispatch();
  const image = useSelector((state: RootState) => state.image.uri);

  const handleImageResponse = useCallback((response: ImagePickerResponse | undefined) => {
    if (!response) return;
    if (response.didCancel) {
      Alert.alert("Bạn đã hủy thao tác");
    } else if (response.errorMessage) {
      Alert.alert(`Lỗi: ${response.errorMessage}`);
    } else if (response.assets?.length) {
      dispatch(setImage(response.assets[0]?.uri || ""));
    } else {
      Alert.alert("Không có ảnh nào được chọn");
    }
  }, [dispatch]);

  const onOpenLibrary = useCallback(() => {
    launchImageLibrary(libraryOptions)
      .then(handleImageResponse)
      .catch(() => Alert.alert("Không thể chọn ảnh từ thư viện"));
  }, [handleImageResponse]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: image || defaultImage }} style={styles.avatar} />
      <Button title="Chọn ảnh" onPress={onOpenLibrary} />
      {image && <Button title="Xóa ảnh" color="red" onPress={() => dispatch(clearImage())} />}
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
