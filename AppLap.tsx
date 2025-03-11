import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lap from './Lap/Lap';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lap" component={Lap} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


