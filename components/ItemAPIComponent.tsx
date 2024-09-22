import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import {
  getItems,
  createItem,
  updateItem,
  deleteItem,
} from "@api/item/request";
import { Item, ItemCreate, ItemUpdate } from "@api/item/types";

const ApiTest: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [newItemTitle, setNewItemTitle] = useState("");
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await getItems();
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleCreateItem = async () => {
    if (newItemTitle.trim()) {
      try {
        const newItem: ItemCreate = {
          title: newItemTitle.trim(),
          price: 0,
          is_available: false,
        };
        await createItem(newItem);
        setNewItemTitle("");
        fetchItems();
      } catch (error) {
        console.error("Error creating item:", error);
      }
    }
  };

  const handleUpdateItem = async (item: Item) => {
    try {
      const updatedItem: ItemUpdate = {
        title: item.title,
        price: item.price,
        is_available: item.is_available,
      };
      await updateItem(item.id!, updatedItem);
      setEditingItem(null);
      fetchItems();
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const handleDeleteItem = async (itemId: string) => {
    try {
      await deleteItem(itemId);
      fetchItems();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.itemContainer}>
      {editingItem && editingItem.id === item.id ? (
        <View>
          <TextInput
            style={styles.input}
            value={editingItem.title}
            onChangeText={(text) =>
              setEditingItem({ ...editingItem, title: text })
            }
          />
          <TouchableOpacity onPress={() => handleUpdateItem(editingItem)}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text>{item.title}</Text>
          <Text>Price: ${item.price}</Text>
          <Text>Available: {item.is_available ? "Yes" : "No"}</Text>
          <TouchableOpacity onPress={() => setEditingItem(item)}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDeleteItem(item.id!)}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Items</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newItemTitle}
          onChangeText={setNewItemTitle}
          placeholder="New item title"
        />
        <TouchableOpacity onPress={handleCreateItem}>
          <Text style={styles.buttonText}>Add Item</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id!}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginRight: 10,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "blue",
    marginTop: 5,
  },
});

export default ApiTest;
