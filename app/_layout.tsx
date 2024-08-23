import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState, useCallback } from 'react';
import { View } from "react-native";
import { useColorScheme } from '@/hooks/useColorScheme';
import { Slot, Stack, useRouter, useSegments } from 'expo-router'
import * as Font from 'expo-font';



// const InitialLayout = () => {
//   const { session, initialized } = useAuth()
//   const segments = useSegments()
//   const router = useRouter()
//   const [loaded] = useFonts({
//     'Corinthian-Bold-Plain': require('../assets/fonts/Corinthian-Bold-Plain.ttf'),
//     'SpaceMono': require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   useEffect(() => {
//     if (!initialized) return

//     // Check if the path/url is in the (auth) group
//     const inAuthGroup = segments[0] === '(drawer)'

//     if (session && !inAuthGroup) {
//       // Redirect authenticated users to the list page
//       router.replace('/(drawer)')
//     } else if (!session) {
//       // Redirect unauthenticated users to the login page
//       router.replace('/(auth)')
//     }
//   }, [session, initialized])

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync()
//     }
//   }, [loaded]);

//   return (
//     <Slot />
//   )
// }

SplashScreen.preventAutoHideAsync();

const loadFonts = () => Font.loadAsync({
  'Corinthian-Bold-Plain': require('../assets/fonts/Corinthian-Bold-Plain.ttf'),
  'SpaceMono': require('../assets/fonts/SpaceMono-Regular.ttf'),
});

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await loadFonts();
      } catch (e) {
        console.warn('Error loading fonts:', e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Stack>
        <Stack.Screen
          name="(drawer)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </View>
  );
}