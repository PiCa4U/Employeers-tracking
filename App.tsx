import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/app/navigation';

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
