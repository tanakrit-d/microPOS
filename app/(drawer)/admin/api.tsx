import { useState } from "react";
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { Image } from "expo-image";
import {
    getItem,
    getItems,
    createItem,
    updateItem,
    deleteItem,
} from "@api/item/request";
import {
    Item,
    ItemCreate,
    ItemUpdate,
    ItemResponse,
    UUID,
} from "@api/item/types";
import { FlashList } from "@shopify/flash-list";
import { SafeAreaView } from "react-native-safe-area-context";
import { toast } from "sonner-native";
import * as Sentry from "@sentry/react-native";


export default function ItemAPIScreen() {
    const [itemId, setItemId] = useState("");
    const [result, setResult] = useState<Item | any>([]);

    const handleGetItemById = async () => {
        try {
            const response = await getItem(itemId);
            console.log(response.data[0]);
            setResult([response.data[0]]);
        } catch (error) {
            console.error("Error fetching item:", error);
        }
    };
    const handleGetItems = async () => {
        try {
            const response = await getItems();
            console.log(response.data);
            setResult(response.data);
        } catch (error) {
            toast.error("Failed to retrieve items.", { closeButton: true });
            console.error("Error fetching items:", error);
            Sentry.captureException(error);
        }
    };

    const dummyData: ItemCreate = {
        title: 'Test Request',
        title_full: 'API API API',
        description: undefined,
        categories: ["a9e862f5-80e3-4f80-ad73-d300141c9e12", "0c6d9409-17dd-454c-8a92-bdaeae2d083e"],
        price: 5.00,
        image_uri: undefined,
        is_available: true,
    };

    const handlePostItem = async () => {
        try {
            const response = await createItem(dummyData);
            console.log(response);
        } catch (error) {
            toast.error("Failed to post item.", { closeButton: true });
            console.error("Error posting item:", error);
            Sentry.captureException(error);
        }
    };

    const MenuItem = ({ item }) => (
        <View style={styles.cardResult}>
            <Image source={{ uri: item.image_uri }} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.titleResult}>{item.title_full}</Text>
                <Text style={styles.description} numberOfLines={2}>
                    {item.description}
                </Text>
                <View style={styles.footer}>
                    <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                    <Text
                        style={[
                            styles.availability,
                            item.is_available ? styles.available : styles.unavailable,
                        ]}
                    >
                        {item.is_available ? "Available" : "Unavailable"}
                    </Text>
                </View>
            </View>
        </View>
    );

    const MenuItemList = ({ data }) => (
        <FlashList
            data={data}
            renderItem={({ item }) => <MenuItem item={item} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
            estimatedItemSize={100} // Add this line
            ListEmptyComponent={() => <Text>No items found.</Text>}
        />
    );

    return (
        <SafeAreaView>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View style={styles.cardAPI}>
                    <Text style={styles.titleAPI}>Get Item by ID</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setItemId}
                        value={itemId}
                        placeholder="f33359ff-6ff9-4e06-afee-bcc32657c843"
                        placeholderTextColor="#999"
                    />
                    <Pressable style={styles.button} onPress={handleGetItemById}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </Pressable>
                </View>
                <View style={styles.cardAPI}>
                    <Text style={styles.titleAPI}>Get Items</Text>
                    <Pressable style={styles.button} onPress={handleGetItems}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </Pressable>
                </View>
                <View style={styles.cardAPI}>
                    <Text style={styles.titleAPI}>POST Item</Text>
                    <Pressable style={styles.button} onPress={handlePostItem}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </Pressable>
                </View>
                <MenuItemList data={result} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    cardAPI: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 16,
        margin: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    titleAPI: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 12,
        color: "#333",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 4,
        padding: 8,
        marginBottom: 12,
        fontSize: 16,
        color: "#333",
    },
    button: {
        backgroundColor: "#007AFF",
        borderRadius: 4,
        padding: 12,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    list: {
        padding: 16,
    },
    cardResult: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 8,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: 100,
        height: 100,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    content: {
        flex: 1,
        padding: 12,
    },
    titleResult: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        color: "#666",
        marginBottom: 8,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#2ecc71",
    },
    availability: {
        fontSize: 14,
        fontWeight: "bold",
    },
    available: {
        color: "#2ecc71",
    },
    unavailable: {
        color: "#e74c3c",
    },
});
