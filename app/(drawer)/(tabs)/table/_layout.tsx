import { Stack } from "expo-router/stack";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function TableLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Tables",
          headerShown: true,
          headerLargeTitle: true,
          headerShadowVisible: false,
          headerLeft: () => <DrawerToggleButton tintColor="#000" />,
        }}
      ></Stack.Screen>
    </Stack>
  );
}
