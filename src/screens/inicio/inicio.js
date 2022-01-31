import React, { useState, useEfecct } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput, Image } from 'react-native';
import styles from './styles';
import { useFonts } from 'expo-font'

function Inicio({ }) {
    const [fontsLoaded] = useFonts({
        Montserrat: require('../../../assets/Fonts/Montserrat-Bold.ttf')

    })
    if (!fontsLoaded) {
        return null
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
        >
            <Image source={require('../../../assets/logo.png')}
                style={{ width: 53, height: 38 }}
            />

            <Text style={styles.title}>Olá, !</Text>

            <TouchableOpacity style={styles.btnAdicionar}>
                <Text style={styles.txtBtnAdicionar}>Adicionar receita</Text>
            </TouchableOpacity>



        </KeyboardAvoidingView>
    )

}
export default Inicio