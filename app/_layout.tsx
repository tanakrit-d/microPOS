import { useFonts } from 'expo-font';
import Auth from '@/components/Authentication'
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState, useCallback } from 'react';
import { View } from "react-native";
import { useColorScheme } from '@/hooks/useColorScheme';
import { Slot, Stack, useRouter, useSegments } from 'expo-router'
import * as Font from 'expo-font';
import { toast, Toasts } from '@backpackapp-io/react-native-toast';
import { Session } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'

SplashScreen.preventAutoHideAsync();

const loadFonts = () => Font.loadAsync({
  'Corinthian-Bold-Plain': require('../assets/fonts/Corinthian-Bold-Plain.ttf'),
  'SpaceMono': require('../assets/fonts/SpaceMono-Regular.ttf'),
});

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [appIsReady, setAppIsReady] = useState(false);
  const [session, setSession] = useState<Session | null>(null)

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

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

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
      {session && session.user ?
        <Stack>
          <Stack.Screen
            name="(drawer)"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
        : <Auth />}
    </View>
  );
}