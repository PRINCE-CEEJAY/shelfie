import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const About = () => {
  return (
    <View>
      <Text>
        PRINCE CEEJAY IS A MOBILE APP DEVELOPER SPECIALIZING IN REACT NATIVE AS
        WELL AS PYTHON FOR BACKEND
      </Text>
      <Link href='/contact'>Goto Contact Page</Link>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
