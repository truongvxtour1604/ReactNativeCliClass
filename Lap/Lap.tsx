import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

export default function Lap({ navigation }: { navigation: any }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'black', width: 100, height: 50, justifyContent: 'center', borderRadius: 5 }}
                onPress={() => navigation.navigate('Lap1')}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>Lap1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'black', width: 100, height: 50, justifyContent: 'center', borderRadius: 5 }}
                onPress={() => navigation.navigate('Lap2')}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>Lap2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'black', width: 100, height: 50, justifyContent: 'center', borderRadius: 5 }}
                onPress={() => navigation.navigate('Lap3')}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>Lap3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'black', width: 100, height: 50, justifyContent: 'center', borderRadius: 5 }}
                onPress={() => navigation.navigate('Lap4')}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>Lap4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'black', width: 100, height: 50, justifyContent: 'center', borderRadius: 5 }}
                onPress={() => navigation.navigate('Lap5')}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>Lap5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'black', width: 100, height: 50, justifyContent: 'center', borderRadius: 5 }}
                onPress={() => navigation.navigate('Lap6')}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>Lap6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'black', width: 100, height: 50, justifyContent: 'center', borderRadius: 5 }}
                onPress={() => navigation.navigate('Lap7')}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>Lap7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'black', width: 100, height: 50, justifyContent: 'center', borderRadius: 5 }}
                onPress={() => navigation.navigate('Lap8')}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>Lap8</Text>
            </TouchableOpacity>
        </View>
    );
}