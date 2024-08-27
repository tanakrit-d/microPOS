import Ionicons from '@expo/vector-icons/Ionicons';
import { Stack } from 'expo-router/stack';
import { View, Pressable } from 'react-native';
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Link } from 'expo-router';

export default function AdminLayout() {

    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerTitle: 'Admin',
                    headerShown: true,
                    headerLargeTitle: true,
                    headerShadowVisible: false,
                    headerLeft: () => <DrawerToggleButton tintColor='#000' />,
                }}>
            </Stack.Screen>
            <Stack.Screen
                name="create"
                options={{
                    headerTitle: 'Add Menu Item',
                    headerShown: true,
                    headerLargeTitle: true,
                    headerShadowVisible: false,
                }}>
            </Stack.Screen>
        </Stack >
    )
}