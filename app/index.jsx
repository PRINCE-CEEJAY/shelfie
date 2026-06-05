import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MyImage from '../assets/img/logo_light.png';
import { Image } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={MyImage} />
      <Text style={styles.title}>THE NUMBER 1</Text>
      <Text>READING LIST APP</Text>
      <Text style={styles.card}>Hello, This is a card</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  card: {
    backgroundColor: '#eee',
    padding: 10,
    margin: 5,
    boxShadow: '4px 4px rgba(0,0,0,0.2)',
  },
});
