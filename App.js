import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { StyleSheet, View ,TextInput, TouchableOpacity, Text,} from 'react-native';
import Index from './src/index';
export default function App() {
  return (
    <View style={styles.container}>
      <Index/>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical:25
    
  },
});
