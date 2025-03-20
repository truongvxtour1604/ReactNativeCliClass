import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lap from './lap/Lap';
import Lap1 from './lap/lap1/Lap1';
import Lap1B1 from './lap/lap1/Lap1B1';
import Lap1B2 from './lap/lap1/Lap1B2';
import Lap1B3 from './lap/lap1/Lap1B3';
import Lap2 from './lap/lap2/Lap2';
import Lap3 from './lap/lap3/Lap3';
import Lap3B1 from './lap/lap3/Lap3B1';
import Lap3B2 from './lap/lap3/Lap3B2';
import Lap3B3 from './lap/lap3/Lap3B3';

const Stack = createNativeStackNavigator();

export default function AppLap() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lap" component={Lap} options={{ headerShown: false }} />
        <Stack.Screen name="Lap1" component={Lap1} options={{ headerShown: false }} />
        <Stack.Screen name="Lap1B1" component={Lap1B1} options={{ headerShown: false }} />
        <Stack.Screen name="Lap1B2" component={Lap1B2} options={{ headerShown: false }} />
        <Stack.Screen name="Lap1B3" component={Lap1B3} options={{ headerShown: false }} />
        <Stack.Screen name="Lap2" component={Lap2} options={{ headerShown: false }} />
        <Stack.Screen name="Lap3" component={Lap3} options={{ headerShown: false }} />
        <Stack.Screen name="Lap3B1" component={Lap3B1} options={{ headerShown: false }} />
        <Stack.Screen name="Lap3B2" component={Lap3B2} options={{ headerShown: false }} />
        <Stack.Screen name="Lap3B3" component={Lap3B3} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


