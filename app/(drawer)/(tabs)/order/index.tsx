import React from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { FlashList } from "@shopify/flash-list";
import orders from "@/assets/data/orders";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import renderOrderItem from "@/components/RenderOrderItem";

export default function OrderPage() {
  const { width } = useWindowDimensions();
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View style={styles.container}>
      <FlashList
        contentInsetAdjustmentBehavior="automatic"
        data={orders}
        renderItem={renderOrderItem}
        estimatedItemSize={400}
        numColumns={1}
        contentContainerStyle={{ paddingBottom: tabBarHeight }}
        showsVerticalScrollIndicator={false}
      ></FlashList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
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
    fontSize: 24,
  },
});
