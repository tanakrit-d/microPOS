import Ionicons from '@expo/vector-icons/Ionicons';
import { Stack } from 'expo-router/stack';
import { Pressable, View, Text } from 'react-native';
import { Avatar, Badge, Icon, withBadge } from '@rneui/themed';
import useOrderStore from '@/store/orderStore';
import { useRef, useState } from 'react';
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Link, router } from 'expo-router';
import cardStyleInterpolator from '@/transitions/CardTransition'

export const unstable_settings = {
    initialRouteName: "menu",
};

export default function MenuLayout() {
    const { count } = useOrderStore();
    
    return (
        <Stack
            screenOptions={{
                ...cardStyleInterpolator,
            }}>
            <Stack.Screen
                name="menu"
                options={{
                    headerTitle: 'Menu',
                    headerShown: true,
                    headerLargeTitle: false,
                    headerShadowVisible: false,
                    headerLeft: () => <DrawerToggleButton tintColor='#000' />,
                    headerRight: () => (
                        <View style={{ paddingRight: 10 }}>
                            <Pressable onPress={() => router.push('./active')}>
                                <Ionicons
                                    name='receipt'
                                    color='black'
                                    size={22} />
                                <Badge
                                    status="primary"
                                    value={count}
                                    badgeStyle={{ backgroundColor: '#2196f3' }}
                                    containerStyle={{ position: 'absolute', top: -10, left: 15 }}
                                />
                            </Pressable>
                        </View>
                    )
                }}>
            </Stack.Screen>
            <Stack.Screen
                name="active"
                options={{
                    headerTitle: 'Active Order',
                    headerShown: true,
                    headerLargeTitle: true,
                    headerShadowVisible: false,
                }}>
            </Stack.Screen>
        </Stack >
    )
}