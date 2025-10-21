import { StatusBar } from 'expo-status-bar';
import { StatusBar, SafeAreaViewm} from 'react-native';
import React from 'react';
import Cesta from './src/telas/cesta';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}

