import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/app/navigation';
import {StatusBar} from "react-native";
import "./src/app/localisation/i18";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
}
