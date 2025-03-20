import React, { useCallback, useRef } from "react";
import { StyleSheet, View, FlatList, ViewToken } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

type ListItemProps = {
    item: { id: string; title: string };
    viewableItems: Animated.SharedValue<ViewToken[]>;
};

const ListItem: React.FC<ListItemProps> = React.memo(({ item, viewableItems }) => {
    const rStyle = useAnimatedStyle(() => {
        const isVisible = Boolean(
            viewableItems.value
                .filter(vItem => vItem.isViewable)
                .find(vItem => vItem.item.id === item.id),
        );

        return {
            opacity: withTiming(isVisible ? 1 : 0, { duration: 500 }),
            transform: [
                {
                    scale: withTiming(isVisible ? 1 : 0.8, { duration: 500 }),
                },
            ],
        };
    }, [viewableItems]);

    return <Animated.View style={[styles.item, rStyle]} />;
});

export default function Lap3B2() {
    const viewableItems = useSharedValue<ViewToken[]>([]);

    // Dữ liệu mẫu
    const data = Array.from({ length: 20 }, (_, index) => ({
        id: index.toString(),
        title: `Item ${index + 1}`,
    }));

    const onViewableItemsChanged = useCallback((info: { viewableItems: ViewToken[] }) => {
        viewableItems.value = info.viewableItems;
    }, []);

    const viewabilityConfigCallbackPairs = useRef([{ viewabilityConfig: { itemVisiblePercentThreshold: 50 }, onViewableItemsChanged }]);

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ListItem item={item} viewableItems={viewableItems} />}
                viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    item: {
        width: 500,
        height: 100,
        backgroundColor: "#000",
        marginVertical: 10,
        marginTop: 40
    },
});
