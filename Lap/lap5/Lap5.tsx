import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Lap5({ navigation }: { navigation: any }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'black', width: 100, height: 50, justifyContent: 'center', borderRadius: 5 }}
                onPress={() => navigation.navigate('Lap5B1')}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>Lap5B1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'black', width: 100, height: 50, justifyContent: 'center', borderRadius: 5 }}
                onPress={() => navigation.navigate('Lap5B2')}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>Lap5B2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'black', width: 100, height: 50, justifyContent: 'center', borderRadius: 5 }}
                onPress={() => navigation.navigate('Lap5B3')}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>Lap5B3</Text>
            </TouchableOpacity>
        </View>
    );
}