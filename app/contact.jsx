import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Contact = () => {
  return (
    <View>
      <Text>CONTACT THE DEVELOPER</Text>
      <Text>EMAIL: ceejaydroidprince@gmail.com</Text>
      <Text>PHONE: 09049426376</Text>
      <Link href='/about'>Goto About Page</Link>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({});
