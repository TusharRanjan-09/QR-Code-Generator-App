import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, } from 'react-native';
export default function Header() {
    return (
        <View style={styles.container}>
          <Text style={{fontSize:25, alignSelf:'center',color: 'white', fontWeight: 'bold'}}>QR Code Generator</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'crimson',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        marginBottom:20

    },
});
