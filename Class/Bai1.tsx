import React, { useEffect, useMemo, useState, useCallback, memo } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// Component con sử dụng memo để tránh render lại khi props không thay đổi
const ExpensiveCalculation = memo(({ value }: { value: number }) => {
    console.log("Component ExpensiveCalculation render");
    return <Text style={styles.sizeText}>Giá trị tính toán: {value}</Text>;
});

export default function Bai1() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState<number>(0);
    const [random, setRandom] = useState<number>(0);

    const [inforUser, setInforUser] = useState({
        name: "V X T",
        age: 20,
        year: 2024,
    });

    // useCallback để tránh tạo lại hàm handleIncrease không cần thiết
    const handleIncrease = useCallback(() => {
        setCount(prev => prev + 1);
    }, []);

    // useCallback để tránh tạo lại hàm updateInforUser không cần thiết
    const updateInforUser = useCallback(() => {
        setInforUser({
            name: "Vũ Xuân Trường",
            age: 21,
            year: 2025
        });
    }, []);

    useEffect(() => {
        console.log(`Count đã thay đổi: ${count} lần`);
    }, [count]); // Chạy lại khi count thay đổi

    const expensiveCalculation = useMemo(() => {
        console.log("Tính toán lại...");
        return count2 * 2;
    }, [count2]);

    return (
        <View style={styles.container}>
            {/* useState 1 + useMemo 1 */}
            <Text style={[styles.sizeText, { color: "red" }]}>UseState1 + UseMemo1</Text>
            <Text style={styles.sizeText}>Bạn đã bấm: {count} lần</Text>
            <TouchableOpacity onPress={handleIncrease}>
                <Text style={styles.sizeText}>Tăng</Text>
            </TouchableOpacity>

            {/* useState 2 */}
            <Text style={[styles.sizeText, { marginTop: 10, color: "red" }]}>UseState2</Text>
            <Text style={styles.sizeText}>{inforUser.name} - {inforUser.age} - {inforUser.year}</Text>
            <TouchableOpacity onPress={updateInforUser}>
                <Text style={styles.sizeText}>Cập nhật</Text>
            </TouchableOpacity>

            {/* useMemo 2 */}
            <Text style={[styles.sizeText, { marginTop: 10, color: "red" }]}>UseMemo2</Text>
            <ExpensiveCalculation value={expensiveCalculation} />
            <TouchableOpacity onPress={() => setCount2(prev => prev + 1)}>
                <Text style={styles.sizeText}>Tăng count</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setRandom(Math.random())}>
                <Text style={styles.sizeText}>Thay đổi random</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    sizeText: {
        fontSize: 26,
    },
});
