import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

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
  navigation?: any;
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
}: Lap1B1Props) {
  const renderLeft = () => {
    if (leftComponent) return leftComponent;

    if (!iconLeft) {
      return <View style={{ width: leftIconSize, height: leftIconSize }} />;
    }

    return (
      <Pressable
        hitSlop={15}
        onPress={() => navigation.goBack()}
      >
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
      <Text style={styles.title} numberOfLines={numberOfLines}>
        {title}
      </Text>
    </View>
  );

  const renderRight = () => (
    <View style={styles.containerRight}>
      {rightComponent ||
        (iconRight && (
          <Pressable hitSlop={15}>
            <Image
              source={{ uri: iconRight }}
              style={{ width: rightIconSize, height: rightIconSize, resizeMode: "contain" }}
            />
          </Pressable>
        ))}
    </View>
  );

  return (
    <View style={styles.container}>
      {renderLeft()}
      {renderCenter()}
      {renderRight()}
      {!rightComponent && !iconRight && (
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
    backgroundColor: "#fff",
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
