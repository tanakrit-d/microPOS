import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { router, usePathname } from "expo-router";
import { toast } from "sonner-native";
import * as Sentry from "@sentry/react-native";

export default function AdminScreen() {
    return (
        <View style={styles.container}>
            <Text>Features available for debugging:</Text>
            <Pressable
                onPress={() => {
                    router.navigate("/admin/create");
                }}
                style={styles.coolButton}
            >
                <Text style={styles.coolButtonText}>Add Menu Item</Text>
            </Pressable>
            <Pressable
                onPress={() => {
                    router.navigate("/admin/api");
                }}
                style={styles.coolButton}
            >
                <Text style={styles.coolButtonText}>API Testing</Text>
            </Pressable>
            <Pressable
                onPress={() => {
                    toast("Hello, World!");
                }}
                style={styles.coolButton}
            >
                <Text style={styles.coolButtonText}>Test Toast!</Text>
            </Pressable>
            <Pressable
                onPress={() => {
                    throw new Error('My first Sentry error!');
                }}
                style={styles.coolButton}
            >
                <Text style={styles.coolButtonText}>Throw Sentry Error</Text>
            </Pressable>
            <Pressable
                onPress={() => {
                    router.navigate("/admin/waiting");
                }}
                style={styles.coolButton}
            >
                <Text style={styles.coolButtonText}>Test Skeleton 💀</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    coolButton: {
        backgroundColor: "black",
        borderRadius: 8,
        margin: 2,
        width: "60%",
    },
    coolButtonText: {
        padding: 8,
        color: "white",
        textAlign: "center",
    },
});
