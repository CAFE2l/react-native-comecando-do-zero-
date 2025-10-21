import { StatusBar } from 'expo-status-bar';
import { StatusBar, SafeAreaView, view} from 'react-native';
import React from 'react';
import Cesta from './src/telas/Cesta/cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import mock from './src/mocks/sexta';
import AppLoading from 'expo-app-loading';

export default function App() {
  let [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if(!fonteCarregada){
    return  <AppLoading />;
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}

