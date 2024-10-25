import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Switch,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";
import { Image } from "expo-image";
import Dropdown from "react-native-input-select"
import * as ImagePicker from "expo-image-picker";
import Ionicons from "@expo/vector-icons/Ionicons";
import { UUID, ItemCreate, ItemResponse } from "@/app/api/item/types";
import { ItemCreateSchema, ItemResponseSchema } from "@/app/api/item/schema";
import { createItem } from "@/app/api/item/request";
import { getCategories } from "@/app/api/category/request";
import { CreateMenuItemSkeleton } from "./Skeletons";
import { toast } from "sonner-native";
import { useMenuItemStore, MenuItemData} from "@/store/menuItemStore";

interface MenuItemProps {
  isEditing: boolean;
  initialData?: ItemCreate;
  onSave: (item: ItemCreate) => void;
  maxTitleLength?: number;
}

interface MappedCategory {
  label: string;
  value: string;
  [key: string]: string;
}

const retrieveCategories = async (): Promise<MappedCategory[]> => {
  try {
    const categoryResponse = await getCategories(true);
    return categoryResponse.data
      .filter((category): category is { id: string; title: string } =>
        category.id !== null && category.id !== undefined &&
        category.title !== null && category.title !== undefined
      )
      .map(({ id, title }) => ({
        label: title,
        value: id,
        key: id
      }))
      .sort((a, b) => a.label.localeCompare(b.label));;
  } catch (e) {
    throw e;
  }
}

const MenuItemScreen: React.FC<MenuItemProps> = ({
  isEditing,
  onSave,
  maxTitleLength = 22,
}) => {
  const { MenuItemData, updateMenuItemField } = useMenuItemStore();
  const [categories, setCategories] = useState<MappedCategory[]>([])
  const [isLoading, setIsLoading] = useState(true);
  const [isAwaiting, setIsAwaiting] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const fetchedCategories = await retrieveCategories();
        setCategories(fetchedCategories);
      } catch (err) {
        console.error('Error fetching categories:', err);
        toast.error('Failed to fetch categories.', {
          closeButton: true,
          duration: 7000,
        })
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (isLoading) {
    return <CreateMenuItemSkeleton isLoading={isLoading} colorMode="light" />
  }

  if (isAwaiting) {
    console.log('placeholder!')
  }

  const handleImagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      updateMenuItemField('image_uri', result.assets[0].uri);
    }
  };

  const handleSubmit = async (menuItemData: MenuItemData): Promise<ItemResponse> => {
    try {
      console.log(menuItemData)
      console.log('----')
      setIsAwaiting(true)
      // const payload = transformToApiSchema(formData, initialFormData);
      console.log(menuItemData)
      return await createItem(menuItemData)
    } catch (e) {
      throw e;
    } finally {
      setIsAwaiting(false)
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentInsetAdjustmentBehavior="always"
    >
      <Pressable style={styles.imageContainer} onPress={handleImagePick}>
        {MenuItemData.image_uri ? (
          <Image
            source={{ uri: MenuItemData.image_uri }}
            style={styles.image}
            contentFit="cover"
          />
        ) : (
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Ionicons name="add" size={24} color="grey" />
            <Ionicons name="image-outline" size={32} color="grey" />
          </View>
        )}
      </Pressable>

      <View style={styles.form}>
        <Text style={styles.label}>
          <Text>Title</Text>
          <Text style={{ color: "red" }}> * </Text>
        </Text>
        <TextInput
          style={styles.input}
          value={MenuItemData.title}
          onChangeText={(value) => updateMenuItemField('title', value)}
          placeholder="Apple Pie"
          editable={isEditing}
          maxLength={maxTitleLength}
        />
        <Text style={styles.characterCount}>
          {MenuItemData.title.length}/{maxTitleLength} characters
        </Text>

        <Text style={styles.label}>Full Title</Text>
        <TextInput
          style={styles.input}
          value={MenuItemData.title_full}
          onChangeText={(value) => updateMenuItemField('title_full', value)}
          placeholder="Apple Pie with Rhubarb and Lemon"
          editable={isEditing}
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={MenuItemData.description}
          onChangeText={(value) => updateMenuItemField('description', value)}
          placeholder="Green apples baked with rhubarb and lemon. Apple slices are then layered on top with cinnamon sugar. Served with a scoop of vanilla ice cream."
          multiline={true}
          numberOfLines={4}
          editable={isEditing}
        />

        <Text style={styles.label}>
          <Text>Category</Text>
          <Text style={{ color: "red" }}> * </Text>
        </Text>
        <Dropdown
          placeholder="Select an option..."
          options={categories}
          selectedValue={MenuItemData.categories}
          onValueChange={(value: string) => console.log(value)}
          primaryColor={"#10b981"}
          isMultiple={true}
          dropdownStyle={styles.pickerContainer}
          disabled={!isEditing}
          placeholderStyle={{ fontSize: 16, color: "#888" }}
        />
        <Text style={styles.label}>
          <Text>Price</Text>
          <Text style={{ color: "red" }}> * </Text>
        </Text>
        <TextInput
          style={styles.input}
          value={MenuItemData.price.toString()}
          onChangeText={(value) => updateMenuItemField("price", parseFloat(value))}
          placeholder="3.50"
          keyboardType="numeric"
          editable={isEditing}
        />

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Available</Text>
          <Switch
            value={MenuItemData.is_available}
            onValueChange={(value) => updateMenuItemField("is_available", value)}
            disabled={!isEditing}
          />
        </View>

        {isEditing && (
          <Pressable onPress={() => handleSubmit(MenuItemData)} style={styles.buttonSave}>
            <Text style={styles.buttonSaveText}>Save</Text>
          </Pressable>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  imageContainer: {
    width: 200,
    height: 150,
    backgroundColor: "#e5e7eb",
    borderRadius: 8,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  imagePlaceholder: {
    fontSize: 16,
    color: "#888",
    paddingTop: 8,
  },
  form: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
  },
  characterCount: {
    fontSize: 12,
    color: "#888",
    textAlign: "right",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
  switchLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
  },
  buttonSave: {
    flex: 0.9,
    backgroundColor: "#2cc56f",
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
    marginBottom: 20,
  },
  buttonSaveText: {
    color: "#FFFFFF",
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

export default MenuItemScreen;
