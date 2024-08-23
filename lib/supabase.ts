import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppState } from 'react-native';
import { createClient } from '@supabase/supabase-js'
import dotenvFlow from 'dotenv-flow';
import * as AuthStore from '@/store/authStore';

dotenvFlow.config();

const SUPABASE_URL = process.env.SUPABASE_URL
const API_KEY = process.env.API_KEY

export const supabase = createClient(SUPABASE_URL!, API_KEY!, {
    auth: {
        storage: AuthStore,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
})

export { type AuthError, type Session } from '@supabase/supabase-js';

AppState.addEventListener('change', (nextAppState) => {
    if (nextAppState === 'active') {
        supabase.auth.startAutoRefresh();
    } else {
        supabase.auth.stopAutoRefresh();
    }
});