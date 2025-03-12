import React from "react";
import { View, Text, Image, Pressable, StyleSheet, ActivityIndicator } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface Lap1B1Props {
  title?: string;
  numberOfLines?: number;
  iconLeft?: string;
  iconLeftColor?: string;
  leftComponent?: React.ReactNode;
  leftIconSize?: number;
  iconRight?: string;
  rightComponent?: React.ReactNode;
  rightIconSize?: number;
  navigation?: NativeStackNavigationProp<any>;
  backgroundColor?: string;
  visible?: boolean;
  loading?: boolean;
}

export default function Lap1B1({
  title = "Header",
  numberOfLines = 1,
  iconLeft = "https://www.iconpacks.net/icons/2/free-arrow-left-icon-3099-thumb.png",
  iconLeftColor = "black",
  leftComponent,
  leftIconSize = 24,
  iconRight,
  rightComponent,
  rightIconSize = 24,
  navigation,
  backgroundColor = "#fff",
  visible = true,
  loading = false,
}: Lap1B1Props) {
  if (!visible) return null;

  const renderLeft = () => {
    if (leftComponent) return leftComponent;

    if (!iconLeft) {
      return <View style={{ width: leftIconSize, height: leftIconSize }} />;
    }

    return (
      <Pressable hitSlop={15} onPress={() => navigation?.goBack && navigation.goBack()}>
        <Image
          source={{ uri: iconLeft }}
          style={{
            tintColor: iconLeftColor,
            width: leftIconSize,
            height: leftIconSize,
            resizeMode: "contain",
          }}
        />
      </Pressable>
    );
  };

  const renderCenter = () => (
    <View style={styles.containerCenter}>
      {loading ? (
        <ActivityIndicator size="small" color="#000" />
      ) : (
        <Text style={styles.title} numberOfLines={numberOfLines}>
          {title}
        </Text>
      )}
    </View>
  );

  const renderRight = () => {
    if (rightComponent) {
      return <View style={styles.containerRight}>{rightComponent}</View>;
    }

    if (iconRight) {
      return (
        <View style={styles.containerRight}>
          <Pressable hitSlop={15}>
            <Image
              source={{ uri: iconRight }}
              style={{ width: rightIconSize, height: rightIconSize, resizeMode: "contain" }}
            />
          </Pressable>
        </View>
      );
    }

    return <View style={styles.containerRight} />;
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {renderLeft()}
      {renderCenter()}
      {renderRight()}
      {!rightComponent && !iconRight && require("../image/vxt.jpg") && (
        <Image
          source={require("../image/vxt.jpg")}
          style={{ width: 30, height: 30, borderRadius: 15 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 40,
  },
  containerCenter: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  containerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
});
