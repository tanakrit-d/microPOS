import { Stack } from "expo-router/stack";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function OrderLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Orders",
          headerShown: true,
          headerLargeTitle: true,
          headerShadowVisible: false,
          headerSearchBarOptions: {
            placeholder: "Search",
            hideWhenScrolling: true,
          },
          headerLeft: () => <DrawerToggleButton tintColor="#000" />,
        }}
      ></Stack.Screen>
    </Stack>
  );
}
