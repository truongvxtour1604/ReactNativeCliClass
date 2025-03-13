import React from "react";
import { View, Text } from "react-native";
import Lap1B1 from "./lap/Lap1B1"; // Import header
import Lap1B3 from "./lap/Lap1B3";

export default function Demo({ navigation }: { navigation: any }) {
    return (
        <View style={{ flex: 1 }}>
            <Lap1B1
                title="Trang chủ"
                navigation={navigation}
                iconLeft="https://www.iconpacks.net/icons/2/free-arrow-left-icon-3099-thumb.png"
                rightComponent={<Text style={{ fontSize: 16, color: "blue" }}></Text>}
            />
            <Lap1B3
                title="Password"
                borderRadiusColor="blue"
                backgroundColor="yellow"
                placeholder="Enter your password"
                isError={false}
            />
            <Lap1B3
                title="Confirm Password"
                borderRadiusColor="red"
                backgroundColor="blue"
                placeholder="Enter your confirm password"
                isError={true}
            />
        </View>
    );
}
