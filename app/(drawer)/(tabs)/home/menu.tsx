import React, { useRef, useState, useMemo } from "react";
import {
  StyleSheet,
  View,
  ViewProps,
  Text,
  useWindowDimensions,
  Alert,
  Pressable,
} from "react-native";
import RenderMenuList from "@/components/RenderMenuList";
import food from "@/assets/data/item_food";
import sides from "@/assets/data/item_sides";
import drinks from "@/assets/data/item_drinks";
import dessert from "@/assets/data/item_dessert";
import useOrderStore from "@/store/orderStore";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/elements";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function MenuPage() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="MainScreen"
      screenOptions={{
        tabBarActiveTintColor: "#10b981",
        tabBarLabelStyle: { fontSize: 12, color: "#000" },
        tabBarStyle: { backgroundColor: "#fff" },
        tabBarIndicatorStyle: {
          backgroundColor: Colors["light"].tint,
        },
      }}
    >
      <Tab.Screen name="Food" component={MainScreen} />
      <Tab.Screen name="Sides" component={SideScreen} />
      <Tab.Screen name="Drinks" component={DrinksScreen} />
      <Tab.Screen name="Desserts" component={DessertScreen} />
    </Tab.Navigator>
  );
}

function MainScreen() {
  const { width } = useWindowDimensions();
  const numColumns = Math.floor((width - 20) / 100);
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <View style={styles.container}>
      <RenderMenuList
        listData={food}
        numColumns={numColumns}
        tabBarHeight={tabBarHeight}
      />
    </View>
  );
}

function SideScreen() {
  const { width } = useWindowDimensions();
  const numColumns = Math.floor((width - 20) / 100);
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <View style={styles.container}>
      <RenderMenuList
        listData={sides}
        numColumns={numColumns}
        tabBarHeight={tabBarHeight}
      />
    </View>
  );
}

function DrinksScreen() {
  const { width } = useWindowDimensions();
  const numColumns = Math.floor((width - 20) / 100);
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <View style={styles.container}>
      <RenderMenuList
        listData={drinks}
        numColumns={numColumns}
        tabBarHeight={tabBarHeight}
      />
    </View>
  );
}

function DessertScreen() {
  const { width } = useWindowDimensions();
  const numColumns = Math.floor((width - 20) / 100);
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <View style={styles.container}>
      <RenderMenuList
        listData={dessert}
        numColumns={numColumns}
        tabBarHeight={tabBarHeight}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  menuItemsContainer: {
    padding: 10,
    borderRadius: 10,
  },
  menuItemImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  header: {
    height: 250,
    width: "100%",
  },
});
