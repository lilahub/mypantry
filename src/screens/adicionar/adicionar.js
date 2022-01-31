import React, { useState, useEfecct } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput, Image } from 'react-native';
import styles from './styles';
import { useFonts } from 'expo-font'

function Adicionar({ }) {
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

            <Text style={styles.title}>Acrescente os ingredientes</Text>

            <TouchableOpacity style={styles.btnAdicionar}>
                <Text style={styles.txtBtnAdicionar}>Adicionar outro</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnFinalizar}>
                <Text style={styles.txtBtnFinalizar}>Finalizar</Text>
            </TouchableOpacity>


        </KeyboardAvoidingView>
    )

}
export default Adicionar