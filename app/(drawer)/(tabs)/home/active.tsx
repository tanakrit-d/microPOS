import React, { useEffect, useRef } from "react";
import { FlashList } from "@shopify/flash-list";
import { View, Text, StyleSheet, Pressable } from "react-native";
import useOrderStore from "@/store/orderStore";
import { Item } from "@/store/interfaces";
import Svg, { Path } from "react-native-svg";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import {
  ClearButton,
  SubmitButton,
  AlertConfirmation,
} from "@/components/ActiveOrder";
import useListUpdateStore from "@/store/listUpdateStore";

export default function CurrentScreen() {
  const { items, addItem, reduceItem, clearOrder, count } = useOrderStore();
  const triggerUpdate = useListUpdateStore((state) => state.triggerUpdate);
  const isButtonDisabled = count === 0;
  const tabBarHeight = useBottomTabBarHeight();
  const dynamicStyles = StyleSheet.create({
    footer: {
      paddingBottom: tabBarHeight,
      paddingTop: 12,
      justifyContent: "space-around",
      flexDirection: "row",
      alignItems: "center",
    },
  });

  const handleClearPress = () => {
    AlertConfirmation({
      messageTitle: "Clear Order",
      optionLeft: "Cancel",
      optionLeftStyle: "cancel",
      onPressLeft: () => console.log("Clear cancelled"),
      optionRight: "OK",
      optionRightStyle: "destructive",
      onPressRight: () => triggerClearCart(items),
    });
  };

  const handleSubmitPress = () => {
    AlertConfirmation({
      messageTitle: "Submit Order",
      optionLeft: "Cancel",
      optionLeftStyle: "cancel",
      onPressLeft: () => console.log("Submit cancelled"),
      optionRight: "OK",
      optionRightStyle: "default",
      onPressRight: () => console.log("OK Pressed"),
    });
  };

  const triggerClearCart = (items: any) => {
    const activeOrder = items;
    clearOrder();
    for (const item of activeOrder) {
      triggerUpdate(item.id);
    }
  };

  const renderItem = ({ item }: { item: Item & { quantity: number } }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <View style={styles.quantityContainer}>
        <View style={{ paddingRight: 10 }}>
          <Pressable
            onPress={() => {
              reduceItem(item);
              triggerUpdate(item.id);
            }}
            style={styles.quantityButtonRemove}
          >
            <Svg
              width={12}
              height={12}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#FFFFFF"
            >
              <Path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </Svg>
          </Pressable>
        </View>
        <View style={styles.countContainer}>
          <Text style={styles.countText}>{item.quantity}</Text>
        </View>
        <View style={{ paddingLeft: 10 }}>
          <Pressable
            onPress={() => {
              addItem(item);
              triggerUpdate(item.id);
            }}
            style={styles.quantityButtonAdd}
          >
            <Svg
              width={12}
              height={12}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#FFFFFF"
            >
              <Path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </Svg>
          </Pressable>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View />
      <FlashList
        contentInsetAdjustmentBehavior="automatic"
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        estimatedItemSize={300}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Text>No items found.</Text>}
      />
      <View style={dynamicStyles.footer}>
        <ClearButton onPress={handleClearPress} disabled={isButtonDisabled} />
        <SubmitButton onPress={handleSubmitPress} disabled={isButtonDisabled} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
  },
  itemTitle: {
    flex: 1,
    fontSize: 18,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  countContainer: {
    width: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  countText: {
    fontSize: 18,
    fontFamily: "SFMono-Regular",
  },
  quantityButtonRemove: {
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    borderRadius: 4,
    backgroundColor: "#2cc56f",
  },
  quantityButtonAdd: {
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    borderRadius: 4,
    backgroundColor: "#2cc56f",
  },
  seperator: {
    height: 1,
    backgroundColor: "grey",
  },
});
