import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lap from './Lap/Lap';
import Lap1 from './Lap/Lap1';

const Stack = createNativeStackNavigator();

export default function AppLap() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lap" component={Lap} options={{ headerShown: false }} />
        <Stack.Screen name="Lap1" component={Lap1} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


