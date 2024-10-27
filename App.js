import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen_01 from './screens/Screen_01';
import Screen_01_with_api from './screens/Screen_01_with_api';

export default function App() {
  return (
    // <Screen_01/>
    <Screen_01_with_api />
  );
}