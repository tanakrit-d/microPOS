import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const CreateMenuItem = () => {
    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <View>
            <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
        </View>
    )
}

export default function AdminScreen() {

    return (
        <View style={styles.container}>
            <Text>Hello from the Admin (currently feature debugging) page!</Text>
            <Pressable onPress={CreateMenuItem} style={styles.coolButton}>
                <Text style={{ padding: 8, color: 'white' }}>Add Menu Item</Text>
            </Pressable>
            <Pressable style={styles.coolButton}>
                <Text style={{ padding: 8, color: 'white' }}>View Menu Item</Text>
            </Pressable>
            <Pressable style={styles.coolButton}>
                <Text style={{ padding: 8, color: 'white' }}>Edit Menu Item</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    coolButton: {
        backgroundColor: 'black',
        borderRadius: 8,
        margin: 2,
    },
});