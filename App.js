import {
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { View, StatusBar } from 'react-native';
import { Routes } from './src/routes';
import React from 'react';
import { store } from './src/store/store';
import { Provider } from 'react-redux';

SplashScreen.preventAutoHideAsync()
  .then(() => console.log('SplashScreen prevented'))
  .catch(() => console.warn('SplashScreen prevented failed'));

const defaultContext = {
  activeTab: 'home',
}
export const AppContext = React.createContext();

const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });
  
  if (!fontsLoaded) {
    setTimeout(() => {
      SplashScreen.hideAsync()
        .then(() => console.log('SplashScreen hidden'))
        .catch(() => console.warn('SplashScreen hidden failed'));
    }, 2000)
  }
  
  return (
    <Provider store={store}>
      <View style={{backgroundColor: "#FFFFFF", flex: 1}}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />
        <Routes/>
      </View>
    </Provider>
  )
}

export default App;