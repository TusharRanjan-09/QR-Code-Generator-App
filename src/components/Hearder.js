import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default function Header() {
    return (
        // <View>
        //     <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#3827b2', '#6c18a4',]} style={{ width: '80%', borderRadius: 30 }} >
        //         <TouchableOpacity style={{ height: 50, borderRadius: 30, justifyContent: 'center', alignItems: 'center', }} >
        //             <Text style={{ fontWeight: 'bold', fontSize: 19, color: 'white', }}  >LOGIN</Text>
        //         </TouchableOpacity>
        //     </LinearGradient>
        // </View>
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
        marginBottom:10

    },
});
