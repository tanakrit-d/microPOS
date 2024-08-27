import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { router, usePathname } from "expo-router";

export default function AdminScreen() {

    return (
        <View style={styles.container}>
            <Text>Features available for debugging:</Text>
            <Pressable onPress={() => {
                    router.navigate("/admin/create");
                }} style={styles.coolButton}>
                <Text style={styles.coolButtonText}>Add Menu Item</Text>
            </Pressable>
            <Pressable style={styles.coolButton}>
                <Text style={styles.coolButtonText}>View Menu Item</Text>
            </Pressable>
            <Pressable style={styles.coolButton}>
                <Text style={styles.coolButtonText}>Edit Menu Item</Text>
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
        width: '60%',
    },
    coolButtonText: {
        padding: 8,
        color: 'white',
        textAlign:'center' ,
    },
});