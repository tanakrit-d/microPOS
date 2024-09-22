import React from "react";
import { View, Text, Alert, StyleSheet, Pressable } from "react-native";
import { Order } from "@/store/interfaces";
import { ListRenderItem } from "@shopify/flash-list";

export const renderOrderItem: ListRenderItem<Order> = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.headerRow}>
          <View style={styles.halfWidth}>
            <Text style={styles.tableText}>Table: {item.table}</Text>
          </View>
          <View style={styles.halfWidthAlignRight}>
            <Text style={styles.totalText}>${item.total}</Text>
          </View>
        </View>

        <View style={styles.createdAtContainer}>
          <Text>Created: {item.createdAt}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            onPress={() => Alert.alert("View Pressed")}
            style={styles.viewButton}
          >
            <Text style={styles.viewButtonText}>View</Text>
          </Pressable>
          <Pressable
            onPress={() => Alert.alert("Settle Pressed")}
            style={styles.settleButton}
          >
            <Text style={styles.settleButtonText}>Settle</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderColor: "#a9a9a9",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: "#171717",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  cardContent: {
    padding: 15,
  },
  headerRow: {
    flex: 1,
    flexDirection: "row",
    alignContent: "space-between",
    paddingBottom: 10,
  },
  halfWidth: {
    width: "50%",
  },
  halfWidthAlignRight: {
    width: "50%",
    alignItems: "flex-end",
  },
  tableText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  totalText: {
    fontSize: 18,
  },
  createdAtContainer: {
    flex: 1,
    alignItems: "flex-start",
    paddingBottom: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  viewButton: {
    borderRadius: 8,
    borderColor: "#2cc56f",
    borderWidth: 1,
    justifyContent: "center",
    marginRight: 15,
  },
  viewButtonText: {
    color: "#2cc56f",
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  settleButton: {
    backgroundColor: "#2cc56f",
    borderRadius: 8,
    justifyContent: "center",
  },
  settleButtonText: {
    color: "#ffffff",
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

export default renderOrderItem;
