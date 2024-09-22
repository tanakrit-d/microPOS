import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack } from "expo-router/stack";
import { View, Pressable } from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Link } from "expo-router";

export default function ActiveOrderLayout() {
  const drawerHandler = () => <DrawerToggleButton />;

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Settings",
          headerShown: true,
          headerLargeTitle: true,
          headerShadowVisible: false,
          headerLeft: () => <DrawerToggleButton tintColor="#000" />,
        }}
      ></Stack.Screen>
    </Stack>
  );
}
