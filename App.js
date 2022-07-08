import React, { useCallback, useEffect, useState } from 'react';
import MainNavigation from './src/navigation/MainNavigation';
import * as SplashScreen from 'expo-splash-screen';
export default function App() {
  const [appIsReady, setAppIsReady] = useState(true);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  return (
         <MainNavigation/>
      )
  }