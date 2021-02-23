import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { StyleSheet, View ,TextInput, TouchableOpacity, Text,} from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text>QR Code Generator</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aqua',
    // alignItems: 'center',
    width: '100%',
    height:50
    
  },
});
