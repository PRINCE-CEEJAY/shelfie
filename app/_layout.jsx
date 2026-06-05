import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';

const RootLayout = () => {
  return (
    <Tabs>
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

const styles = StyleSheet.create({});
