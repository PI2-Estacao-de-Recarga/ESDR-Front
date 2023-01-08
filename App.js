import {
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { View } from 'react-native';
import { Routes } from './src/routes';
import { StatusBar } from 'react-native';

SplashScreen.preventAutoHideAsync()
  .then(() => console.log('SplashScreen prevented'))
  .catch(() => console.warn('SplashScreen prevented failed'));

const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync()
        .then(() => console.log('SplashScreen hidden'))
        .catch(() => console.warn('SplashScreen hidden failed'));
    }, 2000)
    console.log('fontsLoaded', fontsLoaded)
  }, [fontsLoaded])
  
  return (
    <View style={{backgroundColor: "#FFFFFF", flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Routes/>
    </View>
  )
}

export default App;