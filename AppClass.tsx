import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bai from './class/Bai';
import Bai1 from './class/Bai1';

const Stack = createNativeStackNavigator();

export default function AppClass() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bai" component={Bai} options={{ headerShown: false }} />
        <Stack.Screen name="Bai1" component={Bai1} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


