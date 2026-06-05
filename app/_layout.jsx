import { useColorScheme } from 'react-native';
import React from 'react';
import { Tabs, useRouter } from 'expo-router';
import { Colors } from '../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

const RootLayout = () => {
  const themeColor = useColorScheme();

  const theme = Colors[themeColor] ?? Colors.dark;
  const route = useRouter();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.title,
        tabBarStyle: {
          backgroundColor: '#1e222b',
          height: 70,
          paddingBottom: 10,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#0d9f61',
        tabBarInactiveTintColor: '#95a5a6',
        tabBarLabelStyle: { fontSize: 14, fontWeight: '600' },
        tabBarIconStyle: { marginTop: -10 },

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'index') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'contact') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'about') {
            iconName = focused
              ? 'information-circle'
              : 'information-circle-outline';
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tabs.Screen
        name='index'
        options={{ title: 'Home' }}
      />
      <Tabs.Screen
        name='contact'
        options={{ title: 'Contact Us' }}
      />
      <Tabs.Screen
        name='about'
        options={{ title: 'About Us' }}
      />
    </Tabs>
  );
};

export default RootLayout;
