import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/app/navigation';
import {StatusBar} from "react-native";

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
