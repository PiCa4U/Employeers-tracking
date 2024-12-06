import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/homeScreen';
import { MovementsScreen } from '../screens/movementsScreen';
import { MovementsMapScreen } from '../screens/movementsMapScreen';
import type { RootStackParamList } from '../../packages/model/repositories';

const Stack = createStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Movements" component={MovementsScreen} />
      <Stack.Screen name="MovementsMap" component={MovementsMapScreen} />
   </Stack.Navigator>
  );
};
