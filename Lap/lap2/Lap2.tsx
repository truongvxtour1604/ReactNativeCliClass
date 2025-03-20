import React, { useCallback, useEffect, useMemo, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Body } from "./Body";

export type UserType = {
    name: string;
    avatar: string;
};

export default function Lap2() {
    const color = ["white", "bink", "red", "blue", "yellow", "orange"];
    const [user, setUser] = useState<UserType>({
        name: "Empty name",
        avatar: "https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223",
    });

    const [lastTimeUpdate, setLastTimeUpdate] = useState("You have not updated your information");

    const [footerColor, setFooterColor] = useState(color[0]);

    const handleUpdateInfor = useCallback((_user: UserType) => {
        setUser(_user);
    }, []);

    const handleRandomColor = useCallback(() => {
        const numberRan = Math.floor(Math.random() * color.length);
        setFooterColor(color[numberRan]);
    }, []);

    useEffect(() => {
        const currentDate = new Date();
        const dateTime =
            currentDate.getDate() +
            "/" +
            (currentDate.getMonth() + 1) +
            "/" +
            currentDate.getFullYear() +
            " " +
            currentDate.getHours() +
            ":" +
            currentDate.getMinutes() +
            ":" +
            currentDate.getSeconds();
        setLastTimeUpdate(dateTime);
    }, [user]);

    return (
        <View style={styles.container}>
            <Header user={user} />
            <Body onUpdateInfor={handleUpdateInfor} onClickChangeColorFooter={handleRandomColor} />
            <Footer timeUpdate={lastTimeUpdate} backgroundColor={footerColor} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
});
