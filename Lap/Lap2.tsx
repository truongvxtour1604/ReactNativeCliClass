import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Lap2({ navigation }: { navigation: any }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'black', width: 100, height: 50, justifyContent: 'center', borderRadius: 5 }}
                onPress={() => navigation.navigate('Lap2B1')}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>Lap2B1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'black', width: 100, height: 50, justifyContent: 'center', borderRadius: 5 }}
                onPress={() => navigation.navigate('Lap2B2')}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>Lap2B2</Text>
            </TouchableOpacity>
        </View>
    );
}