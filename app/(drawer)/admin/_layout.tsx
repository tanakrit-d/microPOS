import { Stack } from "expo-router/stack";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function AdminLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Admin",
          headerShown: true,
          headerLargeTitle: true,
          headerShadowVisible: false,
          headerLeft: () => <DrawerToggleButton tintColor="#000" />,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="create"
        options={{
          headerTitle: "Add Menu Item",
          headerShown: true,
          headerLargeTitle: true,
          headerShadowVisible: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="api"
        options={{
          headerTitle: "API Feature Debugging",
          headerShown: true,
          headerLargeTitle: true,
          headerShadowVisible: false,
        }}
      ></Stack.Screen>
    </Stack>
  );
}
