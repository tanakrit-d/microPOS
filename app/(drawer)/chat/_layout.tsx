import { Stack } from 'expo-router/stack';
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function ChatLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerTitle: 'Chat',
                    headerShown: true,
                    headerLargeTitle: true,
                    headerShadowVisible: false,
                    headerSearchBarOptions: {
                        placeholder: 'Search',
                        hideWhenScrolling: true,
                    },
                    headerLeft: () => <DrawerToggleButton tintColor='#000' />,
                }}>
            </Stack.Screen>
        </Stack >
    )
}