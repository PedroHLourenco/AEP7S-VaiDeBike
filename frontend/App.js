import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';

import LoginScreen from './screens/LoginScreen';
import MapScreen from './screens/MapScreen';
import ProgressScreen from './screens/ProgressScreen';
import RankingScreen from './screens/RankingScreen'; // <- essa tela DEVE existir

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Mapa" component={MapScreen} />
          <Stack.Screen name="Progresso" component={ProgressScreen} />
          <Stack.Screen name="Ranking" component={RankingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
