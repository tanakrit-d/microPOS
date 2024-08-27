import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    Switch,
    ScrollView,
    Pressable,
    StyleSheet,
} from 'react-native';
import Dropdown from 'react-native-input-select/src/index';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from '@expo/vector-icons/Ionicons';

interface MenuItemProps {
    isEditing: boolean;
    initialData?: MenuItem;
    onSave: (item: MenuItem) => void;
    maxTitleLength?: number;
}

interface MenuItem {
    title: string;
    fullTitle?: string;
    description?: string;
    category: string[];
    price: string;
    availability: boolean;
    image?: string;
}

const categories = [
    { label: 'Entrée', value: 'Entree' },
    { label: 'Main', value: 'Main' },
    { label: 'Side', value: 'Side' },
    { label: 'Drink', value: 'Drink' },
    { label: 'Dessert', value: 'Dessert' },
]

const MenuItemScreen: React.FC<MenuItemProps> = ({
    isEditing,
    initialData,
    onSave,
    maxTitleLength = 22  // Default max length, can be overridden
}) => {
    const [menuItem, setMenuItem] = useState<MenuItem>(
        initialData || {
            title: '',
            fullTitle: '',
            description: '',
            category: [],
            price: '',
            availability: true,
            image: undefined,
        }
    );

    const handleChange = (name: keyof MenuItem, value: string | boolean) => {
        if (name === 'title' && typeof value === 'string') {
            value = value.slice(0, maxTitleLength);
        }
        setMenuItem((prevItem) => ({ ...prevItem, [name]: value }));
    };

    const handleImagePick = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setMenuItem((prevItem) => ({ ...prevItem, image: result.assets[0].uri }));
        }
    };

    const handleSave = () => {
        if (menuItem.title && menuItem.category && menuItem.price) {
            onSave(menuItem);
        } else {
            alert('Please fill in all required fields');
        }
    };

    return (
        <ScrollView style={styles.container} contentInsetAdjustmentBehavior='always'>
            <Pressable style={styles.imageContainer} onPress={handleImagePick}>
                {menuItem.image ? (
                    <Image source={{ uri: menuItem.image }} style={styles.image} />
                ) : (
                    <View style={{ alignItems: 'center', flexDirection: 'column', }}>
                        <Ionicons name="image-outline" size={32} color="grey" />
                        <Text style={styles.imagePlaceholder}>Tap to add an image</Text>
                    </View>
                )}
            </Pressable>

            <View style={styles.form}>
                <Text style={styles.label}>
                    <Text>Title</Text>
                    <Text style={{ color: 'red' }}> * </Text>
                </Text>
                <TextInput
                    style={styles.input}
                    value={menuItem.title}
                    onChangeText={(value) => handleChange('title', value)}
                    placeholder="Apple Pie"
                    editable={isEditing}
                    maxLength={maxTitleLength}
                />
                <Text style={styles.characterCount}>
                    {menuItem.title.length}/{maxTitleLength} characters
                </Text>

                <Text style={styles.label}>Full Title</Text>
                <TextInput
                    style={styles.input}
                    value={menuItem.fullTitle}
                    onChangeText={(value) => handleChange('fullTitle', value)}
                    placeholder="Apple Pie with Rhubarb and Lemon"
                    editable={isEditing}
                />

                <Text style={styles.label}>Description</Text>
                <TextInput
                    style={[styles.input, styles.textArea]}
                    value={menuItem.description}
                    onChangeText={(value) => handleChange('description', value)}
                    placeholder="Green apples baked with rhubarb and lemon. Apple slices are then layered on top with cinnamon sugar. Served with a scoop of vanilla icecream."
                    multiline={true}
                    numberOfLines={4}
                    editable={isEditing}
                />

                <Text style={styles.label}>
                    <Text>Category</Text>
                    <Text style={{ color: 'red' }}> * </Text>
                </Text>
                <Dropdown
                    placeholder="Select an option..."
                    options={categories}
                    selectedValue={menuItem.category}
                    onValueChange={(value: string) => handleChange('category', value)}
                    primaryColor={'#10b981'}
                    isMultiple={true}
                    dropdownStyle={styles.pickerContainer}
                    disabled={!isEditing}
                    placeholderStyle={{fontSize: 16, color: '#888'}}
                />
                <Text style={styles.label}>
                    <Text>Price</Text>
                    <Text style={{ color: 'red' }}> * </Text>
                </Text>
                <TextInput
                    style={styles.input}
                    value={menuItem.price}
                    onChangeText={(value) => handleChange('price', value)}
                    placeholder="3.50"
                    keyboardType="numeric"
                    editable={isEditing}
                />

                <View style={styles.switchContainer}>
                    <Text style={styles.switchLabel}>Available</Text>
                    <Switch
                        value={menuItem.availability}
                        onValueChange={(value) => handleChange('availability', value)}
                        disabled={!isEditing}
                    />
                </View>

                {isEditing && (
                    <Pressable onPress={handleSave} style={styles.buttonSave}>
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
        backgroundColor: '#e5e7eb',
        borderRadius: 8,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 8,
    },
    imagePlaceholder: {
        fontSize: 16,
        color: '#888',
        paddingTop: 8,
    },
    form: {
        flex: 1,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        fontSize: 16,
    },
    characterCount: {
        fontSize: 12,
        color: '#888',
        textAlign: 'right',
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
    },
    switchLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    buttonSave: {
        flex: 0.9,
        backgroundColor: '#2cc56f',
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 20
    },
    buttonSaveText: {
        color: '#FFFFFF',
        fontSize: 18,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
});

export default MenuItemScreen;