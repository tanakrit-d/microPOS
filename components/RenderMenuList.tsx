import React, { useState, useMemo, useCallback, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import { Image } from "expo-image";
import { FlashList, ListRenderItem } from "@shopify/flash-list";
import { Item } from "@/store/interfaces";
import OrderBadge from "@/components/OrderBadge";
import useOrderStore from "@/store/orderStore";
import useListUpdateStore from "@/store/listUpdateStore";
import ContextMenu from "react-native-context-menu-view";
import MenuListColumns from "@/components/MenuListColumns";
import TextToFillerImage from "./TextToFillerImage";

const gap = 10;
const availableSpace = 420 - (4 - 1) * gap;
const itemSize = availableSpace / 4;

interface RenderMenuListProps {
  listData: Item[];
  numColumns?: number;
  tabBarHeight?: number;
}

interface ContextMenuAction {
  title: string;
  systemIcon: string;
}

const ContextMenuActions: ContextMenuAction[] = [
  { title: "Add", systemIcon: "plus" },
  { title: "Remove", systemIcon: "minus" },
  { title: "Open", systemIcon: "arrow.up.forward.app" },
  { title: "Modify", systemIcon: "wand.and.rays" },
  { title: "Note", systemIcon: "note.text" },
];

const RenderMenuList: React.FC<RenderMenuListProps> = ({
  listData,
  numColumns = 3,
  tabBarHeight = 0,
}) => {
  const [data, setData] = useState<Item[]>(listData);
  const addItem = useOrderStore((state) => state.addItem);
  const reduceItem = useOrderStore((state) => state.reduceItem);
  const orderItems = useOrderStore((state) => state.items);
  const setTriggerUpdate = useListUpdateStore(
    (state) => state.setTriggerUpdate,
  );

  const updateItem = useCallback((id: number) => {
    setData((prevData) =>
      prevData.map((item) => (item.id === id ? { ...item } : item)),
    );
  }, []);

  useEffect(() => {
    setTriggerUpdate(updateItem);
  }, [setTriggerUpdate, updateItem]);

  const handleContextMenuPress = useCallback(
    (event: { nativeEvent: { index: number } }, item: Item) => {
      const { index } = event.nativeEvent;
      switch (index) {
        case 0:
          addItem(item);
          updateItem(item.id);
          break;
        case 1:
          reduceItem(item);
          updateItem(item.id);
          break;
        case 2:
          Alert.alert("Test item 3");
          break;
        case 3:
          Alert.alert("Test item 4");
          break;
        default:
          Alert.alert("Test item 5");
      }
    },
    [addItem, reduceItem, updateItem],
  );

  const renderItem: ListRenderItem<Item> = useCallback(
    ({ item }) => {
      const orderItem = orderItems.find(
        (orderItem) => orderItem.id === item.id,
      );
      const quantity = orderItem ? orderItem.quantity : 0;
      return (
        <View
          style={{
            height: 120,
            width: 120,
            margin: gap / 2,
            alignItems: "center",
          }}
        >
          <ContextMenu
            actions={ContextMenuActions}
            dropdownMenuMode={false}
            onPress={(event) => handleContextMenuPress(event, item)}
          >
            <Pressable
              onPress={() => {
                addItem(item);
                updateItem(item.id);
              }}
            >
              <View style={styles.imageContainer}>
                {item.image ? (
                  <Image
                    style={styles.menuItemImage}
                    source={item.image}
                    contentFit="cover"
                  />
                ) : (
                  <View style={styles.menuItemImage}>
                    {TextToFillerImage(item.title, 90, 90)}
                  </View>
                )}
                <OrderBadge value={quantity} />
              </View>
            </Pressable>
            <Text style={styles.menuItemText}>{item.title}</Text>
          </ContextMenu>
        </View>
      );
    },
    [handleContextMenuPress, orderItems, addItem, updateItem],
  );

  const memoizedData = useMemo(() => data, [data]);

  return (
    <View style={{ margin: -gap, flex: 1 }}>
      <FlashList
        contentInsetAdjustmentBehavior="automatic"
        data={memoizedData}
        renderItem={renderItem}
        numColumns={numColumns}
        estimatedItemSize={250}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Text>No items found.</Text>}
        contentContainerStyle={{ paddingTop: 10, paddingBottom: tabBarHeight }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  menuItemImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
    alignContent: "center",
    alignItems: "center",
  },
  menuItemText: {
    width: 90,
    fontSize: 13,
    paddingVertical: 2,
  },
  imageContainer: {
    position: "relative",
  },
  menuItemsContainer: {
    paddingVertical: 5,
    borderRadius: 10,
  },
});

export default RenderMenuList;
