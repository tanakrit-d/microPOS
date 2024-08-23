import { Tabs } from 'expo-router';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          tabBarStyle: { position: "absolute", elevation: 0 },
        }}>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Menu',
            headerShown: false,
            headerShadowVisible: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name="restaurant" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="order"
          options={{
            title: 'Orders',
            headerShown: false,
            headerShadowVisible: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name="receipt" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="table"
          options={{
            title: 'Tables',
            headerShown: false,
            headerShadowVisible: false,
            tabBarIcon: ({ color, focused }) => (
              <MaterialIcons name="table-restaurant" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            href: null,
          }}
        />
      </Tabs>
  );
}
