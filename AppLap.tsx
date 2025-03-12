import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lap from './lap/Lap';
import Lap1 from './lap/Lap1';
import Lap1B1 from './lap/Lap1B1';
import Lap1B2 from './lap/Lap1B2';
import Lap2 from './lap/Lap2';

const Stack = createNativeStackNavigator();

export default function AppLap() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lap" component={Lap} options={{ headerShown: false }} />
        <Stack.Screen name="Lap1" component={Lap1} options={{ headerShown: false }} />
        <Stack.Screen name="Lap1B1" component={Lap1B1} options={{ headerShown: false }} />
        <Stack.Screen name="Lap1B2" component={Lap1B2} options={{ headerShown: false }} />
        <Stack.Screen name="Lap2" component={Lap2} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


