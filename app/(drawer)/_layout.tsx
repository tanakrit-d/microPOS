import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import Logo from "@/assets/images/brand-micro/logo.svg";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { supabase } from "@/lib/supabase";

const CustomDrawerContent = (props: any) => {
  const colorScheme = useColorScheme();
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.companyInfoWrapper}>
        <Logo width={36} height={36} />
        <View style={{ paddingLeft: 10 }}>
          <Text style={styles.companyName}>microPOS</Text>
        </View>
      </View>

      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons
            name="home-outline"
            size={size}
            color={pathname === "/home/menu" ? "#fff" : "#000"}
          />
        )}
        label={"Home"}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname === "/home/menu" ? "#fff" : "#000" },
        ]}
        style={{
          backgroundColor:
            pathname === "/home/menu"
              ? Colors[colorScheme ?? "light"].tint
              : "#fff",
        }}
        onPress={() => {
          router.navigate("./home/menu");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons
            name="settings-outline"
            size={size}
            color={pathname === "/settings" ? "#fff" : "#000"}
          />
        )}
        label={"Settings"}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname === "/settings" ? "#fff" : "#000" },
        ]}
        style={{
          backgroundColor:
            pathname === "/settings"
              ? Colors[colorScheme ?? "light"].tint
              : "#fff",
        }}
        onPress={() => {
          router.push("/settings");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons
            name="server-outline"
            size={size}
            color={pathname === "/admin" ? "#fff" : "#000"}
          />
        )}
        label={"Admin"}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname === "/admin" ? "#fff" : "#000" },
        ]}
        style={{
          backgroundColor:
            pathname === "/admin"
              ? Colors[colorScheme ?? "light"].tint
              : "#fff",
        }}
        onPress={() => {
          router.push("/admin");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons name="exit-outline" size={size} color={"#000"} />
        )}
        label={"Logout"}
        labelStyle={[styles.navItemLabel, { color: "#000" }]}
        onPress={() => supabase.auth.signOut()}
      ></DrawerItem>
    </DrawerContentScrollView>
  );
};

export default function Layout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "Home",
          title: "Home",
          headerShown: false,
        }}
      />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  navItemLabel: {
    marginLeft: -20,
    fontSize: 18,
  },
  drawerHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  companyInfoWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 10,
  },
  companyLogo: {
    width: 32,
    height: 32,
  },
  companyName: {
    fontFamily: "ui-sans-serif",
    fontWeight: "bold",
    color: "#000",
    fontSize: 32,
  },
  companyArea: {
    fontFamily: "Corinthian-Bold-Plain",
    color: "#0094da",
    fontSize: 18,
    paddingTop: 8,
  },
});
