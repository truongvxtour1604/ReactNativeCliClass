import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

export default function Bai({ navigation }: { navigation: any }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'black', width: 100, height: 50, justifyContent: 'center', borderRadius: 5 }}
                onPress={() => navigation.navigate('Bai1')}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>Bai1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'black', width: 100, height: 50, justifyContent: 'center', borderRadius: 5 }}
                onPress={() => navigation.navigate('Bai2')}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>Bai2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'black', width: 100, height: 50, justifyContent: 'center', borderRadius: 5 }}
                onPress={() => navigation.navigate('Bai3')}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>Bai3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'black', width: 100, height: 50, justifyContent: 'center', borderRadius: 5 }}
                onPress={() => navigation.navigate('Bai4')}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>Bai4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'black', width: 100, height: 50, justifyContent: 'center', borderRadius: 5 }}
                onPress={() => navigation.navigate('Bai5')}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>Bai5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'black', width: 100, height: 50, justifyContent: 'center', borderRadius: 5 }}
                onPress={() => navigation.navigate('Bai6')}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>Bai6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'black', width: 100, height: 50, justifyContent: 'center', borderRadius: 5 }}
                onPress={() => navigation.navigate('Bai7')}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>Bai7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'black', width: 100, height: 50, justifyContent: 'center', borderRadius: 5 }}
                onPress={() => navigation.navigate('Bai8')}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>Bai8</Text>
            </TouchableOpacity>

        </View>
    );
}